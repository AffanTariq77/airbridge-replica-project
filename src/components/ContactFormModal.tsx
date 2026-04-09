import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface ContactFormModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ContactFormModal = ({ open, onOpenChange }: ContactFormModalProps) => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

    const [{ supabase }, { sendNotificationEmail }] = await Promise.all([
      import("@/lib/supabaseClient"),
      import("@/api/sendNotification"),
    ]);

    const { error: dbError } = await supabase.from("contact_messages").insert([
      {
        first_name: form.firstName,
        last_name: form.lastName,
        email: form.email,
        subject: form.subject,
        message: form.message,
      },
    ]);

    if (dbError) {
      setLoading(false);
      setError("Failed to submit. Please try again.");
      return;
    }

    try {
      await sendNotificationEmail(form);
      setSuccess(true);
      setForm({ firstName: "", lastName: "", email: "", subject: "", message: "" });
    } catch {
      setError("Saved, but failed to send email notification.");
    }
    setLoading(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="w-full max-w-[500px] rounded-[20px] p-6 sm:p-8">
        <DialogHeader>
          <DialogTitle className="text-2xl sm:text-3xl font-bold text-[#000000] text-center mb-1">
            Contact Us
          </DialogTitle>
        </DialogHeader>

        <form className="space-y-3 sm:space-y-4 mt-2" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={form.firstName}
              onChange={handleChange}
              className="input !bg-[#F4F4F4] border-none rounded-[12px] h-11 sm:h-12 text-sm"
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={form.lastName}
              onChange={handleChange}
              className="input !bg-[#F4F4F4] border-none rounded-[12px] h-11 sm:h-12 text-sm"
            />
          </div>

          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            value={form.email}
            onChange={handleChange}
            className="input w-full !bg-[#F4F4F4] border-none rounded-[12px] h-11 sm:h-12 text-sm"
          />

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            required
            value={form.subject}
            onChange={handleChange}
            className="input w-full !bg-[#F4F4F4] border-none rounded-[12px] h-11 sm:h-12 text-sm"
          />

          <textarea
            name="message"
            placeholder="Message"
            rows={4}
            value={form.message}
            onChange={handleChange}
            className="input w-full !bg-[#F4F4F4] border-none rounded-[12px] py-3 text-sm"
          />

          {error && <div className="text-red-600 text-sm text-center">{error}</div>}
          {success && (
            <div className="text-green-600 text-sm text-center">
              Thank you! We received your message.
            </div>
          )}

          <Button
            type="submit"
            className="w-full h-11 sm:h-12 text-sm sm:text-base font-bold rounded-full btn-gradient"
            disabled={loading}
          >
            {loading ? "Submitting..." : "Schedule a Mission Briefing"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ContactFormModal;

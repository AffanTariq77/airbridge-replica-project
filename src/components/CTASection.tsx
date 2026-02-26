import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { sendNotificationEmail } from "@/api/sendNotification";

interface CTASectionProps {
  badge?: string;
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  introButtonText?: string;
  introButtonLink?: string;
}

const CTASection = ({
  badge,
  title,
  description,
  buttonText,
  buttonLink,
  introButtonText,
  introButtonLink,
}: CTASectionProps) => {
  // Form state
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

  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handle form submit
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);
    // Save to Supabase (table: contact_messages)
    const { error } = await supabase.from("contact_messages").insert([
      {
        first_name: form.firstName,
        last_name: form.lastName,
        email: form.email,
        subject: form.subject,
        message: form.message,
      },
    ]);
    if (error) {
      setLoading(false);
      setError("Failed to submit. Please try again.");
      return;
    }
    // Send notification email
    try {
      await sendNotificationEmail(form);
      setSuccess(true);
      setForm({ firstName: "", lastName: "", email: "", subject: "", message: "" });
    } catch (err) {
      setError("Saved, but failed to send email notification.");
    }
    setLoading(false);
  };

  return (
    <section className="py-12 md:py-16 lg:py-24 bg-[hsl(var(--brand-lavender-dark))] bg-[url('https://airbridgedevs.com/wp-content/uploads/2025/09/aipt-bg1-4.jpg')] bg-center bg-cover relative overflow-hidden">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-[hsl(var(--brand-lavender-dark))]/80" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Intro Button (Centered at Top) */}
        {introButtonText && (
          <div className="flex justify-center mb-8 md:mb-12 lg:mb-16">
            <Link to={introButtonLink || "#"}>
              <Button className="btn-gradient text-sm md:text-base lg:text-xl xl:text-[28px] py-4 px-6 md:py-6 md:px-10 lg:py-10 lg:px-16 rounded-full font-bold shadow-none hover:shadow-none transition-transform break-words max-w-full">
                <span className="block overflow-wrap-anywhere">{introButtonText}</span>
              </Button>
            </Link>
          </div>
        )}

        <div className="grid lg:grid-cols-12 gap-8 md:gap-10 lg:gap-12 items-center">
          {/* LEFT SIDE (35%) */}
          <div className="lg:col-span-5 text-left">
            {badge && (
              <div className="flex justify-center md:justify-start">
                <span className="section-badge mb-4 md:mb-6 font-bold text-[#222222] bg-[#FFFFFF] inline-block shadow-sm text-xs md:text-sm break-words">
                  {badge}
                </span>
              </div>
            )}
            <h2 className="text-2xl md:text-3xl lg:text-[35px] font-bold mb-4 md:mb-6 leading-[1.3] text-[#000000] break-words overflow-wrap-anywhere">
              {title}
            </h2>
            <p className="text-[#222222]/80 max-w-xl mb-6 md:mb-8 text-sm md:text-base lg:text-lg leading-relaxed break-words overflow-wrap-anywhere">
              {description}
            </p>
            <div className="flex justify-center md:justify-start">
              <Link to={buttonLink}>
                <Button className="btn-gradient text-base px-10 py-5 rounded-full font-bold transition-transform hover:scale-105">
                  {buttonText}
                </Button>
              </Link>
            </div>
          </div>

          {/* SPACE (5%) */}
          <div className="hidden lg:block lg:col-span-1"></div>

          {/* RIGHT SIDE - Contact Form (60%) */}
          <div className="lg:col-span-6 bg-[#FFFFFF] shadow-2xl rounded-[15px] md:rounded-[20px] lg:rounded-[25px] p-6 md:p-8 lg:p-12">
            <h3 className="text-2xl md:text-3xl lg:text-[35px] font-bold mb-6 md:mb-8 text-[#000000] text-center">
              Contact Us
            </h3>

            <form className="space-y-4 md:space-y-5" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={form.firstName}
                  onChange={handleChange}
                  className="input !bg-[#F4F4F4] border-none rounded-[12px] md:rounded-[15px] h-12 md:h-14 text-sm md:text-base"
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={form.lastName}
                  onChange={handleChange}
                  className="input !bg-[#F4F4F4] border-none rounded-[12px] md:rounded-[15px] h-12 md:h-14 text-sm md:text-base"
                />
              </div>

              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                value={form.email}
                onChange={handleChange}
                className="input w-full !bg-[#F4F4F4] border-none rounded-[12px] md:rounded-[15px] h-12 md:h-14 text-sm md:text-base"
              />

              <input
                type="text"
                name="subject"
                placeholder="Subject"
                required
                value={form.subject}
                onChange={handleChange}
                className="input w-full !bg-[#F4F4F4] border-none rounded-[12px] md:rounded-[15px] h-12 md:h-14 text-sm md:text-base"
              />

              <textarea
                name="message"
                placeholder="Message"
                rows={5}
                value={form.message}
                onChange={handleChange}
                className="input w-full !bg-[#F4F4F4] border-none rounded-[12px] md:rounded-[15px] py-3 md:py-4 text-sm md:text-base"
              />

              {error && <div className="text-red-600 text-sm text-center">{error}</div>}
              {success && <div className="text-green-600 text-sm text-center">Thank you! We received your message.</div>}

              <Button type="submit" className="w-full h-12 md:h-14 lg:h-16 text-base md:text-lg font-bold rounded-full btn-gradient" disabled={loading}>
                {loading ? "Submitting..." : "Schedule a Mission Briefing"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;

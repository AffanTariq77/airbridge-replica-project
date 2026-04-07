import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState } from "react";

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

    const [{ supabase }, { sendNotificationEmail }] = await Promise.all([
      import("@/lib/supabaseClient"),
      import("@/api/sendNotification"),
    ]);

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
    <section className="cta-section py-4 sm:py-6 md:py-10 lg:py-12 bg-[hsl(var(--brand-lavender-dark))] bg-center bg-cover relative overflow-hidden" style={{ backgroundImage: "url('/images/bg-hero1.webp')" }}>
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-[hsl(var(--brand-lavender-dark))]/80" />

      <div className="container mx-auto max-w-[1280px] px-4 md:px-6 relative z-10">
        {/* Intro Button (Centered at Top) */}
        {introButtonText && (
          <div className="flex justify-center mb-4 md:mb-8 lg:mb-10">
            <Link to={introButtonLink || "/contact-us"} className="w-full max-w-[320px] sm:max-w-none sm:w-auto flex justify-center">
              <Button className="btn-gradient w-full max-w-[320px] sm:max-w-none sm:w-auto text-[11px] sm:text-sm md:text-base lg:text-xl xl:text-2xl py-2.5 sm:py-3 px-5 sm:px-6 md:py-4 md:px-10 lg:py-5 lg:px-14 rounded-full font-bold shadow-none hover:shadow-none transition-transform text-center leading-snug whitespace-normal md:whitespace-nowrap">
                <span className="block md:whitespace-nowrap">{introButtonText}</span>
              </Button>
            </Link>
          </div>
        )}

        {/* Always add top margin to the grid, but reduce if introButtonText is present */}
        <div className={`${introButtonText ? "mt-0" : "mt-8 md:mt-12 lg:mt-16"}`}>
          <div className="grid lg:grid-cols-12 gap-4 sm:gap-6 md:gap-8 lg:gap-10 items-center justify-center">
          {/* LEFT SIDE (35%) */}
          <div className="w-full max-w-[620px] lg:col-span-5 justify-self-center text-center lg:text-left mx-auto lg:mx-0 flex flex-col items-center lg:items-start">
            {badge && (
              <div className="flex w-full justify-center lg:justify-start">
                <span className="section-badge mb-4 md:mb-6 font-bold text-[#222222] bg-[#FFFFFF] inline-block shadow-sm text-xs md:text-sm break-words">
                  {badge}
                </span>
              </div>
            )}
            {title && (
              <h2 className="text-2xl md:text-3xl lg:text-[35px] font-bold mb-4 md:mb-6 leading-[1.3] text-[#000000] break-words overflow-wrap-anywhere">
                {title}
              </h2>
            )}
            <p className="text-[#222222]/80 text-center lg:text-left max-w-xl mx-auto lg:mx-0 mb-6 md:mb-8 text-sm md:text-base lg:text-lg leading-relaxed break-words overflow-wrap-anywhere">
              {description}
            </p>
            <div className="flex justify-center lg:justify-start w-full">
              <Link to={buttonLink} className="w-full max-w-[320px] sm:max-w-none sm:w-auto flex justify-center lg:justify-start">
                <Button className="btn-gradient w-full sm:w-auto text-base px-10 py-5 rounded-full font-bold transition-transform hover:scale-105">
                  {buttonText}
                </Button>
              </Link>
            </div>
          </div>

          {/* SPACE (5%) */}
          <div className="hidden lg:block lg:col-span-1"></div>

          {/* RIGHT SIDE - Contact Form (60%) */}
          <div className="lg:col-span-6 justify-self-center w-full max-w-[620px] mx-auto bg-[#FFFFFF] shadow-2xl rounded-[15px] md:rounded-[20px] lg:rounded-[25px] p-4 sm:p-5 md:p-6 lg:p-8 xl:p-10 lg:max-h-[calc(100vh-180px)] lg:overflow-y-auto">
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-[32px] font-bold mb-4 sm:mb-5 md:mb-6 text-[#000000] text-center">
              Contact Us
            </h3>

            <form className="space-y-3 sm:space-y-4 md:space-y-5" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 md:gap-5">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={form.firstName}
                  onChange={handleChange}
                  className="input !bg-[#F4F4F4] border-none rounded-[12px] md:rounded-[15px] h-11 sm:h-12 md:h-14 text-sm md:text-base"
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={form.lastName}
                  onChange={handleChange}
                  className="input !bg-[#F4F4F4] border-none rounded-[12px] md:rounded-[15px] h-11 sm:h-12 md:h-14 text-sm md:text-base"
                />
              </div>

              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                value={form.email}
                onChange={handleChange}
                className="input w-full !bg-[#F4F4F4] border-none rounded-[12px] md:rounded-[15px] h-11 sm:h-12 md:h-14 text-sm md:text-base"
              />

              <input
                type="text"
                name="subject"
                placeholder="Subject"
                required
                value={form.subject}
                onChange={handleChange}
                className="input w-full !bg-[#F4F4F4] border-none rounded-[12px] md:rounded-[15px] h-11 sm:h-12 md:h-14 text-sm md:text-base"
              />

              <textarea
                name="message"
                placeholder="Message"
                rows={3}
                value={form.message}
                onChange={handleChange}
                className="input w-full !bg-[#F4F4F4] border-none rounded-[12px] md:rounded-[15px] py-2.5 sm:py-3 md:py-4 text-sm md:text-base"
              />

              {error && <div className="text-red-600 text-sm text-center">{error}</div>}
              {success && <div className="text-green-600 text-sm text-center">Thank you! We received your message.</div>}

              <Button type="submit" className="w-full h-11 sm:h-12 md:h-14 lg:h-14 text-sm sm:text-base md:text-lg font-bold rounded-full btn-gradient" disabled={loading}>
                {loading ? "Submitting..." : "Schedule a Mission Briefing"}
              </Button>
            </form>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;

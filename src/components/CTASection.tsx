import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

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
  return (
    <section className="py-24 bg-[hsl(var(--brand-lavender-dark))] bg-[url('https://airbridgedevs.com/wp-content/uploads/2025/09/aipt-bg1-4.jpg')] bg-center bg-cover relative overflow-hidden">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-[hsl(var(--brand-lavender-dark))]/80" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Intro Button (Centered at Top) */}
        {introButtonText && (
          <div className="flex justify-center mb-16">
            <Link to={introButtonLink || "#"}>
              <Button className="btn-gradient text-[28px] py-10 px-16 rounded-full font-bold shadow-none hover:shadow-none transition-transform hover:scale-105">
                {introButtonText}
              </Button>
            </Link>
          </div>
        )}

        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* LEFT SIDE (35%) */}
          <div className="lg:col-span-5 text-left">
            {badge && (
              <span className="section-badge mb-6 text-[14px] font-bold text-[#222222] bg-[#FFFFFF] inline-block shadow-sm">
                {badge}
              </span>
            )}
            <h2 className="text-3xl lg:text-[35px] font-bold mb-6 leading-[1.3] text-[#000000]">
              {title}
            </h2>
            <p className="text-[#222222]/80 max-w-xl mb-8 text-lg leading-relaxed">
              {description}
            </p>
            <Link to={buttonLink}>
              <Button className="btn-gradient text-base px-10 py-5 rounded-full uppercase font-bold">
                {buttonText}
              </Button>
            </Link>
          </div>

          {/* SPACE (5%) */}
          <div className="hidden lg:block lg:col-span-1"></div>

          {/* RIGHT SIDE - Contact Form (60%) */}
          <div className="lg:col-span-6 bg-[#FFFFFF] shadow-2xl rounded-[25px] p-10 lg:p-12">
            <h3 className="text-[25px] font-bold mb-8 text-[#000000]">
              Contact Us
            </h3>

            <form className="space-y-5">
              <div className="grid grid-cols-2 gap-5">
                <input
                  type="text"
                  placeholder="First Name"
                  className="input !bg-[#F4F4F4] border-none rounded-[15px] h-14"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="input !bg-[#F4F4F4] border-none rounded-[15px] h-14"
                />
              </div>

              <input
                type="email"
                placeholder="Email"
                required
                className="input w-full !bg-[#F4F4F4] border-none rounded-[15px] h-14"
              />

              <input
                type="text"
                placeholder="Subject"
                required
                className="input w-full !bg-[#F4F4F4] border-none rounded-[15px] h-14"
              />

              <textarea
                placeholder="Message"
                rows={5}
                className="input w-full !bg-[#F4F4F4] border-none rounded-[15px] py-4"
              />

              <Button type="submit" className="w-full h-16 text-lg font-bold rounded-full btn-gradient">
                Schedule a Mission Briefing
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;

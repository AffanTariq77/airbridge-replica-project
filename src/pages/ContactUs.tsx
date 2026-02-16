import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import FAQSection from "@/components/FAQSection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Mail, Phone } from "lucide-react";
import CTASection from "@/components/CTASection";
import StrategicFocus from "@/components/StrategicFocus";

const ContactUs = () => {
  const faqs = [
    {
      question: "What is the first step to start a project?",
      answer:
        'The first step is our "Mission Briefing." This is a no-obligation consultation where we dive deep into your objectives and technical requirements to build a plan for success and determine if we are the right partner for your mission.',
    },
    {
      question: "What happens after I submit this contact form?",
      answer:
        'A senior strategist from our team will reach out to you within one business day to schedule your initial 30-minute "Mission Briefing" at a time that works for you.',
    },
    {
      question: "What kind of clients do you typically partner with?",
      answer:
        "We partner with businesses of all sizes, from startups to large enterprises, who are looking for a reliable, long-term technical partner to build and scale their most critical systems.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <PageHero
        title="Open a Secure Channel"
        subtitle="Connect with the Airbridge Devs Command"
        backgroundImage="https://airbridgedevs.com/wp-content/uploads/2025/10/breadcumb_section-4.jpg"
      />

      {/* Direct Communication Section */}
      <section className="py-24 bg-[#ffffff]">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Title / Info */}
            <div className="flex flex-col justify-center">
              <span className="section-badge mb-6 inline-block w-fit bg-[#f7f7f8]">Contact Us</span>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Direct Lines of Communication
              </h2>
              <p className="text-muted-foreground">
                Our command team is ready to coordinate your next strategic move. Reach
                out via our secure channels.
              </p>
            </div>

            {/* Email card */}
            <div className="contact-card group">
              <div className="w-20 h-20 mx-auto mb-8 rounded-full bg-primary/10 flex items-center justify-center transition-transform group-hover:scale-110">
                <Mail className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Email</h3>
              <p className="text-sm text-muted-foreground mb-4 uppercase tracking-widest">
                General Inquiries
              </p>
              <a
                href="mailto:info@airbridgedevs.com"
                className="text-lg font-semibold hover:text-primary transition-colors"
              >
                info@airbridgedevs.com
              </a>
            </div>

            {/* Phone card */}
            <div className="contact-card group">
              <div className="w-20 h-20 mx-auto mb-8 rounded-full bg-primary/10 flex items-center justify-center transition-transform group-hover:scale-110">
                <Phone className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Phone</h3>
              <p className="text-sm text-muted-foreground mb-4 uppercase tracking-widest">
                Direct Command
              </p>
              <a
                href="tel:+16282625009"
                className="text-lg font-semibold hover:text-primary transition-colors"
              >
                +1 628 2625 009
              </a>
            </div>
          </div>
        </div>
      </section>

      <StrategicFocus
        badge="Initiate Your Mission Briefing"
        description="Whether you have a defined objective or are in the early stages of strategic planning, we’re ready to engage. Use this form to outline your requirements, and our command team will be in touch to coordinate our next steps."
        buttonText="TRANSMIT MESSAGE"
        buttonLink="#"
      />

      {/* FAQ Section */}
      <FAQSection faqs={faqs} badge="Frequently Asked Questions" />

      {/* Bottom Capabilties Link */}
      {/* <section className="py-20 bg-navy text-white text-center">
        <div className="container mx-auto px-6">
          <span className="section-badge mb-6 inline-block bg-white/10 text-white border border-white/20">
            Explore Capabilities
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold mb-8">
            Learn more about our strategic approach
          </h2>
          <Link to="/services">
            <Button className="btn-gradient px-12 py-6 text-lg">
              View Our Full Capabilities
            </Button>
          </Link>
        </div>
      </section> */}

      {/* Main Contact CTA with Form */}
      <CTASection
        badge="REQUEST FREE TRIAL"
        title=""
        description="Learn more about our strategic approach and the solutions we deploy to ensure the success of our partners."
        buttonText="VIEW OUR SERVICES"
        buttonLink="#"
        introButtonText="EXPLORE OUR CAPABILITIES"
        introButtonLink="#"
      />
      <Footer />
    </div>
  );
};

export default ContactUs;

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import FAQSection from "@/components/FAQSection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Mail, Phone } from "lucide-react";

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
      />

      {/* Contact Info Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-8 items-start">
            {/* Left Column - Title */}
            <div>
              <span className="section-badge mb-4 inline-block">Contact Us</span>
              <h2 className="text-3xl lg:text-4xl font-bold">
                Direct Lines of Communication
              </h2>
            </div>

            {/* Email Card */}
            <div className="contact-card">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                <Mail className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Email</h3>
              <a
                href="mailto:info@airbridgedevs.com"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                info@airbridgedevs.com
              </a>
            </div>

            {/* Phone Card */}
            <div className="contact-card">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                <Phone className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Phone</h3>
              <a
                href="tel:+16282625009"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Mobile: +1 628 2625 009
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Briefing CTA */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="cta-section text-center relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute right-0 top-0 w-64 h-64 opacity-10">
              <svg viewBox="0 0 200 200" className="w-full h-full">
                <path
                  d="M100 0 L200 100 L100 200 L0 100 Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                />
              </svg>
            </div>

            <span className="section-badge mb-6 inline-block relative z-10">
              Initiate Your Mission Briefing
            </span>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8 text-lg relative z-10">
              Whether you have a defined objective or are in the early stages of
              strategic planning, we're ready to engage. Use this form to outline your
              requirements, and our command team will be in touch to coordinate our
              next steps.
            </p>
            <Link to="/services">
              <Button className="btn-gradient relative z-10">TRANSMIT MESSAGE</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection faqs={faqs} />

      {/* Explore Capabilities CTA */}
      <section className="py-12">
        <div className="container mx-auto px-6 text-center">
          <Link to="/services">
            <Button variant="outline" className="btn-outline-gradient">
              Explore Our Capabilities
            </Button>
          </Link>
        </div>
      </section>

      {/* Request Free Trial Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <span className="section-badge mb-4 inline-block">REQUEST FREE TRIAL</span>
            <p className="text-muted-foreground mb-8 text-lg">
              Learn more about our strategic approach and the solutions we deploy to
              ensure the success of our partners.
            </p>
            <Link to="/ai-expertise">
              <Button className="btn-gradient">View Our Services</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Schedule Briefing */}
      <section className="py-12">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-2xl font-bold mb-4">Contact Us</h3>
          <p className="text-muted-foreground mb-6">Schedule a Mission Briefing</p>
          <Link to="mailto:info@airbridgedevs.com">
            <Button className="btn-gradient">Get In Touch</Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactUs;

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const AboutUs = () => {
  const values = ["Precision", "Discipline", "Integrity", "Innovation"];

  const faqs = [
    {
      question:
        'We mention an "Airforce-inspired" background. How does that actually benefit your project?',
      answer:
        "It's the foundation of our culture. It means we operate with a level of discipline, structure, and accountability that is rare in the tech space. For you, this translates into clear communication, projects delivered on schedule, and a reliable team that is relentlessly focused on achieving the objective.",
    },
    {
      question: 'Why the name "Airbridge Devs"?',
      answer:
        "An airbridge is a critical lifeline in complex operations, built to deliver vital resources with speed and precision. We founded our company on this exact principle: to be a direct, reliable, and secure connection that delivers our clients the critical technical capabilities they need to succeed.",
    },
    {
      question: 'What do we mean by a "strategic partner," not just a "vendor"?',
      answer:
        "A vendor simply delivers a pre-defined service. A partner, on the other hand, is invested in your success. We work to understand your core business objectives first, then build technology to help you achieve them. We provide proactive advice and function as an integrated part of your team, not just as an outside contractor.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <PageHero
        title="About Us"
        subtitle="Discover how our unique background and core principles translate into reliable, high-performance solutions."
      />

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img
                src="https://airbridgedevs.com/wp-content/uploads/2025/09/Aipt-About_img-4.png"
                alt="AI Innovation Visualization"
                className="w-full max-w-lg mx-auto"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Our Mission: Connecting Vision with Precision
              </h2>
              <p className="text-muted-foreground mb-6">
                Airbridge Devs is founded on a core engineering principle: the
                "airbridge," which creates a direct and reliable connection for
                delivering critical capabilities.
              </p>
              <p className="text-muted-foreground mb-8">
                Guided by our founder's ex-Airforce background, our culture of
                discipline, structure, and operational excellence is precisely how we
                turn ambitious goals into measurable results.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {values.map((value, index) => (
                  <div key={index} className="value-item">
                    {value}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video/Animation Section Placeholder */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="bg-gradient-primary rounded-3xl aspect-video max-w-4xl mx-auto overflow-hidden relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-background/20 backdrop-blur-sm flex items-center justify-center cursor-pointer hover:bg-background/30 transition-colors">
                <div className="w-0 h-0 border-t-8 border-t-transparent border-l-[16px] border-l-background border-b-8 border-b-transparent ml-1" />
              </div>
            </div>
            {/* Animated gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-accent/20 animate-pulse" />
          </div>
        </div>
      </section>

      {/* Operational Model Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <span className="section-badge mb-4 inline-block">OPERATIONAL MODEL</span>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Your Global Strategic Advantage
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our unique structure connects elite technical talent from our operational
              hub in Pakistan with partners globally, particularly in the USA & KSA.
              This model provides access to a deep pool of vetted experts, ensures
              cost-effectiveness, and offers dedicated support designed for seamless
              cross-border collaboration.{" "}
              <strong className="text-foreground">
                Experience the power
              </strong>{" "}
              of a truly global, integrated team.
            </p>
            <Link to="/contact-us">
              <Button className="btn-gradient">Connect With Us</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection faqs={faqs} />

      {/* CTA Section */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="text-center mb-8">
            <Link to="/contact-us">
              <Button variant="outline" className="btn-outline-gradient">
                Ready to Launch Your Next Initiative?
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <CTASection
        badge="REQUEST FREE TRIAL"
        title="Let's Discuss Your Objective"
        description="Whether you're ready to start a new project, exploring how to scale your technical capabilities, or simply have questions about our approach, we'd love to hear from you."
        buttonText="Discover More"
        buttonLink="/ai-expertise"
      />

      <Footer />
    </div>
  );
};

export default AboutUs;

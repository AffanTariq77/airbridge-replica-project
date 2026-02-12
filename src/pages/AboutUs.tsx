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
        backgroundImage="https://airbridgedevs.com/wp-content/uploads/2025/10/breadcumb_section-4.jpg"
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
          </div>
        </div>
        {/* Decorative Accent */}
        <div className="absolute -z-10 -bottom-6 -right-6 w-full h-full border-2 border-primary/20 rounded-3xl" />
      </section >

      {/* Operational Model Section */}
      < section className="py-24 bg-[hsl(var(--brand-lavender-dark))]" >
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="section-badge mb-4 inline-block bg-white shadow-sm">
              OPERATIONAL EXCELLENCE
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-primary">
              The Airbridge Operational Model
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="service-card bg-white border-none shadow-lg">
                <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-xl mb-6 mx-auto">
                  0{index + 1}
                </div>
                <h3 className="text-xl font-bold mb-2">{value}</h3>
                <p className="text-sm text-muted-foreground">
                  Our commitment to {value.toLowerCase()} ensures your project remains
                  on target and resilient against all challenges.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section >

      {/* FAQ Section */}
      < FAQSection faqs={faqs} badge="Frequently Asked Questions" />

      {/* CTA Section */}
      < CTASection
        badge="Request Free Trial"
        title="Let's Discuss Your Objective"
        description="Whether you’re ready to start a new project, exploring how to scale your technical capabilities, or simply have questions about our approach, we’d love to hear from you."
        buttonText="Discover More"
        buttonLink="/contact-us"
        introButtonText="Ready to Launch Your Next Initiative?"
        introButtonLink="/about-us/#"
      />

      {/* {/* Join Our Command Section */}

      {/* < section className="py-24 bg-navy text-white text-center" >
        <div className="container mx-auto px-6">
          <h2 className="text-3xl lg:text-5xl font-bold mb-8">Join Our Command</h2>
          <p className="text-lg opacity-80 max-w-2xl mx-auto mb-12">
            We are always looking for elite technical talent to join our ranks. If you
            have the discipline and skill to build the systems of tomorrow, we want to
            hear from you.
          </p>
          <Link to="/contact-us">
            <Button className="btn-gradient px-12 py-6 text-lg">VIEW OPEN POSITIONS</Button>
          </Link>
        </div>
      </section > */}

      <Footer />
    </div >
  );
};

export default AboutUs;

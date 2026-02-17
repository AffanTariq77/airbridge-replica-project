import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import AnimatedBackground from "@/components/AnimatedBackground";

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
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
            {/* Image - shown first on mobile, first on desktop */}
            <div className="order-1 lg:order-1 w-full max-w-sm sm:max-w-md mx-auto lg:max-w-none">
              <div className="relative w-full aspect-square">
                {/* Base image */}
                <img
                  src="https://airbridgedevs.com/wp-content/uploads/2025/09/Aipt-About_img-4.png"
                  alt="AI Innovation Visualization"
                  className="w-full h-full object-contain"
                />
                {/* Overlay animated image */}
                <img
                  src="https://airbridgedevs.com/wp-content/uploads/2025/09/Aipt-over_img-4.png"
                  alt="Technology Network"
                  className="absolute inset-0 w-full h-full object-contain transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>
            
            {/* Text Content - shown second on mobile, second on desktop */}
            <div className="order-2 lg:order-2">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 leading-tight">
                Our Mission: Connecting Vision with Precision
              </h2>
              <p className="text-muted-foreground mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed">
                Airbridge Devs is founded on a core engineering principle: the
                "airbridge," which creates a direct and reliable connection for
                delivering critical capabilities.
              </p>
              <p className="text-muted-foreground mb-6 sm:mb-8 text-sm sm:text-base leading-relaxed">
                Guided by our founder's ex-Airforce background, our culture of
                discipline, structure, and operational excellence is precisely how we
                turn ambitious goals into measurable results.
              </p>
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {values.map((value, index) => (
                  <div key={index} className="value-item text-sm sm:text-base">
                    {value}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

  

      {/* Operational Model Section */}
      <section className="relative w-full overflow-hidden bg-gradient-to-br from-purple-600 via-blue-500 to-cyan-400">
        <div className="absolute inset-0 z-0">
          <AnimatedBackground />
        </div>
        <div className="relative z-20 w-full min-h-[400px] sm:min-h-[450px] md:min-h-[500px] flex items-center justify-center px-4 py-8 sm:py-12 md:py-16 lg:py-20">
          <div className="w-full max-w-[calc(100%-1rem)] sm:max-w-xl md:max-w-2xl lg:max-w-3xl mx-auto">
            <div className="bg-white rounded-xl sm:rounded-2xl lg:rounded-3xl shadow-xl p-5 sm:p-8 md:p-12 lg:p-16 text-center backdrop-blur-sm">
              <div className="space-y-3 sm:space-y-4 md:space-y-6">
                <span className="inline-block bg-gray-100 text-gray-800 px-3 sm:px-4 md:px-6 py-1 sm:py-1.5 rounded-full font-semibold tracking-widest text-[9px] sm:text-[10px] md:text-xs uppercase">
                  OPERATIONAL MODEL
                </span>
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 leading-tight">
                  Your Global Strategic Advantage
                </h2>
                <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-700 leading-relaxed max-w-prose mx-auto">
                  Our unique structure connects elite technical talent from our operational hub in Pakistan with partners globally, particularly in the USA & KSA. This model provides access to a deep pool of vetted experts, ensures cost-effectiveness, and offers dedicated support designed for seamless cross-border collaboration.
                  {" "}
                  <span className="font-bold text-gray-900">Experience the power</span> of a truly global, integrated team.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

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

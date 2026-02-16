import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import FAQSection from "@/components/FAQSection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  FullStackIcon,
  AIEngineeringIcon,
  StaffAugmentationIcon,
  StrategicConsultingIcon,
} from "@/components/icons/ServiceIcons";
import ServiceCard from "@/components/ServiceCard";
import { Puzzle, ShieldCheck, Settings, Network } from "lucide-react";
import CTASection from "@/components/CTASection";
import StrategicFocus from "@/components/StrategicFocus";


const AIExpertise = () => {
  const solutions = [
    {
      icon: <img src="https://airbridgedevs.com/wp-content/uploads/2025/09/Aipt-solution6-4.png" alt="LLM Integrations" className="w-full h-full object-contain" />,
      title: "LLM Integrations",
      description:
        "We begin by connecting the power of Large Language Models directly with your business systems, creating the essential foundation for advanced AI functionality.",
    },
    {
      icon: <img src="https://airbridgedevs.com/wp-content/uploads/2025/09/Aipt-solution4-4.png" alt="AI Guardrails" className="w-full h-full object-contain" />,
      title: "AI Guardrails",
      description:
        "We implement a critical framework of safeguards and controls to ensure that all AI operations are safe, predictable, and aligned with your business standards.",
    },
    {
      icon: <img src="https://airbridgedevs.com/wp-content/uploads/2025/09/Aipt-solution05-1-4.png" alt="Automation & Efficiency" className="w-full h-full object-contain" />,
      title: "Automation & Efficiency",
      description:
        "Our focus is turning AI capability into business efficiency. We deploy intelligent automation to streamline workflows, reduce costs, and increase your overall operational speed.",
    },
    {
      icon: <img src="https://airbridgedevs.com/wp-content/uploads/2025/09/Aipt-solution1-4.png" alt="Foundational AI Systems" className="w-full h-full object-contain" />,
      title: "Foundational AI Systems",
      description:
        "We architect AI systems for the long term. Our approach ensures the solutions we build are scalable, adaptable, and prepared to support your business as it evolves.",
    },
  ];

  const aiApproach = [
    {
      icon: <img src="https://airbridgedevs.com/wp-content/uploads/2025/09/Aipt-solution1-4.png" alt="Operational Efficiency" className="w-full h-full object-contain" />,
      title: "Operational Efficiency",
      description:
        "Achieved by automating key processes and strengthening your existing systems for peak, reliable performance",
    },
    {
      icon: <img src="https://airbridgedevs.com/wp-content/uploads/2025/09/Aipt-solution2-5.png" alt="Secure Systems" className="w-full h-full object-contain" />,
      title: "Secure & Resilient Systems",
      description:
        "Building intelligent platforms on a foundation of trust, with resilient architecture designed for sustained, dependable operation.",
    },
    {
      icon: <img src="https://airbridgedevs.com/wp-content/uploads/2025/09/Aipt-solution6-4.png" alt="Control & Guardrails" className="w-full h-full object-contain" />,
      title: "Control & Guardrails",
      description:
        "Establishing clear protocols and safeguards for a controlled, ethical, and effective deployment of AI capabilities.",
    },
    {
      icon: <img src="https://airbridgedevs.com/wp-content/uploads/2025/09/Aipt-solution4-4.png" alt="Future-Proofing" className="w-full h-full object-contain" />,
      title: "Future-Proofing Your Core Systems",
      description:
        "Architecting a scalable framework that ensures your core AI capabilities can evolve and adapt to future challenges.",
    },
    {
      icon: <img src="https://airbridgedevs.com/wp-content/uploads/2025/09/Aipt-solution05-1-4.png" alt="Actionable Intelligence" className="w-full h-full object-contain" />,
      title: "Actionable Intelligence",
      description:
        "Building systems that analyze complex data sets, uncovering critical insights, and empowering your team to make smarter, data-driven decisions.",
    },
  ];

  const implementationSteps = [
    {
      icon: <Puzzle />,
      step: "Integration",
      description:
        "We start by integrating Large Language Models (LLMs) into your existing systems to create the core connection for AI.",
    },
    {
      icon: <ShieldCheck />,
      step: "Control",
      description:
        "Next, we implement essential AI Guardrails to ensure every output is safe, controlled, and reliable",
    },
    {
      icon: <Settings />,
      step: "Automation",
      description:
        "Once controlled, the AI is used to automate key processes, increasing your operational speed and efficiency.",
    },
    {
      icon: <Network />,
      step: "Foundation",
      description:
        "Finally, we build a scalable, foundational AI system that can adapt and support your long-term growth.",
    },
  ];

  const faqs = [
    {
      question:
        'How is our "AI-Driven Engineering" different from just using a public AI tool?',
      answer:
        "Public tools are general-purpose. Our service is about building custom-engineered solutions. We integrate these intelligent models directly into your core business operations, creating secure systems and automated pipelines that are tailored to solve your specific operational challenges.",
    },
    {
      question:
        "AI systems can be unpredictable. How do we ensure they are safe and reliable for business use?",
      answer:
        'This is central to our "Control" phase. We engineer "AI Guardrails" a critical framework of safeguards and controls into every system we build. This ensures all operations are safe, predictable, and strictly aligned with your business standards and ethical guidelines.',
    },
    {
      question:
        "Is an AI project a one-time setup, or can it scale as your business grows?",
      answer:
        'Our goal is to build a "Foundational AI System." We architect for the long term, ensuring the solutions we build are scalable, adaptable, and prepared to support your business as it evolves. We build for your future, not just your immediate task.',
    },
    {
      question: 'What is "The Anatomy of an AI Operation"?',
      answer:
        "That is our disciplined, four-phase process: Integration, Control, Automation, and Foundation. It's the strategic framework we use to guide every project from an idea to a fully deployed, reliable, and scalable system.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <PageHero
        title="Command Your AI Future"
        subtitle="We build the intelligent systems that drive mission success."
        backgroundImage="https://airbridgedevs.com/wp-content/uploads/2025/10/breadcumb_section-4.jpg"
      />

      {/* Solutions Section */}
      <section className="py-20 bg-[#ffffff]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="section-badge mb-4 inline-block bg-[#f7f7f8]">Our Powerful Solutions</span>
            <h2 className="text-3xl lg:text-4xl font-bold">
              What Solutions We Best Offer
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {solutions.map((solution, index) => (
              <ServiceCard
                key={index}
                icon={solution.icon}
                title={solution.title}
                description={solution.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 bg-[hsl(var(--brand-lavender-dark))] anim-fade-in-up">
        <div className="container max-w-[1300px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
            <div className="flex flex-col gap-6 lg:pr-6">
              <span className="section-badge w-fit inline-block bg-[#f7f7f8]">OUR APPROACH TO AI</span>
              <h3 className="text-3xl lg:text-4xl font-normal leading-tight">
                We treat LLM integration as the starting point for a larger AI strategy that builds a lasting, competitive advantage
              </h3>
            </div>

            {aiApproach.map((item, index) => (
              <div
                key={index}
                className="service-card flex flex-col gap-4"
              >
                <div className="icon-container">{item.icon}</div>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Steps Table/Anatomy Section */}
      <section className="py-20 bg-[#ffffff]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="section-badge mb-4 inline-block bg-[#f7f7f8]">AI IMPLEMENTATION PROCESS</span>
            <h2 className="text-3xl lg:text-4xl font-bold">
              The Anatomy of an AI Operation
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {implementationSteps.map((step, index) => (
              <div key={index} className="ai-operation-card">
                <div className="ai-operation-card-icon">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{step.step}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>

          <StrategicFocus
            title="Start Your Business with AI"
            description="Successful AI adoption is more than a technical integration; it’s a strategic business evolution. Our approach focuses on creating secure, efficient, and reliable systems that deliver a measurable, long-term advantage."
            items={[]}
            buttonText=""
            buttonLink=""
          />

          {/* <div className="bg-primary/5 rounded-3xl p-8 lg:p-12 border border-primary/10">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">Strategic AI Implementation</h3>
                <p className="text-muted-foreground mb-6">
                  We don't just "add AI." We architect a complete mission-ready system
                  that is secure, scalable, and built on a foundation of operational
                  excellence.
                </p>
                <Link to="/contact-us">
                  <Button className="btn-gradient">Start Your Project</Button>
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-card p-6 rounded-2xl border border-border text-center">
                  <p className="text-3xl font-bold text-primary mb-1">24/7</p>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">
                    Operational Support
                  </p>
                </div>
                <div className="bg-card p-6 rounded-2xl border border-border text-center">
                  <p className="text-3xl font-bold text-primary mb-1">100%</p>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">
                    Secure Architecture
                  </p>
                </div>
                <div className="bg-card p-6 rounded-2xl border border-border text-center">
                  <p className="text-3xl font-bold text-primary mb-1">Deep</p>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">
                    LLM Expertise
                  </p>
                </div>
                <div className="bg-card p-6 rounded-2xl border border-border text-center">
                  <p className="text-3xl font-bold text-primary mb-1">Global</p>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">
                    Mission Ready
                  </p>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection faqs={faqs} badge="Frequently Asked Questions" />

      {/* CTA Section */}
      <CTASection
        badge="Request Free Trial"
        title="Initiate Contact"
        description="Whether you have a defined project or are in the early stages of planning, we're ready to listen. Send us a message to start the conversation."
        buttonText="Discover More"
        buttonLink="/services"
      />

      <Footer />
    </div>
  );
};

export default AIExpertise;


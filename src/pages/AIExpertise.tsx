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

const AIExpertise = () => {
  const solutions = [
    {
      icon: <FullStackIcon />,
      title: "LLM Integrations",
      description:
        "We begin by connecting the power of Large Language Models directly with your business systems, creating the essential foundation for advanced AI functionality.",
    },
    {
      icon: <AIEngineeringIcon />,
      title: "AI Guardrails",
      description:
        "We implement a critical framework of safeguards and controls to ensure that all AI operations are safe, predictable, and aligned with your business standards.",
    },
    {
      icon: <StaffAugmentationIcon />,
      title: "Automation & Efficiency",
      description:
        "Our focus is turning AI capability into business efficiency. We deploy intelligent automation to streamline workflows, reduce costs, and increase your overall operational speed.",
    },
    {
      icon: <StrategicConsultingIcon />,
      title: "Foundational AI Systems",
      description:
        "We architect AI systems for the long term. Our approach ensures the solutions we build are scalable, adaptable, and prepared to support your business as it evolves.",
    },
  ];

  const aiApproach = [
    {
      icon: <StrategicConsultingIcon />,
      title: "Operational Efficiency",
      description:
        "Achieved by automating key processes and strengthening your existing systems for peak, reliable performance",
    },
    {
      icon: <img src="https://airbridgedevs.com/wp-content/uploads/2025/09/Aipt-solution2-5.png" alt="Secure Systems" className="w-16 h-16 object-contain" />,
      title: "Secure & Resilient Systems",
      description:
        "Building intelligent platforms on a foundation of trust, with resilient architecture designed for sustained, dependable operation.",
    },
    {
      icon: <FullStackIcon />,
      title: "Control & Guardrails",
      description:
        "Establishing clear protocols and safeguards for a controlled, ethical, and effective deployment of AI capabilities.",
    },
    {
      icon: <AIEngineeringIcon />,
      title: "Future-Proofing Your Core Systems",
      description:
        "Architecting a scalable framework that ensures your core AI capabilities can evolve and adapt to future challenges.",
    },
    {
      icon: <StaffAugmentationIcon />,
      title: "Actionable Intelligence",
      description:
        "Building systems that analyze complex data sets, uncovering critical insights, and empowering your team to make smarter, data-driven decisions.",
    },
  ];

  const implementationSteps = [
    {
      step: "Integration",
      description:
        "We start by integrating Large Language Models (LLMs) into your existing systems to create the core connection for AI.",
    },
    {
      step: "Control",
      description:
        "Next, we implement essential AI Guardrails to ensure every output is safe, controlled, and reliable",
    },
    {
      step: "Automation",
      description:
        "Once controlled, the AI is used to automate key processes, increasing your operational speed and efficiency.",
    },
    {
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
        title="A Framework for Artificial Intelligence"
        subtitle="Our strategic approach to designing and deploying intelligent systems."
      />

      {/* Solutions Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="mb-16">
            <span className="section-badge mb-4 inline-block">
              OUR POWERFUL SOLUTIONS
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold">
              What Solutions We Best Offer
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="service-card">
                <div className="icon-container">{solution.icon}</div>
                <h3 className="text-xl font-bold mb-4">{solution.title}</h3>
                <p className="text-muted-foreground">{solution.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Approach Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="section-badge mb-4 inline-block">OUR APPROACH TO AI</span>
            <h2 className="text-3xl lg:text-4xl font-bold max-w-4xl mx-auto">
              We treat LLM integration as the starting point for a larger AI strategy
              that builds a lasting, competitive advantage
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiApproach.map((item, index) => (
              <div key={index} className="service-card bg-card">
                <div className="icon-container">{item.icon}</div>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="section-badge mb-4 inline-block">
              AI IMPLEMENTATION PROCESS
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold">
              The Anatomy of an AI Operation
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {implementationSteps.map((item, index) => (
              <div key={index} className="text-center">
                <div className="step-number mx-auto mb-6">{index + 1}</div>
                <h3 className="text-xl font-bold mb-4">{item.step}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="bg-gradient-hero rounded-3xl p-12 max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">
                Start Your Business with AI?
              </h3>
              <p className="text-muted-foreground mb-8">
                Successful AI adoption is more than a technical integration; it's a
                strategic business evolution. Our approach focuses on creating secure,
                efficient, and reliable systems that deliver a measurable, long-term
                advantage.
              </p>
              <Link to="/contact-us">
                <Button className="btn-gradient">Request a Briefing</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection faqs={faqs} />

      {/* CTA Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            What's Your Next Strategic Objective?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Let's schedule a strategic discussion. Our specialists can help you define
            a roadmap for AI that aligns with your most important business goals.
          </p>
          <Link to="/contact-us">
            <Button className="btn-gradient">Request a Briefing</Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AIExpertise;

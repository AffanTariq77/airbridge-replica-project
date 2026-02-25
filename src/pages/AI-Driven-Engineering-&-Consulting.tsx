import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import ServiceCard from "@/components/ServiceCard";
import CTASection from "@/components/CTASection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  FullStackIcon,
  AIEngineeringIcon,
  StaffAugmentationIcon,
  StrategicConsultingIcon,
} from "@/components/icons/ServiceIcons";
import StrategicFocus from "@/components/StrategicFocus";
import FAQSection from "@/components/FAQSection";

const AIDrivenEngineeringAndConsulting = () => {

   const aiApproach = [
    {
      icon: <img src="https://airbridgedevs.com/wp-content/uploads/2025/09/Aipt-solution1-4.png" alt="Efficiency" className="w-16 h-16 object-contain" />,
      title: "Prioritized Use Cases",
      description:
        "A list of high-impact AI opportunities specifically tailored to your business needs and goals.",
    },
    {
      icon: <img src="https://airbridgedevs.com/wp-content/uploads/2025/09/Aipt-solution2-5.png" alt="Secure Systems" className="w-16 h-16 object-contain" />,
      title: "Implementation Roadmap",
      description:
        "A detailed, multi-phase technical and operational plan for executing your AI strategy.",
    },
    {
      icon: <img src="https://airbridgedevs.com/wp-content/uploads/2025/09/Aipt-solution6-4.png" alt="Guardrails" className="w-16 h-16 object-contain" />,
      title: "Risk Assessment",
      description:
        "A complete analysis of potential challenges (technical, operational, ethical) and a clear mitigation plan.",
    },
    {
      icon: <img src="https://airbridgedevs.com/wp-content/uploads/2025/09/Aipt-solution4-4.png" alt="Future-Proofing" className="w-16 h-16 object-contain" />,
      title: "Governance Framework",
      description:
        "A scalable structure for managing your AI systems, including guidelines for security, ethics, and compliance.",
    },
    {
      icon: <img src="https://airbridgedevs.com/wp-content/uploads/2025/09/Aipt-solution05-1-4.png" alt="Intelligence" className="w-16 h-16 object-contain" />,
      title: "Success Metrics",
      description:
        "Clear Key Performance Indicators (KPIs) defined to measure the progress, impact, and Return on Investment (ROI) of your AI initiatives.",
    },
  ];

  return (
    <div className="min-h-screen bg-[hsl(var(--brand-lavender-dark))]">
      <Header />

      <PageHero
        title="Engineering Intelligent Operations with Actionable AI Strategy"
        subtitle="Our AI-Driven Engineering and Strategic AI Consulting integrate intelligent systems into your core operations—providing the clarity, expert guidance, and actionable roadmap needed to create a decisive technological edge and achieve measurable success."
         backgroundImage="http://airbridgedevs.com/wp-content/uploads/2025/11/Ai-Driven-Engineering-1-1.jpeg"
      />
    <StrategicFocus
            badge="The Challenge"
            title="Moving Beyond Manual Process"
            description={
              "Many businesses are rich in data but poor in insights. Manual processes, operational bottlenecks, and untapped data sources can severely limit growth and efficiency. To compete in the modern landscape, companies must transition from repetitive manual effort to intelligent, automated operations that unlock the true value of their information."
            }
          />
 {/* Our Approach Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="mb-8">
             <span className="section-badge mb-4 inline-block bg-[#f7f7f8]">Our Approach</span>
            <h3 className="text-4xl font-bold mb-4">From Data to Decisive Action</h3>
            <p className="text-muted-foreground text-left max-w-full mb-10 text-lg leading-relaxed">
              Our approach to AI engineering is both tactical and strategic. We build and integrate intelligent systems designed for a clear purpose: to create a measurable and decisive impact on your operational effectiveness.
              </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white border rounded-[10px] p-8 text-center shadow-sm hover:bg-[#F7F4FD] hover:shadow-md transition-colors duration-200">
              <img src="https://airbridgedevs.com/wp-content/uploads/2025/09/Aipt-solution6-4.png" alt="Custom AI Pipelines" className="mx-auto mb-6 w-20 h-20 object-contain" />
              <h4 className="text-xl font-bold mb-3">Custom AI Pipelines</h4>
              <p className="text-muted-foreground">We design and build end-to-end AI pipelines that automate the process of data ingestion, processing, and analysis, turning your raw data into actionable, real-time intelligence.</p>
            </div>

            <div className="bg-white border rounded-[10px] p-8 text-center shadow-sm hover:bg-[#F7F4FD] hover:shadow-md transition-colors duration-200">
              <img src="https://airbridgedevs.com/wp-content/uploads/2025/09/Aipt-solution4-4.png" alt="Advanced Automation Systems" className="mx-auto mb-6 w-20 h-20 object-contain" />
              <h4 className="text-xl font-bold mb-3">Advanced Automation Systems</h4>
              <p className="text-muted-foreground">We identify key areas for improvement and deploy advanced automation systems that handle complex tasks, reduce human error, and free up your team to focus on high-value strategic work.</p>
            </div>

            <div className="bg-white border rounded-[10px] p-8 text-center shadow-sm hover:bg-[#F7F4FD] hover:shadow-md transition-colors duration-200">
              <img src="https://airbridgedevs.com/wp-content/uploads/2025/09/Aipt-solution05-1-4.png" alt="Large Language Model (LLM) Integration" className="mx-auto mb-6 w-20 h-20 object-contain" />
              <h4 className="text-xl font-bold mb-3">Large Language Model (LLM) Integration</h4>
              <p className="text-muted-foreground">We go beyond off-the-shelf tools by fine-tuning and integrating LLMs directly into your workflows, creating custom solutions for content generation, data summarization, and enhanced customer support.</p>
            </div>
          </div>
        </div>
      </section>

           <StrategicFocus
            variant="lavender"
            badge="The Strategic Questions We Answer"
            title="Navigating the Critical Questions of AI Adoption"
            description={
              "Implementing AI successfully is about answering the right questions before you write a single line of code. We partner with you to address the core challenges that determine the success of any AI initiative:"
            }
            items={[
              'Where do we begin to get the highest return on investment?',
              'How do we build a scalable AI foundation for the future?',
              'What are the real operational and ethical risks, and how do we mitigate them?',
              'How do we define and measure the success and impact of our AI projects?'
            ]}
          />

      {/* Our Approach Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="mb-8">
            <h3 className="text-4xl font-bold mb-4">Our 3-Phase Strategic Framework</h3>
            <p className="text-muted-foreground text-left max-w-full mb-10 text-lg leading-relaxed">
              We provide a structured, disciplined process to take you from initial exploration to a complete, actionable plan, ensuring no detail is overlooked.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white border rounded-[10px] p-8 text-center shadow-sm hover:bg-[#F7F4FD] hover:shadow-md transition-colors duration-200">
              <img src="https://airbridgedevs.com/wp-content/uploads/2025/09/Aipt-solution6-4.png" alt="Assessment & Discovery" className="mx-auto mb-6 w-20 h-20 object-contain" />
              <h4 className="text-xl font-bold mb-3">Assessment & Discovery</h4>
              <p className="text-muted-foreground">We begin with a deep analysis of your business objectives, technical infrastructure, and data maturity. This reconnaissance phase allows us to identify the most valuable and viable opportunities for AI.</p>
            </div>

            <div className="bg-white border rounded-[10px] p-8 text-center shadow-sm hover:bg-[#F7F4FD] hover:shadow-md transition-colors duration-200">
              <img src="https://airbridgedevs.com/wp-content/uploads/2025/09/Aipt-solution4-4.png" alt="Roadmap & Architecture Design" className="mx-auto mb-6 w-20 h-20 object-contain" />
              <h4 className="text-xl font-bold mb-3">Roadmap & Architecture Design</h4>
              <p className="text-muted-foreground">We architect a detailed, phased implementation plan. This strategic blueprint outlines the required technologies, resources, timelines, and clear KPIs for your AI initiative.</p>
            </div>

            <div className="bg-white border rounded-[10px] p-8 text-center shadow-sm hover:bg-[#F7F4FD] hover:shadow-md transition-colors duration-200">
              <img src="https://airbridgedevs.com/wp-content/uploads/2025/09/Aipt-solution05-1-4.png" alt="Governance & Scalability Planning" className="mx-auto mb-6 w-20 h-20 object-contain" />
              <h4 className="text-xl font-bold mb-3">Governance & Scalability Planning</h4>
              <p className="text-muted-foreground">We establish the essential frameworks for AI governance, including security protocols and ethical guardrails, to ensure your solutions are not only powerful but also safe, reliable, and built to scale.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Deliverables / Strategic Outputs Section */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-24 bg-white">
        <div className="container max-w-[1300px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 items-start">
            <div className="flex flex-col gap-6 lg:pr-6 mb-4 md:mb-0">
              <span className="section-badge w-fit inline-block mx-auto md:mx-0">Your Strategic Deliverable</span>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-normal leading-tight break-words">
              At the conclusion of our consulting engagement, you will receive a comprehensive strategic document, your official blueprint that provides a clear path forward.
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
      </section >

      {/* FAQ Section */}
      <FAQSection
        badge="Frequently Asked Questions"
        title="Frequently Asked Questions"
        faqs={[
          {
            question: 'What kind of "AI-Driven" solutions do we build?',
            answer:
              'Our AI-Driven engineering teams build custom systems that automate complex business processes, analyze large datasets to find patterns, and improve your company’s overall operational speed and effectiveness.',
          },
          {
            question: 'Is this service right for us?',
            answer:
              'Yes. This service is designed for organizations that want to use advanced technology to gain an advantage but aren’t sure where to start. We handle all the complexity and provide you with a clear, actionable plan aligned with your business goals.',
          },
          {
            question: 'Do we only create the plan, or do we also build the solutions?',
            answer:
              'We do both. The consulting phase is the strategy. Once the blueprint is approved, our Full-Stack and Advanced Engineering teams are ready to execute the build.',
          },
          {
            question: 'How do we identify the best opportunities for your business?',
            answer:
              'We use a “mission-first” approach. We analyze your core operations to find the areas where new technology will deliver the most measurable impact, such as increasing efficiency, strengthening security, or creating new data-driven advantages.',
          },
          {
            question: 'What kind of "AI-Driven" solutions do we build?',
            answer:
              'Our AI-Driven engineering teams build custom systems that automate complex business processes, analyze large datasets to find patterns, and improve your company’s overall operational speed and effectiveness.',
          },
          {
            question: 'What is a "custom data pipeline"?',
            answer:
              'It’s an automated, end-to-end system we build to handle a specific, repetitive task. For example, it could process thousands of documents, extract key information, and deliver a concise summary, all without manual intervention.',
          },{
            question: 'What are "AI Guardrails" and why are they important?',
            answer:
              '“AI Guardrails” are the essential safety and control frameworks we build into every system. They ensure the technology operates within defined boundaries and produces reliable, predictable, and safe outputs for your business.',
          },{
            question: 'How do we measure the success of an AI-Driven engineering project?',
            answer:
            'Success is defined by the project objective. We establish clear KPIs before we build, focusing on measurable business outcomes such as a reduction in manual process time, an increase in operational speed, or a decrease in error rates.',
          },





        ]}
      />
    

      {/* CTA Section */}
      <CTASection
        badge="Request Free Trial"
        title="Initiate Contact"
        description="Whether you have a defined project or are in the early stages of planning, we're ready to listen. Send us a message to start the conversation."
        buttonText="Discover More"
        buttonLink="/ai-expertise"
        introButtonText="Ready to Launch Your Next Initiative?"
        introButtonLink="/services/#"
      />

      <Footer />
    </div>
  );
};

export default AIDrivenEngineeringAndConsulting;

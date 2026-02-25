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

const StaffAugmentation = () => {

 
  return (
    <div className="min-h-screen bg-[hsl(var(--brand-lavender-dark))]">
      <Header />

      <PageHero
        title="Reinforcing Your Team with Strategic Expertise"
        subtitle="Our Strategic Team Integration service provides the specialized expertise you need, precisely when and where 
        you need it, to overcome challenges and achieve critical objectives."
         backgroundImage="http://airbridgedevs.com/wp-content/uploads/2025/11/Staff-Augmentation-.jpeg"
         backgroundPosition="center bottom"
      />
    <StrategicFocus
            badge="The Challenge"
            title="Bridging the Capability Gap"
            description={
              "Critical projects can stall for one simple reason: a gap in capability. Whether it’s a lack of specialized knowledge, a need for more bandwidth on a key initiative, or an urgent deadline, traditional hiring is too slow and generic staff augmentation often lacks the required strategic focus. You don’t just need another person, you need the right expert, with the right skills, integrated seamlessly into your existing team."
            }
          />
 {/* Our Approach Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="mb-8">
            <span className="section-badge mb-4 inline-block bg-[#f7f7f8]">Our Approach</span>
            <h3 className="text-4xl font-bold mb-4">A Strategic Maneuver</h3>
            <p className="text-muted-foreground text-left max-w-full mb-10 text-lg leading-relaxed">
              This isn’t about filling a seat, it’s a strategic maneuver designed for mission success. We embed our vetted specialists directly into your existing force, where they function as a core part of your team. They bring not only their technical skills but also a disciplined, problem-solving mindset to accomplish clear, specific goals.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white border rounded-[10px] p-8 text-center shadow-sm hover:bg-[#F7F4FD] hover:shadow-md transition-colors duration-200">
              <img src="https://airbridgedevs.com/wp-content/uploads/2025/09/Aipt-solution1-4.png" alt="Accelerating Key Projects" className="mx-auto mb-6 w-20 h-20 object-contain" />
              <h4 className="text-xl font-bold mb-3">Accelerating Key Projects</h4>
              <p className="text-muted-foreground">When a deadline is critical, our specialists can be deployed to provide the focused effort needed to push a project across the finish line on schedule.</p>
            </div>

            <div className="bg-white border rounded-[10px] p-8 text-center shadow-sm hover:bg-[#F7F4FD] hover:shadow-md transition-colors duration-200">
              <img src="https://airbridgedevs.com/wp-content/uploads/2025/09/Aipt-solution6-4.png" alt="Solving Complex Problems" className="mx-auto mb-6 w-20 h-20 object-contain" />
              <h4 className="text-xl font-bold mb-3">Solving Complex Problems</h4>
              <p className="text-muted-foreground">For unique or difficult technical challenges, we provide experts with deep, specialized knowledge to architect solutions and guide your team through implementation.</p>
            </div>

            <div className="bg-white border rounded-[10px] p-8 text-center shadow-sm hover:bg-[#F7F4FD] hover:shadow-md transition-colors duration-200">
              <img src="https://airbridgedevs.com/wp-content/uploads/2025/09/Aipt-solution05-1-4.png" alt="Mentorship and Upskilling" className="mx-auto mb-6 w-20 h-20 object-contain" />
              <h4 className="text-xl font-bold mb-3">Mentorship and Upskilling</h4>
              <p className="text-muted-foreground">Our integrated specialists do more than just execute; they share their knowledge, elevating the capabilities of your entire team for a lasting impact.</p>
            </div>
          </div>
        </div>
      </section>
      {/* FAQ Section */}
      <FAQSection
        badge="Frequently Asked Questions"
        title="Frequently Asked Questions"
        faqs={[
          {
            question: 'How is this different from a traditional "staff augmentation" service?',
            answer:
              'We embed vetted, mission-ready specialists who act as integrated members of your team, not just temporary contractors. Our focus is strategic outcomes and operational discipline.',
          },
          {
            question: 'How quickly can we integrate a specialist into your team?',
            answer:
              'Depending on role complexity, we can typically place mission-ready specialists within days to a few weeks, following a short onboarding and alignment phase.',
          },
          {
            question: 'Do our integrated specialists work on-site?',
            answer:
              'We support both remote and on-site engagement models — we adapt to whatever model best fits your operational and security requirements.',
          },
          {
            question: 'What happens after the project or "mission" is complete?',
            answer:
              'We provide knowledge transfer, documentation, and optional continued support to ensure your team retains capability and the system remains reliable.',
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

export default StaffAugmentation;

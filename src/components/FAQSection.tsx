import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQ {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  badge?: string;
  title?: string;
  faqs: FAQ[];
  backgroundImage?: string;
}

const FAQSection = ({
  badge,
  title,
  faqs,
  backgroundImage = "https://airbridgedevs.com/wp-content/uploads/2025/09/aipt-bg1-4.jpg",
}: FAQSectionProps) => {
  return (
    <section className="py-10 bg-[#FFFFFF]">
      <div
        className="py-20 rounded-[50px] bg-bottom bg-center bg-cover mx-[20px] lg:mx-[100px]"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center">
            <div className="max-w-4xl w-full">
              <div className="text-center mb-3">
                {badge && (
                  <span className="section-badge mb-2 inline-block items-center">
                    {badge}
                  </span>
                )}
                <h2 className="text-3xl lg:text-4xl font-bold">{title}</h2>
              </div>
              <div className="rounded-3xl p-1 lg:p-5">
                <Accordion type="single" collapsible className="w-full">
                  {faqs.map((faq, index) => (
                    <AccordionItem
                      key={index}
                      value={`item-${index}`}
                      className="border-b border-border last:border-0"
                    >
                      <AccordionTrigger className="text-left text-lg font-medium py-4 hover:text-primary transition-colors">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground pb-6 text-base leading-relaxed">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;

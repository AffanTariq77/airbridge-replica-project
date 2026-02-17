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
    <section className="py-6 md:py-10 bg-[#FFFFFF] overflow-hidden">
      <div
        className="py-10 md:py-16 lg:py-20 rounded-[25px] md:rounded-[40px] lg:rounded-[50px] bg-bottom bg-center bg-cover mx-4 md:mx-8 lg:mx-[100px]"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center">
            <div className="max-w-4xl w-full">
              <div className="text-center mb-6 md:mb-8">
                {badge && (
                  <span className="section-badge mb-3 md:mb-4 inline-block items-center text-xs md:text-sm">
                    {badge}
                  </span>
                )}
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold px-2 md:px-4">{title}</h2>
              </div>
              <div className="rounded-2xl md:rounded-3xl p-2 md:p-4 lg:p-5">
                <Accordion type="single" collapsible className="w-full">
                  {faqs.map((faq, index) => (
                    <AccordionItem
                      key={index}
                      value={`item-${index}`}
                      className="border-b border-border last:border-0"
                    >
                      <AccordionTrigger className="text-left text-sm md:text-base lg:text-lg font-medium py-3 md:py-4 hover:text-primary transition-colors pr-8 break-words">
                        <span className="block w-full overflow-wrap-anywhere">{faq.question}</span>
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground pb-4 md:pb-6 text-sm md:text-base leading-relaxed pr-4 break-words overflow-wrap-anywhere">
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

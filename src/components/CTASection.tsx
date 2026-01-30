import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface CTASectionProps {
  badge?: string;
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

const CTASection = ({
  badge,
  title,
  description,
  buttonText,
  buttonLink,
}: CTASectionProps) => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="cta-section text-center">
          {badge && (
            <span className="section-badge mb-6 inline-block">{badge}</span>
          )}
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">{title}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8 text-lg">
            {description}
          </p>
          <Link to={buttonLink}>
            <Button className="btn-gradient text-base px-8 py-4">
              {buttonText}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;

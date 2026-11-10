import { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  link?: string;
  /**
   * Heading level for the card title. Defaults to h3, which is right where a
   * section h2 sits above the grid. On /services the cards are the page's own
   * top-level sections, so they pass "h2" to avoid skipping from h1 to h3.
   * Purely semantic — the styling is identical.
   */
  headingLevel?: "h2" | "h3";
}

const ServiceCard = ({
  icon,
  title,
  description,
  link,
  headingLevel: Heading = "h3",
}: ServiceCardProps) => {
  return (
    <div className="service-card flex flex-col h-full">
      <div className="icon-container">{icon}</div>
      <Heading className="text-xl font-bold mb-4">{title}</Heading>
      <p className="text-muted-foreground mb-6 flex-grow">{description}</p>
      {link && (
        <Link to={link}>
          <Button className="btn-gradient text-sm transition-transform hover:scale-105">READ MORE</Button>
        </Link>
      )}
    </div>
  );
};

export default ServiceCard;

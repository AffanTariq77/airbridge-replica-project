import { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  link?: string;
}

const ServiceCard = ({ icon, title, description, link }: ServiceCardProps) => {
  return (
    <div className="service-card flex flex-col h-full">
      <div className="icon-container">{icon}</div>
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <p className="text-muted-foreground mb-6 flex-grow">{description}</p>
      {link && (
        <Link to={link}>
          <Button className="btn-gradient text-sm">READ MORE</Button>
        </Link>
      )}
    </div>
  );
};

export default ServiceCard;

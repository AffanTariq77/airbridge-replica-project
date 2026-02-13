import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface StrategicFocusProps {
    badge?: string;
    title?: string;
    description?: string;
    items?: string[];
    buttonText?: string;
    buttonLink?: string;
    backgroundImage?: string;
}

const StrategicFocus = ({
    badge,
    title,
    description,
    items = [],
    buttonText,
    buttonLink,
    backgroundImage = "https://airbridgedevs.com/wp-content/uploads/2025/09/aipt-bg1-4.jpg",
}: StrategicFocusProps) => {
    return (
        <section className="bg-[#FFFFFF]">
            <div
                className="py-20 rounded-[50px] bg-bottom bg-center bg-cover mx-[20px] lg:mx-[100px]"
                style={{ backgroundImage: `url(${backgroundImage})` }}
            >
                <div className="container mx-auto px-6 flex justify-center items-center">
                    <div className="grid gap-12 text-center max-w-3xl">
                        <div>
                            {badge && (
                                <span className="section-badge mb-4 inline-block items-center">
                                    {badge}
                                </span>
                            )}
                            <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-center">
                                {title}
                            </h2>
                            {description && (
                                <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                                    {description}
                                </p>
                            )}
                            {items && items.length > 0 && (
                                <ul className="space-y-4 mb-8 text-left inline-block">
                                    {items.map((item, index) => (
                                        <li key={index} className="value-item">
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            )}
                            {buttonText && buttonLink && (
                                <div className="mt-8">
                                    <Button asChild className="btn-gradient font-bold transition-transform hover:scale-105">
                                        <Link to={buttonLink}>{buttonText}</Link>
                                    </Button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StrategicFocus;

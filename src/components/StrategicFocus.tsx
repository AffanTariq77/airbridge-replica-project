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
    variant?: "lavender" | "default";
}

const StrategicFocus = ({
    badge,
    title,
    description,
    items = [],
    buttonText,
    buttonLink,
    backgroundImage = "https://airbridgedevs.com/wp-content/uploads/2025/09/aipt-bg1-4.jpg",
    variant = "default",
}: StrategicFocusProps) => {
    return (
        <section className="bg-[#FFFFFF] py-12 sm:py-20 relative overflow-hidden">
            {variant === "lavender" ? (
                <div className="py-16 sm:py-24 rounded-[36px] mx-4 sm:mx-8 lg:mx-[100px] px-6 sm:px-10 bg-[#F3EBFB]">
                    <div className="container mx-auto px-0 flex justify-center items-center">
                        <div className="max-w-4xl text-center">
                            {badge && (
                                <div className="flex justify-center">
                                    <span className="inline-block bg-white text-sm px-4 py-2 rounded-full shadow mb-6">
                                        {badge}
                                    </span>
                                </div>
                            )}
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6">
                                {title}
                            </h2>
                            {description && (
                                <p className="text-muted-foreground mb-6 sm:mb-8 text-lg leading-relaxed max-w-3xl mx-auto">
                                    {description}
                                </p>
                            )}
                            {items && items.length > 0 && (
                                <ul className="space-y-4 mb-8 max-w-2xl mx-auto text-left">
                                    {items.map((item, index) => (
                                        <li key={index} className="flex items-start gap-4">
                                            <span className="mt-1 text-lg text-[#222]">›</span>
                                            <span className="text-base text-muted-foreground">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </div>
                </div>
            ) : (
                <div
                    className="py-12 sm:py-20 rounded-[50px] bg-bottom bg-center bg-cover mx-4 sm:mx-8 lg:mx-[100px] px-4 sm:px-6"
                    style={{ backgroundImage: `url(${backgroundImage})` }}
                >
                    <div className="container mx-auto px-0 flex justify-center items-center">
                        <div className="grid gap-8 text-center max-w-3xl">
                            <div>
                                {badge && (
                                    <div className="flex justify-center">
                                        <span className="section-badge mb-4 inline-block items-center mx-auto md:mx-0">
                                            {badge}
                                        </span>
                                    </div>
                                )}
                                <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-center">
                                    {title}
                                </h2>
                                {description && (
                                    <p className="text-muted-foreground mb-6 sm:mb-8 text-lg leading-relaxed">
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
            )}
        </section>
    );
};

export default StrategicFocus;

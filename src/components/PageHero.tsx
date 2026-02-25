import { ReactNode } from "react";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  badge?: string;
  backgroundImage?: string;
  backgroundPosition?: string;
  children?: ReactNode;
}

const PageHero = ({ title, subtitle, badge, backgroundImage, backgroundPosition = 'center center', children }: PageHeroProps) => {
  return (
    <section
      className="page-hero-bg relative py-20 lg:py-28 overflow-hidden"
      style={backgroundImage ? {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: backgroundPosition,
        backgroundRepeat: 'no-repeat'
      } : {}}
    >
      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute right-0 top-0 w-1/2 h-full opacity-20">
          <svg
            viewBox="0 0 500 500"
            className="w-full h-full"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="400"
              cy="100"
              r="200"
              stroke="hsl(262, 83%, 58%)"
              strokeWidth="0.5"
              opacity="0.3"
            />
            <circle
              cx="350"
              cy="150"
              r="150"
              stroke="hsl(186, 100%, 70%)"
              strokeWidth="0.5"
              opacity="0.3"
            />
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          {badge && <span className="section-badge mb-6 inline-block">{badge}</span>}
          <h1 className="text-[40px] lg:text-[45px] xl:text-[50px] font-semibold mb-6 leading-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="text-[16px] lg:text-[18px] text-muted-foreground max-w-2xl">
              {subtitle}
            </p>
          )}
          {children}
        </div>
      </div>
    </section>
  );
};

export default PageHero;

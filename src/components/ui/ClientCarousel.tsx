const clientLogos = [
  { name: "FanFood", logo: "/images/logo-1.webp" },
  { name: "DEVBLOCK", logo: "/images/logo-devblock.webp" },
  { name: "RAFF", logo: "/images/logo-raff2.webp" },
  { name: "NewClient", logo: "/images/logo-2.webp" },
];

export default function ClientsCarousel() {
  return (
    <section className="py-8 md:py-16">
      <div className="container mx-auto px-6">
        <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-center mb-6 md:mb-12">
          Clients We Worked With
        </h3>
      </div>

      <div className="relative w-full overflow-hidden">
        <div className="flex gap-6 md:gap-24 animate-marquee-fast md:animate-marquee-slow min-w-[400%]">
          {[...Array(6)].flatMap(() => clientLogos).map((client, index) => (
            <div key={index} className="flex-shrink-0 flex justify-center">
              <img
                src={client.logo}
                alt={client.name}
                loading="lazy"
                decoding="async"
                className="h-5 md:h-10 lg:h-14 object-contain"
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>
    </section >
  );
}

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules"; // v12 correct
import "swiper/css";

const clientLogos = [
  { name: "FanFood", logo: "http://airbridgedevs.com/wp-content/uploads/2025/10/logoo-1.png" },
  { name: "DEVBLOCK", logo: "http://airbridgedevs.com/wp-content/uploads/2025/10/DevBlock_Logo_Color.png" },
  { name: "RAFF", logo: "http://airbridgedevs.com/wp-content/uploads/2025/10/raff2.png" },
  { name: "NewClient", logo: "http://airbridgedevs.com/wp-content/uploads/2025/10/logoo-2.png" },
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
        <div className="flex gap-12 md:gap-24 animate-marquee md:animate-marquee-slow">
          {[...clientLogos, ...clientLogos].map((client, index) => (
            <div key={index} className="flex-shrink-0 flex justify-center">
              <img
                src={client.logo}
                alt={client.name}
                className="h-10 md:h-16 lg:h-20 object-contain"
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>
    </section >
  );
}

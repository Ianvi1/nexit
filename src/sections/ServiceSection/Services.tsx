import React from "react";
import Bg from "../../assets/images/Bg1.png";
import MiniEllipse from "../../assets/icons/MiniEllipse.png";
import ServiceCard from "./ServiceCard";
import Stats from "./ServiceStats";
import { serviceCards, stats } from "./constants";

const ServicesSection: React.FC = () => {
  return (
    <section className="mt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="relative w-full">
        <img
          src={Bg}
          alt="Background"
          className="absolute -left-60 top-0 w-24 h-auto"
        />
      </div>

      <div className="flex flex-col items-center text-center mb-12 max-w-3xl mx-auto">
        <div className="flex items-center text-xs text-black uppercase tracking-widest mb-2">
          <img
            src={MiniEllipse}
            alt="Mini Ellipse"
            className="w-4 h-auto mr-2"
          />
          <span className="font-bold text-gray-500">SERVICES</span>
        </div>

        <h2 className="font-marcellus text-4xl sm:text-3xl mb-4">
          Empowering Brands Through <br /> Strategic Digital Services
        </h2>

        <p className="text-xs text-[#797E88] border-l border-[#D8DDE1] pl-4 sm:pl-6 whitespace-pre-line">
          Established In 1995, NEXIN Has Been A Leading Force <br /> In The
          Digital Landscape For Over Two Decades. We're <br /> A Passionate Team
          Of Designers,
        </p>

        <div className="bg-[#D8DDE1] h-[1px] w-full mt-8"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        {serviceCards.map((card) => (
          <ServiceCard key={card.title} data={card} />
        ))}
      </div>
      <Stats data={stats} />
    </section>
  );
};

export default ServicesSection;

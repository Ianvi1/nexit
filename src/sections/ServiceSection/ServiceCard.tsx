import React from "react";
import type { ServiceCardData } from "./types";

interface ServiceCardProps {
  data: ServiceCardData;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ data }) => {
  return (
    <div
      className={`border p-6 flex flex-col justify-between ${
        data.highlighted
          ? "border-lime-300 bg-lime-50"
          : "border-gray-200 bg-white"
      }`}
    >
      <p
        className={`text-xs mb-2 ${
          data.highlighted ? "text-gray-500" : "text-gray-400"
        }`}
      >
        {data.subtitle}
      </p>
      <h3 className="font-marcellus text-3xl mb-3 whitespace-pre-line">
        {data.title}
      </h3>
      <div className="w-12 h-12 mb-4">
        <img src={data.icon} alt={`${data.subtitle} Icon`} />
      </div>
      <p className="text-xs leading-5 text-gray-400 mb-4 whitespace-pre-line">
        {data.description}
      </p>
      <button
        className={`self-end p-2 rounded-full border transition ${
          data.highlighted
            ? "border-lime-300 bg-lime-300 hover:bg-lime-400 text-white"
            : "border-gray-300 hover:bg-gray-100"
        }`}
      >
        <img src={data.buttonIcon} className="inline-block" alt="Arrow Icon" />
      </button>
    </div>
  );
};

export default ServiceCard;

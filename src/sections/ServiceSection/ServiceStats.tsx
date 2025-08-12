import React from "react";
import type { StatData } from "./types";

interface StatsProps {
  data: StatData[];
}

const ServiceStats: React.FC<StatsProps> = ({ data }) => {
  return (
    <div className="flex flex-wrap justify-center gap-8 text-center">
      {data.map(({ value, label }) => (
        <div
          key={label}
          className="flex flex-col justify-center items-center w-36 h-36 rounded-full border border-gray-300"
        >
          <span className="text-3xl font-semibold">{value}</span>
          <span className="text-xs font-marcellus text-gray-500">{label}</span>
        </div>
      ))}
    </div>
  );
};

export default ServiceStats;

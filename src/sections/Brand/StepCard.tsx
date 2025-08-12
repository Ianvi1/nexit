import React from "react";
import type { Step } from "./types";

interface StepCardProps {
  step: Step;
  index: number;
  isLast: boolean;
}

const StepCard: React.FC<StepCardProps> = ({ step, index, isLast }) => {
  return (
    <div className="relative flex flex-col sm:w-1/3">
      <span className="absolute max-xl:right-2 top-1/12 right-[5rem] text-3xl font-bold text-gray-300 select-none pointer-events-none">
        0{index + 1}
      </span>

      <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center relative z-10">
        <img src={step.icon} alt={`${step.title} Icon`} />
      </div>

      {!isLast && (
        <div className="hidden max-xl:right-20 sm:block absolute top-1/6 right-[16rem] w-16 h-[1px] bg-black">
          <div className="absolute right-0 top-1/4 -translate-y-1/2 border-t-2 border-r-2 border-black w-3 h-3 rotate-45"></div>
        </div>
      )}

      <h3 className="font-marcellus text-left text-lg mt-8 mb-3">
        {step.title}
      </h3>
      <p className="text-left text-gray-500 text-sm max-w-xs">
        {step.description}
      </p>
    </div>
  );
};

export default StepCard;

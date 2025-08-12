import React from "react";
import MiniEllipse from "../../assets/icons/MiniEllipse.png";
import StepCard from "./StepCard";
import { steps } from "./constants";

const Work: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <p className="font-bold text-sm text-center uppercase tracking-widest text-gray-500 mb-2 flex justify-center items-center gap-2">
        <img src={MiniEllipse} alt="Mini Ellipse" className="w-4 h-auto mr-2" />
        WORKFLOW
      </p>

      <h2 className="text-center text-4xl font-marcellus mb-16">How We Work</h2>

      <div className="flex flex-col sm:flex-row items-center justify-between gap-16 sm:gap-12">
        {steps.map((step, index) => (
          <StepCard
            key={step.title}
            step={step}
            index={index}
            isLast={index === steps.length - 1}
          />
        ))}
      </div>
    </section>
  );
};

export default Work;

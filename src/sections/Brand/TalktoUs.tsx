import React from "react";
import { ArrowUpRight } from "lucide-react";

const TalkSection: React.FC = () => {
  return (
    <section className="w-full bg-[#121212] text-white px-6 py-16 md:py-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-gallery font-light leading-tight">
            Let's Create <br />
            <span className="block font-gallery font-light">
              Something Great
            </span>
          </h1>
          <p className="mt-4 text-sm text-white">
            We Shift You From Today's Reality To Tomorrow's Potential, Ensuring
          </p>
        </div>

        <button className="flex items-center justify-center bg-[#BFF747] text-black rounded-full w-28 h-28 hover:scale-105 transition-transform">
          <span className="flex items-center gap-1 text-sm font-bold">
            Let's Talk
            <ArrowUpRight size={14} />
          </span>
        </button>
      </div>
    </section>
  );
};

export default TalkSection;

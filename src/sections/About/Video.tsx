import React from "react";
import Banner2 from "../../assets/images/Banner2.png";
const PlayVideo: React.FC = () => {
  return (
    <section className="w-full bg-white">
      <div className="relative">
        <div className="h-[420px] sm:h-[520px] bg-[linear-gradient(0deg,#11182733,rgba(0,0,0,0.15))] flex items-center justify-center">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${Banner2})` }}
            aria-hidden
          />

          <button
            aria-label="Play video"
            className="relative z-10 w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-white shadow-lg flex items-center justify-center font-semibold text-xs sm:text-sm"
            style={{
              boxShadow: "0 8px 24px rgba(15, 23, 42, 0.15)",
            }}
          >
            <span className="block text-[9px] sm:text-[11px]">PLAY VIDEO</span>
          </button>
        </div>

        <div className="bg-white -mt-8">
          <div className="pt-10 pb-16 sm:pt-12 sm:pb-20"></div>
        </div>
      </div>
    </section>
  );
};

export default PlayVideo;

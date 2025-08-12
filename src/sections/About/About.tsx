import React from "react";
import Ellipse from "../../assets/images/Ellipses.png";

import Logo1 from "../../assets/images/Techlogo1.png";
import Logo2 from "../../assets/images/Techlogo2.png";
import Logo3 from "../../assets/images/Techlogo3.png";
import Logo4 from "../../assets/images/Techlogo4.png";
import Logo5 from "../../assets/images/Techlogo5.png";
import BannerSection from "./BannerSection";

const logos = [Logo1, Logo2, Logo3, Logo4, Logo5];

const AboutNexit: React.FC = () => {
  return (
    <section className="w-full">
      <BannerSection />
      <div className="bg-[#121212] text-white py-20 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="relative flex flex-row-reverse md:static max-md:w-[4rem] max-md:relative max-md:mx-auto max-md:bottom-14 ">
            <img
              src={Ellipse}
              alt="Ellipse"
              className="absolute max-lg:static h-auto"
            />
          </div>
          <h2 className="h-[128px] max-md:text-[20px] max-md:text-center max-md:relative max-md:bottom-7 font-marcellus  text-2xl md:text-3xl leading-snug mb-6">
            We Collaborate With A Few Disability Service <br /> Providers To
            Create Inclusive Goods That <br /> Meet Their Requirements.
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-10">
            <div className="max-sm:text-center max-lg:static  relative left-24 top-5">
              <p className="text-4xl font-bold">25+</p>
              <p className="text-sm">Years Of Experience</p>
            </div>
            <div>
              <p className="max-sm:text-center text-sm leading-relaxed text-gray-300">
                Established in 1995, NEXIN has been a leading force <br /> in
                the digital landscape for over two decades. <br /> We're a
                passionate team of designers,
              </p>
              <div className="max-sm:flex max-sm:justify-center">
                <button className="mt-6 text-sm font-medium border-b-1 border-white">
                  More About Us 🡥
                </button>
              </div>
            </div>
            <div>
              <p className="max-sm:text-center text-sm leading-relaxed text-gray-300">
                Established in 1995, NEXIN has been a leading force <br /> in
                the digital landscape for over two decades. <br /> We're a
                passionate team of designers,
              </p>
              <div className="max-sm:flex max-sm:justify-center">
                <button className="mt-6 text-sm font-medium border-b-1 border-white">
                  Get in Touch 🡥
                </button>
              </div>
            </div>
          </div>
          <div className="mt-10">
            <div className="flex items-center mb-6">
              <div className="border-b border-[#2A2A2A] w-32"></div>

              <p className="font-marcellus text-[16px] text-white px-4">
                We Worked With Global Largest Brands
              </p>
              <div className="border-b border-[#2A2A2A] flex-1 "></div>
            </div>
            <div className="flex flex-wrap gap-10 justify-center">
              {logos.map((logo, i) => (
                <div
                  key={i}
                  className="w-[196px] h-[50px] mt-3 flex items-center justify-center"
                >
                  <img
                    src={logo}
                    alt={`Logo ${i + 1}`}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutNexit;

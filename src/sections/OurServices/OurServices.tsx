import React from "react";
import MiniEllipse from "../../assets/icons/MiniEllipse.png";

import { missionCards, images } from "./constants";
import MissionCard from "./MissionCard";

const StrategySection: React.FC = () => {
  return (
    <section className="bg-[#f8f8f8] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7">
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-2">
                <img
                  src={MiniEllipse}
                  alt="Mini Ellipse"
                  className="w-4 h-auto mr-2"
                />
                <span className="text-xs uppercase tracking-wider font-bold text-gray-500">
                  What Sets Us Apart
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-marcellus leading-tight">
                Driving Digital Success
                <br />
                With Strategy Design
              </h2>

              <p className="mt-4 text-sm text-gray-600 max-w-xl">
                We Believe That The Surest Measure Of Success Is When Our
                Partners With <br /> Us More Than Half — It’s More Than Just The
                Visuals.
              </p>
            </div>

            <div
              className="mt-6 w-full h-64 sm:h-72 lg:h-80 bg-cover shadow-sm"
              style={{ backgroundImage: `url(${images.serviceImage2})` }}
              aria-hidden="true"
            />
          </div>

          <aside className="lg:col-span-5">
            <div className="grid grid-cols-2 gap-4 items-start">
              <div>
                <div
                  className="w-full h-64 bg-cover"
                  style={{ backgroundImage: `url(${images.serviceImage1})` }}
                  aria-hidden="true"
                />
              </div>

              <div>
                <p className="text-xs leading-5 text-gray-600">
                  We Believe That The Surest Measure Of Success Is When Our
                  Partners With Us More Than Half. We’re Here To Support Your
                  Growth.
                </p>

                <p className="text-xs leading-5 text-gray-600 mt-4">
                  We Believe That The Surest Measure Of Success Is When Our
                  Partners With Us More Than Half — It’s More Than Just The
                  Visuals.
                </p>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6 items-start">
              <div className="flex flex-col items-start">
                <p className="text-xs leading-5 text-gray-500 mb-4">
                  Conduct thorough market research to the fast target audience
                  behaviours. Submit as many design tasks.
                </p>

                <button
                  className="w-24 h-24 max-sm:w-16 max-sm:h-16 max-sm:mx-auto rounded-full border border-black flex flex-col items-center justify-center text-sm hover:bg-gray-50 transition"
                  aria-label="Contact Us"
                >
                  <span className="text-xs font-bold">Contact Us 🡥</span>
                </button>
              </div>

              <div>
                <div className="relative bottom-10">
                  <h3 className="font-marcellus mb-2">Our Mission</h3>
                  <p className="text-xs leading-5 text-gray-500 mb-4">
                    Conduct thorough market research to the fast target audience
                    behaviours.
                  </p>
                </div>

                <div className="flex gap-4">
                  {missionCards.map((card) => (
                    <MissionCard key={card.title} card={card} />
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default StrategySection;

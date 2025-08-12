import React from "react";
import Avatar from "../../assets/images/avatar.png";
import ViewAllServices from "./ViewAllServices";
import AvatarReviews from "./AvatarReviews";

const DigitalSolution: React.FC = () => {
  return (
    <section className="bg-gray-50 py-16 px-4 flex justify-center">
      <div
        className="
        max-lg:relative
        max-lg:left-45
          max-w-8xl
          flex 
          max-xl:w-full
          max-xl:h-[500px]
          max-xl:justify-center
          lg:flex-row lg:items-center lg:justify-between
        "
      >
        {/* Texto principal */}
        <div
          className="flex-1 
          flex flex-col 
          max-xl:relative
          max-xl:mt-[10rem]
          items-center 
          lg:items-start lg:text-left
        "
        >
          <p className="max-lg:relative max-lg:top-28 max-lg:rig max-xl:text-center max-2xl:relative max-xl:top-45 max-2xl:left-20 text-sm ml-18 text-black-500 tracking-wide max-w-md">
            Great Design Services <br /> Without The Pretentiousness.!
          </p>
          <div className="max-lg:relative max-lg:bottom-50 max-xl:relative max-xl:right-20 max-xl:bottom-40 mx-auto max-w-[1071px] max-h-[145px] flex gap-6 lg:flex-row lg:items-start lg:gap-6">
            <h1 className="max-xl:text-[80px] max-2xl:relative font-gallery  text-[120px] max-xl: leading-none mt-4 lg:text-[220px]">
              Digital
            </h1>

            <p className="text-black max-w-lg max-lg:top-5 relative top-23 w-[430px] h-[63px]">
              We believe that the surest measure of success is when our partners
              with us more than half It's more than just the visuals. We're here
              to support your growth.{" "}
            </p>
          </div>
          <ViewAllServices />
          <div className="max-xl:right-30 max-xl:left-auto w-full relative left-14 flex justify-center">
            <div className="max-lg:relative max-lg:mr-20  max-xl:relative max-2xl:relative max-2xl:left-16 mt-6 flex items-center gap-6 mx-auto ">
              <button
                className="
                bg-[#BFF747] 
                text-black 
                text-[24px] sm:text-[30px] 
                w-[200px] sm:w-[256px] 
                h-[120px] sm:h-[142px] 
                max-xl:relative
                max-xl:left-20
                rounded-[50px] 
                font-semibold 
                flex justify-center items-center gap-2 text-center
              "
              >
                <p className="pr-20 text-left">
                  {" "}
                  WEB <br /> DESIGN{" "}
                </p>
              </button>
              <div
                className="bg-black max-xl:relative
                max-xl:left-1 rounded-[48px] w-[140px] h-[140px] flex items-center justify-center relative right-0 lg:right-[62px]"
              >
                <img
                  src={Avatar}
                  alt="Avatar"
                  className="w-[90px] h-[90px] sm:w-[102px] sm:h-[102px]"
                />
              </div>
              <h1 className="text-[120px] font-gallery max-lg:text-[100px] leading-none mt-4 min-lg:text-[220px]">
                Solution
              </h1>
            </div>
          </div>
        </div>
        <div className="max-lg:top-24 relative left-10 bottom-20">
          <AvatarReviews />
        </div>
      </div>
    </section>
  );
};

export default DigitalSolution;

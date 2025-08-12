import React from "react";
import Banner from "../../assets/images/Banner.png";

const BannerSection: React.FC = () => (
  <div className="w-full bg-gray-300 flex items-center justify-center">
    <img src={Banner} alt="Banner" className="max-w-full h-auto object-cover" />
  </div>
);

export default BannerSection;

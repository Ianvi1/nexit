import React from "react";
import Avatars from "../../assets/images/avatars.png";

const AvatarReviews: React.FC = () => {
  return (
    <div
      className="max-xl:right-[30rem]
     max-xl:top-15
      max-2xl:relative
      max-2xl:right-30
       flex
       flex-col 
       items-center 
       text-center"
    >
      <img src={Avatars} alt="Reviews" className="rounded-full" />
      <span className="text-black text-[16px] sm:text-[18px] whitespace-nowrap p-2">
        Excellent <strong className="text-[24px]">4.000+</strong> Reviews
      </span>
    </div>
  );
};

export default AvatarReviews;

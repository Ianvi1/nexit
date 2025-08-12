import React from "react";

const ViewAllServices: React.FC = () => {
  return (
    <div
      className="
    relative
    flex justify-center
    top-10
    max-xl:right-[15rem]
    max-xl:top-5
    max-lg:right[20rem]
    max-lg:bottom-40
    ml-auto
    p-4"
    >
      <button className="text-black mr-2 border-b-2 cursor-pointer  hover:text-gray-900 font-bold text-lg transition-colors">
        View All Services
        <span className="text-black p-2 ml-3 text-2xl">🡥</span>
      </button>
    </div>
  );
};

export default ViewAllServices;

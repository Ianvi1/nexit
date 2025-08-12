import React from "react";
import { FiSearch } from "react-icons/fi";
import { useSearch } from "../../../hooks/useSearch";

const HeaderActions: React.FC = () => {
  const { setIsOpen } = useSearch();

  return (
    <div className="hidden max-lg:ml-2 max-lg:w-[6rem] md:flex items-center gap-4">
      <button
        onClick={() => setIsOpen(true)}
        className="cursor-pointer p-4.5 border max-lg:p-[10px] border-gray-300 hover:bg-gray-100 transition"
        aria-label="Search"
      >
        <FiSearch size={16} />
      </button>

      <button className="bg-[#BFF747] cursor-pointer hover:bg-lime-500 text-black font-bold max-lg:text-[12px] h-[56px] w-[193px] justify-center flex items-center gap-1 transition">
        Get A Quote ↗
      </button>
    </div>
  );
};

export default HeaderActions;

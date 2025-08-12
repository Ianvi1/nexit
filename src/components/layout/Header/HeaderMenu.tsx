import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import type { MenuItem } from "./types";

interface HeaderMenuProps {
  activeLink: string;
  setActiveLink: (link: string) => void;
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
  menuItems: MenuItem[];
}

const HeaderMenu: React.FC<HeaderMenuProps> = ({
  activeLink,
  setActiveLink,
  menuOpen,
  setMenuOpen,
  menuItems,
}) => {
  return (
    <>
      {/* Menu desktop */}
      <nav
        className={`hidden md:flex gap-8 text-sm font-medium text-black ${
          menuOpen ? "hidden" : ""
        }`}
      >
        {menuItems.map((item) => (
          <div
            key={item}
            className="flex items-center gap-1 cursor-pointer relative group"
            onClick={() => setActiveLink(item)}
          >
            <a
              href="#"
              className="transition-colors max-xl:text-[12px] duration-200 text-black"
            >
              {item}
            </a>
            <IoIosArrowDown />
            <span
              className={`absolute left-0 bottom-[10px] h-[2px] bg-[#BFF747] transition-all duration-110 ${
                activeLink === item ? "w-full" : "group-hover:w-full"
              }`}
            />
          </div>
        ))}
      </nav>

      {/* Menu mobile */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg px-6 py-4 space-y-0">
          {menuItems.map((item, idx) => (
            <a
              key={item}
              href="#"
              className={`block transition-colors duration-200 px-4 py-3 cursor-pointer text-left
                ${
                  activeLink === item
                    ? "bg-black rounded-2xl text-[#BFF747]"
                    : "text-black hover:bg-gray-50"
                }
                border-b border-gray-300
                ${idx === menuItems.length - 1 ? "border-b-0" : ""}
              `}
              onClick={() => {
                setActiveLink(item);
                setMenuOpen(false);
              }}
            >
              {item}
            </a>
          ))}

          <button className="bg-[#BFF747] hover:bg-lime-500 text-black font-bold px-5 py-2 w-full transition rounded-md">
            Get A Quote ↗
          </button>
        </div>
      )}
    </>
  );
};

export default HeaderMenu;

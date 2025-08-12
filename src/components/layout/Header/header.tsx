import { useState, useEffect } from "react";
import Logo from "../../../assets/images/nexit.png";
import { menuItems } from "./constants";
import HeaderMenu from "./HeaderMenu";
import HeaderActions from "./HeaderActions";
import { FiMenu, FiX } from "react-icons/fi";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [activeLink, setActiveLink] = useState<string>("Home");

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
      }
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <header className="w-full bg-white shadow-sm">
      <div className="mx-auto flex justify-between px-6 py-4">
        <div className="flex items-center gap-2">
          <img src={Logo} alt="HexitLogo" className="h-auto w-auto lg:h-10" />
        </div>
        <HeaderMenu
          activeLink={activeLink}
          setActiveLink={setActiveLink}
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
          menuItems={menuItems}
        />
        <HeaderActions />
        <button
          className="md:hidden block"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>
    </header>
  );
};

export default Header;

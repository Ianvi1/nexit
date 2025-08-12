import React from "react";
import type { Link } from "./types";

interface FooterLinksProps {
  links: Link[];
  className?: string;
  ulClassName?: string;
}

const FooterLinks: React.FC<FooterLinksProps> = ({
  links,
  className = "",
  ulClassName = "",
}) => {
  return (
    <nav className={className}>
      <ul
        className={`flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm font-bold text-gray-700 ${ulClassName}`}
      >
        {links.map(({ label, href = "#" }) => (
          <li key={label}>
            <a href={href} className="hover:text-gray-900 transition-colors">
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default FooterLinks;

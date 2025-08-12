import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaBehance } from "react-icons/fa";

const socialIcons = [
  { Icon: FaFacebookF, label: "Facebook", href: "https://facebook.com" },
  { Icon: FaTwitter, label: "Twitter", href: "https://twitter.com" },
  { Icon: FaInstagram, label: "Instagram", href: "https://instagram.com" },
  { Icon: FaBehance, label: "Behance", href: "https://behance.net" },
];

const FooterSocial: React.FC = () => {
  return (
    <div className="flex items-center gap-4">
      {socialIcons.map(({ Icon, label, href }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="text-gray-800 hover:text-gray-600 transition-colors"
        >
          <Icon />
        </a>
      ))}
    </div>
  );
};

export default FooterSocial;

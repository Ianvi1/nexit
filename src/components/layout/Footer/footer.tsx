import React from "react";
import FooterLinks from "./FooterLinks";
import FooterSocial from "./FooterSocial";
import type { Link } from "./types";

const mainLinks: Link[] = [
  { label: "About Company" },
  { label: "Our Careers" },
  { label: "Services" },
  { label: "Contact" },
];

const conditionLinks: Link[] = [
  { label: "Privacy Policy" },
  { label: "Terms & Conditions" },
];

const Footer: React.FC = () => {
  return (
    <footer className="bg-white mt-12">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between py-6">
          <FooterLinks
            links={mainLinks}
            className="w-full md:w-1/2"
            ulClassName="md:justify-start"
          />
          <FooterLinks
            links={conditionLinks}
            className="w-full md:w-1/2 mt-4 md:mt-0"
            ulClassName="md:justify-end gap-x-6"
          />
        </div>
        <div className="border-t border-gray-200" />
        <div className="flex flex-col md:flex-row items-center md:items-center justify-between py-4">
          <FooterSocial />
          <p className="text-xs text-black mt-3 md:mt-0 text-center md:text-right">
            Copyright © 2025 Nex. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

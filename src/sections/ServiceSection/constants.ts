import VisualBrandingIcon from "../../assets/icons/Icon1.png";
import BrandStrategyIcon from "../../assets/icons/Icon2.png";
import IdentityBuildIcon from "../../assets/icons/Icon3.png";
import ArrowIcon1 from "../../assets/icons/ArrowIcon.png";
import ArrowIcon2 from "../../assets/icons/ArrowIcon2.png";

import type { ServiceCardData, StatData } from "./types";

export const serviceCards: ServiceCardData[] = [
  {
    title: "Web Design And Development",
    subtitle: "• Visual Branding",
    description:
      "Established In 1995, NEXIN Has Been Leading \n Force In The Digital Landscape For Over Two \n Decades. We're A Passionate",
    icon: VisualBrandingIcon,
    buttonIcon: ArrowIcon1,
  },
  {
    title: "Branding And \n Creative Services",
    subtitle: "• Brand Strategy",
    description:
      "Established In 1995, NEXIN Has Been Leading \n Force In The Digital Landscape For Over Two \n Decades. We're A Passionate",
    icon: BrandStrategyIcon,
    buttonIcon: ArrowIcon2,
    highlighted: true,
  },
  {
    title: "Creative Digital \n Agency",
    subtitle: "• Identity Build",
    description:
      "Established In 1995, NEXIN Has Been Leading \n Force In The Digital Landscape For Over Two \n Decades. We're A Passionate",
    icon: IdentityBuildIcon,
    buttonIcon: ArrowIcon1,
  },
];

export const stats: StatData[] = [
  { value: "35k+", label: "Project Complete" },
  { value: "10k+", label: "Happy Customers" },
  { value: "25+", label: "Years Experiences" },
  { value: "88", label: "Awards Achievement" },
];

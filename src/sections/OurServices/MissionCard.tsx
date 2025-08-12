import React from "react";
import type { MissionCardData } from "./types";

interface MissionCardProps {
  card: MissionCardData;
}

const MissionCard: React.FC<MissionCardProps> = ({ card }) => (
  <div className="relative flex-1">
    <div
      className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full bg-cover z-10"
      style={{ backgroundImage: `url(${card.image})` }}
      aria-hidden="true"
    />
    <div className="pt-14 bg-[#BFF747] rounded-4xl text-center py-6 px-4 shadow-sm">
      <div className="text-xs font-bold">{card.title}</div>
    </div>
  </div>
);

export default MissionCard;

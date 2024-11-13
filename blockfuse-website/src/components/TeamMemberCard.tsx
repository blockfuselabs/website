// TeamMemberCard.tsx
import React from "react";
import { useNavigate } from "react-router-dom";

interface TeamMemberProps {
  member: {
    id: number;
    slug: string;
    image: string;
    fullname: string;
    position: string;
  };
  navigate: ReturnType<typeof useNavigate>;
}

const TeamMemberCard: React.FC<TeamMemberProps> = ({ member, navigate }) => (
  <div
    onClick={() => navigate(`/teamdetails/${member.slug}`, { state: { member } })}
    className="flex flex-col items-center cursor-pointer transition-transform duration-200 transform hover:scale-105"
  >
    <div className="w-full h-72 sm:h-80 lg:h-96 overflow-hidden rounded-lg shadow-lg">
      <img
        src={member.image}
        alt={member.fullname}
        loading="lazy" 
        className="w-full h-full object-cover"
      />
    </div>

    <div className="mt-3 text-center">
      <p className="font-semibold text-lg hover:text-blue-500 dark:text-white">
        {member.fullname}
      </p>
      <p className="text-sm text-gray-500">{member.position}</p>
    </div>
  </div>
);

export default TeamMemberCard;

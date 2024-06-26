import React from "react";

export interface ProjectTabProps {
  name: string;
  onClick: (tag: string) => void;
  isSelected: boolean;
}
const ProjectTag: React.FC<ProjectTabProps> = ({
  name,
  onClick,
  isSelected,
}) => {
  const buttonStyles = isSelected
    ? "text-white border-[#c73950]"
    : "text-[#ADB7BE] border-slate-600 hover:border-white";
  return (
    <button
      className={`${buttonStyles} rounded-full border-2 border-[#c73950] px-6 py-3 text-xl cursor-pointer`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};

export default ProjectTag;

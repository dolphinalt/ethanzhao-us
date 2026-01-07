import React from "react";
import LanguageCard from "./LanguageCard";

interface ProjectCardProps {
  projectName: string;
  projectDescription: string;
  projectLanguages: string[];
  projectLink: string;
}

const ProjectCard = ({
  projectName,
  projectDescription,
  projectLanguages,
  projectLink,
}: ProjectCardProps) => {
  return (
    <div className="bg-gray-100 w-md p-4 rounded-lg border border-gray-200 bg-white shadow-md">
      <div className="mb-2 flex flex-row space-x-2">
        {projectLanguages.map((language) => (
          <LanguageCard key={language} language={language} />
        ))}
      </div>
      <h2 className="text-xl font-semibold mb-2 text-black">{projectName}</h2>
      <p className="text-gray-600 text-sm line-clamp-4 min-h-[5rem]">
        {projectDescription}
      </p>
      <a
        href={projectLink}
        className="text-blue-500 mt-4 hover:cursor-pointer flex items-center gap-2"
      >
        Learn More
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-6 mx-[-2px] mt-[2px]"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
          />
        </svg>
      </a>
    </div>
  );
};

export default ProjectCard;

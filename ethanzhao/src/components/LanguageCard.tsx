// import React from "react";

interface LanguageCardProps {
  language: string;
}

const LanguageCard = ({ language }: LanguageCardProps) => {
  return (
    <span className="bg-gray-100 px-3 py-[0.125rem] rounded-full text-sm text-gray-500">
      {language}
    </span>
  );
};

export default LanguageCard;

// import React from "react";
import { Link } from "react-router-dom";
import LanguageCard from "./LanguageCard";

interface BlogCardProps {
  title: string;
  date: string;
  tags: string[];
  blogLink: string;
}

const BlogCard = ({ title, date, tags, blogLink }: BlogCardProps) => {
  const isInternalLink = blogLink.startsWith("/");

  const linkComponent = isInternalLink ? (
    <Link
      to={blogLink}
      className="text-blue-500 mt-4 hover:cursor-pointer flex items-center gap-2"
    >
      Read
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
    </Link>
  ) : (
    <a
      href={blogLink}
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-500 mt-4 hover:cursor-pointer flex items-center gap-2"
    >
      Read
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
  );

  return (
    <div className="p-4 w-full rounded-lg border border-gray-200 bg-white shadow-md">
      <h2 className="text-xl font-semibold mb-2 text-black">{title}</h2>
      <p className="text-sm mb-2 text-gray-600">{date}</p>
      <div className="mb-2 flex flex-row space-x-2">
        {tags.map((tag) => (
          <LanguageCard key={tag} language={tag} />
        ))}
      </div>
      {linkComponent}
    </div>
  );
};

export default BlogCard;

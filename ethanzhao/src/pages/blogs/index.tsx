import React from "react";

import BlogCard from "../../components/BlogCard";

const Blogs = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 py-8">
      <div className="max-w-2xl w-full md:m-8">
        <div className="mt-8">
          <p className="text-3xl md:text-4xl mb-4">
            Ethan's{" "}
            <b className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
              Blog
            </b>
            <p className="mt-2 mb-4 text-sm text-gray-500 italic">
              Where I document what others might find interesting
            </p>
          </p>
          <hr className="mt-4 mb-4 border-t-2 border-gray-200"></hr>
          <div className="flex flex-col gap-4">
            <BlogCard
              title="To Win a (4th) CyberPatriot National Championship"
              date="March 24, 2025"
              tags={["Cybersecurity"]}
              blogLink="/blogs/cyberpatriot"
            />
            <BlogCard
              title="FIN01: 3D Printed F1 Steering Wheel"
              date="June 7, 2025"
              tags={["3D Printing", "Arduino", "CAD Design"]}
              blogLink="/blogs/f1-wheel"
            />
            <BlogCard
              title="First Impressions of a Hackathon"
              date="November 9, 2025"
              tags={["Hackathon", "Python", "React"]}
              blogLink="/blogs/first-impressions-of-a-hackathon"
            />
          </div>
        </div>
        <div className="mt-8 text-xs sm:text-sm text-gray-500 flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
          <a
            href="/"
            className="hover:underline"
          >
            Home
          </a>
          <p className="hidden sm:block">•</p>
          <a
            href="mailto:ethan.zhao.us@gmail.com"
            className="hover:underline break-all"
          >
            ethan.zhao.us@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default Blogs;

// import React from "react";

interface BlogPageProps {
  title: string;
  date: string;
  tags: string[];
  content: string | React.ReactNode;
}

const BlogPage = ({ title, date, tags, content }: BlogPageProps) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 py-8">
      <div className="max-w-2xl w-full">
        <p className="text-4xl font-bold mb-4">{title}</p>
        <p className="text-sm italic text-gray-500">{date}</p>
        <div className="mt-2 mb-2 italic">
          {tags.map((tag) => (
            <span
              key={tag}
              className="inline-block bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs mr-2 mb-2"
            >
              {tag}
            </span>
          ))}
        </div>
        <hr className="mb-4 border-t-2 border-gray-200"></hr>
        <div className="text-gray-600">{content}</div>
        <hr className="mt-4 border-t-2 border-gray-200"></hr>
        <div className="mt-2 text-xs sm:text-sm text-gray-500 flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
          <a
            href="/blogs"
            className="hover:underline"
          >
            Blogs
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

export default BlogPage;

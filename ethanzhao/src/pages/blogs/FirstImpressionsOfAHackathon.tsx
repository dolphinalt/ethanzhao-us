// import React from "react";

import BlogPage from "../../components/BlogPage";

const FirstImpressionsOfAHackathon = () => {
  return (
    <BlogPage
      title="First Impressions of a Hackathon"
      date="November 9, 2025"
      tags={["Hackathon", "Python", "React"]}
      content={
        <>
          <h2 className="h1-blog">Under construction</h2>
          <p className="mb-4">
            Blog is currently being written. Check back soon!
          </p>
        </>
      }
    />
  );
};

export default FirstImpressionsOfAHackathon;

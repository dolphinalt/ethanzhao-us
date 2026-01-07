import React, { useEffect } from "react";
import ProjectCard from "./components/ProjectCard";

const App = () => {
  useEffect(() => {
    const isDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    console.log(`Current mode: ${isDarkMode ? "dark" : "light"}`);
  }, []);
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 py-8 md:py-0">
      <div className="max-w-2xl w-full md:m-8">
        <h1 className="text-3xl md:text-4xl">
          Hi, I'm{" "}
          <b className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
            Ethan Zhao
          </b>
        </h1>
        <p className="mt-2 mb-4 text-sm text-gray-500 italic">CS @ UCI</p>
        <div className="text-sm md:text-base lg:text-base text-gray-700">
          <p className="mb-2">
            I'm a a First-Year Undergraduate at the University of California,
            Irvine who's curious about everything from full-stack software
            engineering to cybersecurity to AI. I'm currently focusedd on creating
            full stack web applications, such as AI allergy detection systems,
            an exclusive ridesharing platform for UCI students, and a badminton
            court reservation manager.
          </p>
          <p>
            I'm passionate about learning new technologies and applying them to
            solve real-world problems. In my free time, I enjoy playing badminton,
            skiing, or competing in cybersecurity competitions. Feel free to check
            out some of my projects!
          </p>
        </div>
        <hr className="mt-4 border-t-2 border-gray-200"></hr>
        <div className="pt-4 py-2 px-4 -mx-4 flex flex-row space-x-4 overflow-x-auto">
          <ProjectCard
            projectName="ZotRide"
            projectDescription="Student ridesharing platform made exclusively for UCI students."
            projectLanguages={["React", "Python"]}
            projectLink="https://github.com/IsaacPhoon/ZotRide"
          />
          <ProjectCard
            projectName="Halo"
            projectDescription="AI-powered food allergy management application that helps users safely navigate restaurant menus."
            projectLanguages={["React", "Python"]}
            projectLink="https://github.com/klin2686/halo"
          />
          <ProjectCard
            projectName="Rsrv"
            projectDescription="Modern, real-time court reservation management application built for badminton facilities."
            projectLanguages={["React", "NodeJS"]}
            projectLink="https://github.com/dolphinalt/rsrv"
          />
        </div>
        <div className="mt-8 text-xs sm:text-sm text-gray-500 flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
          <a
            href="https://www.linkedin.com/in/ethan-y-zhao/"
            className="hover:underline"
          >
            LinkedIn
          </a>
          <p className="hidden sm:block">•</p>
          <a href="https://github.com/" className="hover:underline">
            GitHub
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

export default App;

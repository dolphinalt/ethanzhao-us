import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App.tsx";
import Blogs from "./pages/blogs/index.tsx";
import F1Wheel from "./pages/blogs/F1Wheel.tsx";
import ToWinA4thCyberPatriotNationalChampionship from "./pages/blogs/ToWinA4thCyberPatriotNationalChampionship.tsx";
import FirstImpressionsOfAHackathon from "./pages/blogs/FirstImpressionsOfAHackathon.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/f1-wheel" element={<F1Wheel />} />
        <Route
          path="/blogs/cyberpatriot"
          element={<ToWinA4thCyberPatriotNationalChampionship />}
        />
        <Route
          path="/blogs/first-impressions-of-a-hackathon"
          element={<FirstImpressionsOfAHackathon />}
        />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);

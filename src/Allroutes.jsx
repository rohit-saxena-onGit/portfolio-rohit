import React from "react";
import { Home } from "./Components/Home"
import { About } from "./Components/About"
import { Project } from "./Components/Project"
import { Blog } from "./Components/Blog"
import { Route, Routes } from "react-router-dom"

export const Allroutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Project />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </div>
  );
};

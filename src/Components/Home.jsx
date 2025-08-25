import React from "react";
import { Link } from "react-router-dom";
import { ProjectCards } from "./ProjectCards";
import Notekeeper from "../assets/Notekeeper.png";
import API from "../assets/API.png";
import { BlogCards } from "./BlogCards";
import linerbinary from "../assets/linerbinary.png";
import ReactHooks from "../assets/ReactHooks.png";

export const Home = () => {
  return (
    <>
      <div className="  mt-5 w-full pt-15 md:pt-25 space-y-3 text-4xl md:text-7xl ">
        <h1 className=" font-semibold">
          Hi,I'm <span className="text-violet-400 "> Rohit Kumar Saxena </span>
        </h1>
        <h1 className=" font-semibold font-mono text-gray-300">Frontend Developer</h1>
      </div>

      <p className=" mt-10 font-medium font-sans text-gray-300 md:text-2xl">
        Creative Frontend Developer crafting responsive, user-friendly
        interfaces with modern web technologies.
      </p>

      <button className="border-2 border-white rounded-md my-5 px-3 py-1 text-2xl hover:cursor-pointer  hover:bg-gray-800">
        <span className="   flex items-center gap-3  ">
          <Link to={"/about"}>
            Discover More
            <i className="ri-arrow-right-s-line text-2x "></i>
          </Link>
        </span>
      </button>

      <div className="mt-10">
        <h1 className="text-2xl md:text-3xl font-semibold font-sans">
          Tech Stack{" "}
        </h1>

        <div className=" flex gap-3 text-2xl mt-1 md:mt-4 md:text-5xl">
          <i className="ri-html5-fill hover:text-amber-800 transition duration-300 ease-in-out hover:scale-110 cursor-pointer"></i>
          <i className="ri-css3-fill hover:text-blue-600 transition duration-300 ease-in-out hover:scale-110 cursor-pointer"></i>
          <i className="ri-javascript-fill hover:text-amber-300 transition duration-300 ease-in-out hover:scale-110 cursor-pointer"></i>
          <i className="ri-tailwind-css-fill hover:text-blue-400 transition duration-300 ease-in-out hover:scale-110 cursor-pointer"></i>
          <i className="ri-reactjs-line hover:text-blue-800 transition duration-300 ease-in-out hover:scale-110 cursor-pointer"></i>
          <i className="ri-git-merge-fill hover:text-amber-800 transition duration-300 ease-in-out hover:scale-110 cursor-pointer"></i>
        </div>
      </div>

      <div className=" mt-10">
        <h1 className="font-semibold text-violet-400">Highlighted Projects</h1>
        <h1 className="text-2xl mt-2 font-sans font-bold">
          What I've worked on
        </h1>
      </div>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
        <ProjectCards
          image={Notekeeper}
          title="Keep Notes"
          des="This dynamic note keeper, built with React, Redux, and JavaScript, offers a seamless and responsive experience for capturing and organizing all your thoughts and ideas."
          live="https://note-keeper-lovat.vercel.app/"
          github="https://github.com/rohit-saxena-onGit/NoteKeeper"
        />
        <ProjectCards
          image={API}
          title="API Tester"
          des="A lightweight, no-frills tool for quickly sending requests and inspecting responses from your API endpoints."
          live="https://api-tester-green-three.vercel.app/"
          github="https://github.com/rohit-saxena-onGit/api-tester"
        />
      </div>

      <div className="flex justify-center">
        <button className="mt-7 lg:mt-10 font-semibold flex items-center border md:text-2xl border-white rounded-md px-6 py-2 hover:bg-gray-800">
          <Link to="/project">See all projects</Link>
        </button>
      </div>
      <div className=" mt-10">
        <h1 className="font-semibold text-violet-400">Writing</h1>
        <h1 className="text-2xl mt-2 font-sans font-bold">Latest posts</h1>
      </div>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
        <BlogCards
          image={linerbinary}
          title="Linear and Binary Search "
          des="A visual understanding of Linear and Binary Search algorithms, highlighting their approach and efficiency in a clear, engaging format."
          live="https://medium.com/@rohitkumarsaxena0910/linear-and-binary-search-6e90a1db2362"
        />

        <BlogCards
          image={ReactHooks}
          title="Hooks in React.js"
          des="Unlock powerful features in React with Hooks — write cleaner, faster, and smarter functional components."
          live="https://medium.com/@rohitkumarsaxena0910/hooks-in-react-60fa777eefd0"
        />
      </div>
      <div className="flex justify-center">
        <button className="mt-7 lg:mt-10 font-semibold flex items-center border md:text-2xl border-white rounded-md px-6 py-2 hover:bg-gray-800">
          <Link to="/blog">See all blogs</Link>
        </button>
      </div>
      <div className="bg-gray-800 py-3 px-2 mt-16 rounded-lg  ">
        <h1 className="font-bold mb-4 text-2xl">Let's Work together</h1>
        <p className="text-gray-400 font-mono text-lg">
          I thrive in collaborative environments and enjoy working with
          designers, backend developers, and stakeholders to bring ideas to
          life. I'm open to partnerships that value creativity, clear
          communication, and quality outcomes.{" "}
        </p>

        <a
          href="http://t.me/Rohitraj2003"
          className=" mt-5 inline-block px-5 py-1 border  rounded-md hover:bg-gray-700"
        >
          Contact me
        </a>
      </div>
      <footer className=" my-20 rounded-lg py-3 flex justify-around text-lg font-light ">
        <div className="flex flex-col space-y-4 text-gray-300">
          <Link to="/" className="hover:text-white">
            Home
          </Link>
          <Link to="/about" className="hover:text-white">
            About
          </Link>
          <Link to="/project" className="hover:text-white">
            Project
          </Link>
          <Link to="/blog" className="hover:text-white">
            Blogs
          </Link>
        </div>

        <div className="space-y-4 text-gray-300 flex flex-col">
         <a href="https://github.com/rohit-saxena-onGit" className="hover:text-white">Github</a>
          <a href="http://t.me/Rohitraj2003" className="hover:text-white">Telegram</a>
        </div>
      </footer>
      <h1 className="mb-4 inline-block text-gray-300 md:ml-10 font-serif">©2025 Rohit.. Patna,India</h1>
    </>
  );
};

import React from "react";
import { BlogCards } from "./BlogCards";
import linerbinary from "../assets/linerbinary.png";
import ReactHooks from "../assets/ReactHooks.png";
import { Link } from "react-router-dom";

export const Blog = () => {
  const blogData = [
    {
      image: linerbinary,
      title: "Linear and Binary Search ",
      des: "A visual understanding of Linear and Binary Search algorithms, highlighting their approach and efficiency in a clear, engaging format.",
      live: "https://medium.com/@rohitkumarsaxena0910/linear-and-binary-search-6e90a1db2362",
    },
    {
      image: ReactHooks,
      title: "Hooks in React.js",
      des: "Unlock powerful features in React with Hooks — write cleaner, faster, and smarter functional components.",
      live: "https://medium.com/@rohitkumarsaxena0910/hooks-in-react-60fa777eefd0",
    },
  ];

  return (
    <>
      <div className="mt-25 w-full">
        <h1 className="text-2xl tracking-wider font-bold">Blogs</h1>
        <p className="mt-4 text-gray-400 tracking-wider">
          I write blogs on tech and computer science, breaking down complex
          topics into simple, insightful reads.
        </p>
      </div>
      <div className="flex flex-wrap justify-between">
        {blogData.map((blog, index) => (
          <BlogCards
            key={index}
            image={blog.image}
            title={blog.title}
            des={blog.des}
            live={blog.live}
          />
        ))}
      </div>

      <footer className=" my-20 rounded-lg py-3 flex justify-around text-lg font-light ">
        <div className="flex flex-col space-y-4 text-gray-300">
          <Link to="/" className="hover:text-white ">
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
          <a
            href="https://github.com/rohit-saxena-onGit"
            className="hover:text-white"
          >
            Github
          </a>
          <a href="http://t.me/Rohitraj2003" className="hover:text-white">
            Telegram
          </a>
        </div>
      </footer>
      <h1 className="mb-4 inline-block text-gray-300 md:ml-10 font-serif">
        ©2025 Rohit.. Patna,India
      </h1>
    </>
  );
};

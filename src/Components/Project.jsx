import React from 'react'
import { ProjectCards } from './ProjectCards'
import Project1 from "../assets/Project1.png";
import Project2 from "../assets/Project2.png";
import Calculator from "../assets/Calculator.png";
import { Link } from "react-router-dom";
import Portfolio from "../assets/Portfolio.png";
import Notekeeper from "../assets/Notekeeper.png";
import API from "../assets/API.png";
const projectData = [
  {
    image: Project1,
    title: "Landing Page",
    des: "I created a static landing page using HTML and CSS with a clean layout and structured design.",
    live: "https://rohit-saxena-ongit.github.io/Ficaco/",
    github: "https://github.com/rohit-saxena-onGit/Ficaco/tree/main"
  },
  {
    image: Project2,
    title: "Weather App",
    des: "I built a simple weather app using HTML, CSS, and JavaScript that fetches and displays real-time weather data from an API.",
    live: "https://github.com/rohit-saxena-onGit/weather",
    github: "https://github.com/rohit-saxena-onGit/weather"
  },
  {
    image: Calculator,
    title: "Calculator",
    des: "A sleek and responsive calculator app built using HTML, CSS, and JavaScript, designed for quick and accurate basic arithmetic operations.",
    live: "https://rohit-saxena-ongit.github.io/calculator/",
    github: "https://github.com/rohit-saxena-onGit/calculator"
  },
  {
    image: Portfolio,
    title: "My Portfolio",
    des: "An interactive portfolio crafted using React, designed to dynamically present my development work and technical abilities.",
    live: "https://portfolio-rohit-sand.vercel.app/",
    github: "https://github.com/rohit-saxena-onGit/portfolio-rohit"
  },
  {
    image: Notekeeper ,
    title: "Keep Notes",
    des: "This dynamic note keeper, built with React, Redux, and JavaScript, offers a seamless and responsive experience for capturing and organizing all your thoughts and ideas.",
    live: "https://note-keeper-lovat.vercel.app/",
    github: "https://github.com/rohit-saxena-onGit/NoteKeeper"
  }
   {
    image: API ,
    title: "API Tester",
    des: "A lightweight, no-frills tool for quickly sending requests and inspecting responses from your API endpoints.",
    live: "https://api-tester-green-three.vercel.app/",
    github: "https://github.com/rohit-saxena-onGit/api-tester"
  }
];

export const Project = () => {
  return (
    <>
      <div className='mt-25 w-full'>
        <h1 className='font-bold text-3xl tracking-wider'>Projects</h1>
        <p className='mt-4 text-gray-400 tracking-wider'>Collection of my projects that I build so far.</p>
      </div>
      <div className='mt-10 grid grid-cols-1 md:grid-cols-2 gap-6'>
        {projectData.map((project, index) => (
          <ProjectCards
            key={index}
            image={project.image}
            title={project.title}
            des={project.des}
            live={project.live}
            github={project.github}
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
  )
}

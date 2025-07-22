import React from "react";
import { Link } from "react-router-dom";
import profilepic from "../assets/profilepic.jpg";
export const About = () => {
  return (
    <>
      <div className=" mt-25 w-full">
        <h1 className="text-5xl font-bold font-sans">About me</h1>
        <p className=" mt-8 text-lg text-gray-300">
          I am a skilled Frontend Developer with experience in HTML, CSS,
          JavaScript, and React. I create responsive, user-friendly web
          interfaces with a focus on clean design and performance.
        </p>
      </div>
      <div className=" w-60 mt-10 h-60 mx-auto bg-amber-300  rounded-full overflow-hidden  flex items-center justify-center ">
        <img src={profilepic} alt="" className="  bg-amber-700" />
      </div>
      <div className="mx-auto w-2/3   mt-3 flex flex-col items-center text-xl font-bold justify-center">
        <h1>Rohit Kumar Saxena</h1>
        <p className="font-semibold text-gray-300 text-lg">
          Frontend Developer
        </p>
      </div>

      <div className=" mt-10">
        <h1 className="text-2xl font-semibold">Education & Background</h1>
        <p className="mt-3 text-gray-400">
          I am a pre-final year Computer Science student with a strong passion
          for web development. My academic journey has equipped me with
          problem-solving skills and a solid foundation in programming and
          software development.
        </p>
        <h1 className="text-2xl font-semibold mt-5">💻 Skills & Expertise</h1>
        <p className="mt-3 text-gray-400">
          I specialize in frontend development, where I enjoy creating
          responsive and visually appealing user interfaces. Additionally, I
          have a basic yet growing understanding of Data Structures and
          Algorithms (DSA), which helps me write efficient and optimized code.
        </p>
        <h1 className="text-2xl font-semibold mt-5">🛠️ Tech Stack & Tools</h1>
        <div className="space-y-3">
          <p className="mt-3 font-light text-lg">I am proficient in the following technologies:</p>
        <p className=" text-gray-400"><span className="font-semibold  text-gray-200">☻ Languages:</span> C, C++, and JavaScript</p>
        <p className=" text-gray-400"><span className="font-semibold text-gray-200">☻ Frontend:</span > HTML, CSS, and React.js</p>
        <p className=" text-gray-400"><span className="font-semibold text-gray-200">☻ Styling:</span> CSS3, Tailwind CSS</p>
        <p className=" text-gray-400"><span className="font-semibold text-gray-200">☻ Version Control: </span> Git and GitHub</p>
        </div>
        <div className="mt-15 ">
          <a className="border px-5 py-3 text-2xl font-semibold rounded-md hover:bg-gray-900 " href="#"><i class="ri-file-text-fill text-2xl"> </i> My Resume</a>
        </div>
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
               <a href="https://github.com/rohit-saxena-onGit" className="hover:text-white">Github</a>
                <a href="http://t.me/Rohitraj2003" className="hover:text-white">Telegram</a>
              </div>
            </footer>
            <h1 className="mb-4 inline-block text-gray-300 md:ml-10 font-serif">©2025 Rohit.. Patna,India</h1>
    </>
  );
};

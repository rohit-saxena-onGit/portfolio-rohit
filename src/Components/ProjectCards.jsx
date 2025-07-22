import React from "react";

export const ProjectCards = (props) => {
  return (
    <div className="h-auto w-full bg-gray-900 p-5 rounded-lg md:w-90 lg:w-140 mt-2">
      <div className="h-fit w-full  overflow-hidden  rounded-md">
        <img
          src={props.image}
          alt=""
          className="object-cover w-full h-full  transition-all duration-300 transform hover:scale-105"
        />
      </div>

      <h1 className="text-2xl font-semibold mt-1">{props.title}</h1>
      <p className="text-gray-300 ">{props.des}</p>
      <div className="flex gap-5 mt-3 ">
        <a href={props.live} className="border px-4 py-1 rounded-md hover:bg-gray-800">
          Preview
        </a>
        <a href={props.github} className="border px-4 py-1 rounded-md hover:bg-gray-800">
          Github
        </a>
      </div>
    </div>
  );
};

import React from "react";
import { FaGithub } from "react-icons/fa";
import { RiGlobalLine } from "react-icons/ri";
import { LazyLoadImage } from "react-lazy-load-image-component";
const Project = (props) => {
  return (
    <>
      {/* image */}
      <div
        className="group relative overflow-hidden border-2
              border-white rounded-xl"
      >
        {/* overlay */}
        <div
          className="group-hover:bg-black/70 w-full h-full absolute
              z-40 transition-all duration-300"
        ></div>
        {/* img */}
        <LazyLoadImage
          className="group-hover:scale-125 transition-all duration-500 inline"
          src={props.src}
          alt={props.alt}
        />
        {/* preTitle */}
        <div
          className="absolute -bottom-full left-12 
              group-hover:bottom-24 transition-all duration-500 z-50"
        >
          <span className="text-gradient pointer-events-none">
            {props.preTitle}
          </span>
        </div>
        {/* title */}
        <div
          className="absolute -bottom-full left-12 
              group-hover:bottom-14 transition-all duration-500 z-50 gap-x-4 flex items-center"
        >
          <a
            href={props.live}
            target={"_blank"}
            rel="noreferrer"
            className="text-2xl hover:rotate-[360deg] transition-all duration-500"
          >
            <RiGlobalLine />
          </a>
          <a
            href={props.code}
            target={"_blank"}
            rel="noreferrer"
            className="text-[22px] hover:rotate-[360deg] transition-all duration-500"
          >
            <FaGithub />
          </a>
          {/* <span className="text-3xl text-white">{props.title}</span> */}
        </div>
      </div>
    </>
  );
};

export default Project;

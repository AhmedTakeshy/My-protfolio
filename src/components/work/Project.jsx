import React from "react";
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
          <span className="text-gradient">{props.preTitle}</span>
        </div>
        {/* title */}
        <div
          className="absolute -bottom-full left-12 
              group-hover:bottom-14 transition-all duration-500 z-50"
        >
          <span className="text-3xl text-white">{props.title}</span>
        </div>
      </div>
    </>
  );
};

export default Project;

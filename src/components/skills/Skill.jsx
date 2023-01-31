import React from "react";

const Skill = (props) => {
  return (
    <div className=" flex flex-col items-center">
      <img src={props.src} alt={props.alt} className="w-[45%] mb-6" />
      <h5 className="pointer-events-none tracking-widest font-semibold">
        {props.name}
      </h5>
    </div>
  );
};

export default Skill;

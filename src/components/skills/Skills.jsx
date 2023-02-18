import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../../assets/img/meter1.svg";
import meter2 from "../../assets/img/meter2.svg";
import meter3 from "../../assets/img/meter3.svg";
import Skill from "./Skill";

const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <section className="section pb-[50px] mt-8 flex justify-center" id="skills">
      <div className="container max-auto">
        <div className="bg-black shadow-xl transition-shadow duration-500 hover:shadow-[#B809C3] rounded-2xl text-center py-[60px] px-[50px] lg:mt-[-60px]">
          <h2 className="font-bold text-[45px] tracking-wider pointer-events-none">
            Skills
          </h2>
          <p className=" text-[#b8b8b8] text-lg leading-6 tracking-[0.8] mt-[14px] mb-20"></p>
          <Carousel
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            className=" w-[80%] mx-auto"
          >
            <Skill src={meter1} alt="react meter" name="HTML5 & CSS3" />
            <Skill src={meter3} alt="tailwind meter" name="Javascript" />
            <Skill src={meter1} alt="sass meter" name="Sass" />
            <Skill src={meter2} alt="node meter" name="ReactJs" />
            <Skill src={meter2} alt="jquery meter" name="jQuery" />
            <Skill src={meter3} alt="tailwind meter" name="Tailwind" />
            <Skill src={meter1} alt="bootstrap meter" name="Bootstrap" />
            <Skill src={meter2} alt="nodejs meter" name="NodeJS" />
            <Skill src={meter1} alt="express meter" name="Express" />
            <Skill src={meter3} alt="mongodb meter" name="MongoDB" />
            <Skill src={meter2} alt="redux meter" name="Redux" />
            <Skill src={meter1} alt="redux-toolkit meter" name="Redux-toolkit" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Skills;

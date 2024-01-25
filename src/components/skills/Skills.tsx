"use client"
import Carousel, { ResponsiveType } from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import dynamic from 'next/dynamic'



const Skill = dynamic(() => import("./Skill"));
export default function Skills() {
  const responsive: ResponsiveType = {
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
            <Skill src="/img/meter1.svg" alt="react meter" name="HTML5 & CSS3" />
            <Skill src="/img/meter3.svg" alt="tailwind meter" name="Javascript" />
            <Skill src="/img/meter2.svg" alt="typescript meter" name="Typescript" />
            <Skill src="/img/meter1.svg" alt="sass meter" name="Sass" />
            <Skill src="/img/meter2.svg" alt="node meter" name="ReactJs" />
            <Skill src="/img/meter3.svg" alt="react-router meter" name="React-router" />
            <Skill src="/img/meter2.svg" alt="jquery meter" name="jQuery" />
            <Skill src="/img/meter3.svg" alt="tailwind meter" name="Tailwind" />
            <Skill src="/img/meter1.svg" alt="bootstrap meter" name="Bootstrap" />
            <Skill src="/img/meter2.svg" alt="nextjs meter" name="NextJS" />
            <Skill src="/img/meter1.svg" alt="redux-toolkit meter" name="Redux-toolkit" />
            <Skill src="/img/meter3.svg" alt="redux meter" name="Redux" />
            <Skill src="/img/meter1.svg" alt="Prisma meter" name="Prisma" />
            <Skill src="/img/meter2.svg" alt="PostgreSQL meter" name="PostgreSQL" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

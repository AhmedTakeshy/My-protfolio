"use client"
import Carousel, { ResponsiveType } from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import dynamic from 'next/dynamic'



const Skill = dynamic(() => import("./Skill"));

const skills = [
  {
    alt: "react meter image",
    name: "React",
    title: "React skill meter",
    src: "/img/meter1.svg",
  },
  {
    alt: "react-router meter image",
    name: "React-router",
    title: "React-router skill meter",
    src: "/img/meter2.svg",
  },
  {
    alt: "redux meter image",
    name: "Redux",
    title: "Redux skill meter",
    src: "/img/meter3.svg",
  },
  {
    alt: "redux-toolkit meter image",
    name: "Redux-toolkit",
    title: "Redux-toolkit skill meter",
    src: "/img/meter1.svg",
  },
  {
    alt: "nextjs meter image",
    name: "NextJS",
    title: "NextJS skill meter",
    src: "/img/meter3.svg",
  },
  {
    alt: "tailwind meter image",
    name: "Tailwind",
    title: "Tailwind skill meter",
    src: "/img/meter2.svg",
  },
  {
    alt: "bootstrap meter image",
    name: "Bootstrap",
    title: "Bootstrap skill meter",
    src: "/img/meter3.svg",
  },
  {
    alt: "jquery meter image",
    name: "jQuery",
    title: "jQuery skill meter",
    src: "/img/meter2.svg",
  },
  {
    alt: "sass meter image",
    name: "Sass",
    title: "Sass skill meter",
    src: "/img/meter1.svg",
  },
  {
    alt: "prisma meter image",
    name: "Prisma",
    title: "Prisma skill meter",
    src: "/img/meter3.svg",
  },
  {
    alt: "postgresql meter image",
    name: "PostgreSQL",
    title: "PostgreSQL skill meter",
    src: "/img/meter2.svg",
  },
  {
    alt: "html5 meter image",
    name: "HTML5 & CSS3",
    title: "HTML5 & CSS3 skill meter",
    src: "/img/meter1.svg",
  },
  {
    alt: "javascript meter image",
    name: "Javascript",
    title: "Javascript skill meter",
    src: "/img/meter3.svg",
  },
  {
    alt: "typescript meter image",
    name: "Typescript",
    title: "Typescript skill meter",
    src: "/img/meter2.svg",
  },
]

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
          <h2 className="font-bold text-[45px] tracking-wider pointer-events-none mb-24">
            Skills
          </h2>
          <Carousel
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            className="w-[80%] mx-auto"
          >
            {skills.map((skill) => (
              <Skill
                key={skill.alt}
                src={skill.src}
                alt={skill.alt}
                name={skill.name}
                title={skill.title}
              />
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
};

"use client";
import React, { useState } from "react";
import { fadeIn } from "@/src/variants";
import { BsArrowRightCircle } from "react-icons/bs";
import Project from "./Project";
import { MotionDiv } from "@/src/motionsDev";


const projects: Project[] = [
  {
    src: "/img/fajer.webp",
    alt: "fajer-baghdad img",
    preTitle: "Fajer",
    live: "https://fajer-baghdad.vercel.app/",
  },
  {
    src: "/img/naviro.webp",
    alt: "naviro img",
    preTitle: "Naviro",
    live: "https://naviro-dashboard-prod.vercel.app/",
  },
  {
    src: "/img/wanderly.webp",
    alt: "wanderly img",
    preTitle: "Wanderly",
    live: "https://majesto-food.vercel.app/",
    code: "https://github.com/AhmedTakeshy/Wanderly",
  },
  {
    src: "/img/foody.webp",
    alt: "foody img",
    preTitle: "Foody",
    live: "https://foody-eta.vercel.app/",
    code: "https://github.com/AhmedTakeshy/Foody",
  },
  {
    src: "/img/majesto.webp",
    alt: "majesto img",
    preTitle: "Majesto",
    live: "majesto-food.vercel.app/",
    code: "https://github.com/AhmedTakeshy/Majesto-Food",
  },
  {
    src: "/img/yelp.webp",
    alt: "YelpCampground img",
    preTitle: "YelpCampground",
    live: "https://yelp-campground.vercel.app/",
    code: "https://github.com/AhmedTakeshy/Yelp-Campground",
  },
  {
    src: "/img/learnu.webp",
    alt: "leanru img",
    preTitle: "LearnU",
    live: "https://learnu.vercel.app/",
    code: "https://github.com/202303-PRM-TR-FEW/LearnU-Team-1",
  },

];

export default function Work() {
  const [viewMore, setViewMore] = useState<{
    skip: number;
    take: number;
  }>({
    skip: 0,
    take: 3,
  });

  function viewMoreHandler() {
    console.log(viewMore)
    if (viewMore.take >= projects.length) {
      setViewMore(preValue => (
        {
          ...preValue,
          skip: 0,
          take: 3,
        }
      ))
      return
    } else {
      setViewMore(preValue => (
        {
          ...preValue,
          skip: viewMore.skip + 3,
          take: viewMore.take + 3,
        }
      ))
    }
  }

  return (
    <section className="section" id="work">
      <div className="container mx-auto">
        <div className="grid items-center gap-10 xl:grid-cols-2">
          <MotionDiv
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex flex-col flex-1 mb-10 gap-y-12 xl:mb-0"
          >
            {/* text */}
            <div>
              <h2 className="leading-tight pointer-events-none h2 text-accent">
                Some Of My Latest <br />
                Work.
              </h2>
              <p
                className="max-w-sm mb-3 cursor-pointer xl:mb-12"
              >
                Here's a few  projects I've worked on recently. Projects are clickable, two click to hide the links.
              </p>
              <button
                className="flex items-center mb-4 btn btn-sm group xl:mb-12"
                onClick={viewMoreHandler}
              >
                {viewMore.take >= projects.length ? "Return" : "View More"}
                <BsArrowRightCircle className="pl-[10px] text-[30px] group-hover:translate-x-4 transition-all duration-300" />
              </button>
            </div>
          </MotionDiv>
          {projects.map((project, index) => (
            <MotionDiv
              variants={fadeIn("left", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              className="flex flex-col flex-1 gap-y-10"
            >
              <Project
                key={index}
                src={project.src}
                alt={project.alt}
                preTitle={project.preTitle}
                live={project.live}
                code={project.code}
              />
            </MotionDiv>
          )).slice(viewMore.skip, viewMore.take)}
        </div>
      </div>
    </section>
  );
};


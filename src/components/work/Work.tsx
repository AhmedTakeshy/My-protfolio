"use client";
import React, { useState } from "react";
import { fadeIn } from "@/src/lib/variants";
import { BsArrowRightCircle } from "react-icons/bs";
import dynamic from 'next/dynamic'
import { MotionDiv } from "@/src/lib/motionsDev";
import fajerImg from "@/public/img/fajer.webp";
import naviroImg from "@/public/img/naviro.webp";
import wanderlyImg from "@/public/img/wanderly.webp";
import foodyImg from "@/public/img/foody.webp";
import majestoImg from "@/public/img/majesto.webp";
import yelpImg from "@/public/img/yelp.webp";
import learnuImg from "@/public/img/learnu.webp";
import spcImg from "@/public/img/spc.png";
import galaxyImg from "@/public/img/galaxy.png";
import { Project } from "@/types";
const Project = dynamic(() => import("./Project"));

const projects: Project[] = [
  {
    src: learnuImg,
    alt: "leanru img",
    preTitle: "LearnU",
    live: "https://learnu.vercel.app/",
    code: "https://github.com/202303-PRM-TR-FEW/LearnU-Team-1",
  },
  {
    src: wanderlyImg,
    alt: "wanderly img",
    preTitle: "Wanderly",
    live: "https://wanderly.vercel.app/",
    code: "https://github.com/AhmedTakeshy/Wanderly",
  },
  {
    src: spcImg,
    alt: "spc img",
    preTitle: "SPC",
    live: "https://spc-website.vercel.app/",
  },
  {
    src: fajerImg,
    alt: "fajer-baghdad img",
    preTitle: "Fajer",
    live: "https://fajer-baghdad.vercel.app/",
  },
  {
    src: galaxyImg,
    alt: "galaxy img",
    preTitle: "Galaxy",
    live: "https://galaxy-website.vercel.app/",
  },
  {
    src: foodyImg,
    alt: "foody img",
    preTitle: "Foody",
    live: "https://foody-eta.vercel.app/",
    code: "https://github.com/AhmedTakeshy/Foody",
  },
  {
    src: majestoImg,
    alt: "majesto img",
    preTitle: "Majesto",
    live: "majesto-food.vercel.app/",
    code: "https://github.com/AhmedTakeshy/Majesto-Food",
  },
  {
    src: yelpImg,
    alt: "YelpCampground img",
    preTitle: "YelpCampground",
    live: "https://yelp-campground.vercel.app/",
    code: "https://github.com/AhmedTakeshy/Yelp-Campground",
  },
  {
    src: naviroImg,
    alt: "naviro img",
    preTitle: "Naviro",
    live: "https://naviro-dashboard-prod.vercel.app/",
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
                Here&apos;s a few  projects I&apos;ve worked on recently. Projects are clickable, two click to hide the links.
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
              key={index}
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


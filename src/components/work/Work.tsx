"use client";
import React, { useState } from "react";
import { fadeIn } from "@/lib/variants";
import { BsArrowRightCircle } from "react-icons/bs";
import dynamic from 'next/dynamic'
import { MotionDiv } from "@/lib/motionsDev";
import fajerImg from "@/../public/img/fajer.webp";
import wanderlyImg from "@/../public/img/wanderly.webp";
import foodyImg from "@/../public/img/foody.webp";
import horecaImg from "@/../public/img/horeca.png";
import yelpImg from "@/../public/img/yelp.webp";
import learnuImg from "@/../public/img/learnu.webp";
import spcImg from "@/../public/img/spc.png";
import galaxyImg from "@/../public/img/galaxy.png";
import powerImg from "@/../public/img/power.png";
import shifarefImg from "@/../public/img/shifaref.png";
import doreyazilim from "@/../public/img/doreyazilim.png";

const Project = dynamic(() => import("./Project"))

const projects: Projects[] = [
  {
    src: horecaImg,
    alt: "horeca img",
    preTitle: "Horeca e-commerce",
    live: "https://horeca-ecommerce.vercel.app",
    code: "https://github.com/AhmedTakeshy/HoReCa",
  },
  {
    src: shifarefImg,
    alt: "shifaref img",
    preTitle: "Shifaref",
    live: "https://shifaref.com",
  },
  {
    src: doreyazilim,
    alt: "dore-yazilim img",
    preTitle: "Dore Yazilim",
    live: "https://doreyazilim.com",
  },
  {
    src: powerImg,
    alt: "power img",
    preTitle: "Power Gym",
    live: "https://power--gym.vercel.app/",
    videoLink: "https://youtu.be/3C2S-mVIwhk",
  },
  {
    src: wanderlyImg,
    alt: "wanderly img",
    preTitle: "Wanderly",
    live: "https://wanderly.vercel.app/",
    code: "https://github.com/AhmedTakeshy/Wanderly",
    videoLink: "https://youtu.be/-wIxIfNhs4s",
  },
  {
    src: spcImg,
    alt: "spc img",
    preTitle: "SPC Academy",
    live: "https://spc-eg.com",
  },
  {
    src: foodyImg,
    alt: "foody img",
    preTitle: "Foody",
    live: "https://foody-eta.vercel.app/",
    code: "https://github.com/AhmedTakeshy/Foody",
    videoLink: "https://youtu.be/92MDcPyCO38",
  },
  {
    src: fajerImg,
    alt: "fajer-baghdad img",
    preTitle: "Fajer Baghdad",
    live: "https://fajer-baghdad.vercel.app/",
  },
  {
    src: learnuImg,
    alt: "leanru img",
    preTitle: "LearnU",
    live: "https://learnu.vercel.app/",
    code: "https://github.com/202303-PRM-TR-FEW/LearnU-Team-1",
  },
  {
    src: galaxyImg,
    alt: "galaxy img",
    preTitle: "Galaxy Academy",
    live: "https://www.galaxyacademy.net/",
  },

  {
    src: yelpImg,
    alt: "YelpCampground img",
    preTitle: "YelpCampground",
    live: "https://yelp-campground.vercel.app/",
    code: "https://github.com/AhmedTakeshy/Yelp-Campground",
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
            className="flex flex-col flex-1 mb-10 gap-y-12 xl:mb-0 xl:pl-[3.25rem] text-left"
          >
            {/* text */}
            <div className="">
              <h2 className="leading-tight pointer-events-none h2 text-accent max-w-lg">
                Some Of My Latest Work.
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
              variants={fadeIn("right", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              className="flex flex-col flex-1 gap-y-10 place-self-center"
              key={index}
            >
              <Project
                key={index}
                src={project.src}
                alt={project.alt}
                preTitle={project.preTitle}
                live={project.live}
                code={project.code}
                videoLink={project.videoLink}
              />
            </MotionDiv>
          )).slice(viewMore.skip, viewMore.take)}
        </div>
      </div>
    </section>
  );
};


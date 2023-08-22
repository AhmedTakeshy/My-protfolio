"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/src/variants";
import { BsArrowRightCircle } from "react-icons/bs";
import Project from "./Project";

export default function Work () {
  const [showPg, setShowPg] = useState(false);
  const paragraph = `I specialize in crafting impactful web solutions tailored to my
                clients' individual needs. My portfolio showcases a range of
                cutting-edge projects, utilizing the latest technologies to
                deliver efficient, visually appealing results. My passion for
                collaboration and custom web development has quickly positioned
                me as a rising star in the industry.`;
  const [firstClick, setFirstClick] = useState(false);

  return (
    <section className="section" id="work">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-x-10">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex flex-col flex-1 mb-10 gap-y-12 lg:mb-0"
          >
            {/* text */}
            <div>
              <h2 className="leading-tight pointer-events-none h2 text-accent">
                My Latest <br />
                Work.
              </h2>
              <p
                className="max-w-sm mb-3 cursor-pointer xl:mb-12"
                onClick={() => setShowPg((prev) => !prev)}
              >
                {showPg ? paragraph : `${paragraph.substring(0, 107)} more...`}
              </p>
              <button
                className="flex items-center mb-4 btn btn-sm group xl:mb-12"
                onClick={() => setFirstClick((prev) => !prev)}
              >
                View more
                <BsArrowRightCircle className="pl-[10px] text-[30px] group-hover:translate-x-4 transition-all duration-300" />
              </button>
            </div>
            {!firstClick ? (
               <Project
               src="/img/wanderly.jpg"
               alt="wanderly img"
               preTitle="Wanderly"
               live="https://majesto-food.vercel.app/"
               code="https://github.com/AhmedTakeshy/Majesto-Food/tree/master"
             />
            ) : (
              <Project
                src="/img/learnu.jpg"
                alt="leanru img"
                preTitle="LearnU"
                live="https://learnu.vercel.app/"
                code="https://github.com/202303-PRM-TR-FEW/LearnU-Team-1"
              />
            )}
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex flex-col flex-1 gap-y-10"
          >
            {!firstClick ? (
              <Project
                src="/img/foody.jpg"
                alt="foody img"
                preTitle="Foody"
                live="https://foody-eta.vercel.app/"
                code="https://github.com/AhmedTakeshy/Foody"
              />
            ) : (
              <Project
                src="/img/majesto.jpg"
                alt="majesto img"
                preTitle="Majesto"
                live="majesto-food.vercel.app/"
                code="https://github.com/AhmedTakeshy/Majesto-Food"
              />
            )}

            {/* image */}
            {!firstClick ? (
              <Project
                src="/img/naviro.jpg"
                alt="naviro img"
                preTitle="Naviro"
                live="https://naviro-dashboard-prod.vercel.app/"
                // code="https://github.com/AhmedTakeshy/Wanderly"
              />
            ) : (
              <Project
                src="/img/yelp.jpg"
                alt="YelpCampground img"
                preTitle="YelpCampground"
                live="https://yelp-campground.vercel.app/"
                code="https://github.com/AhmedTakeshy/Yelp-Campground"
              />
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};


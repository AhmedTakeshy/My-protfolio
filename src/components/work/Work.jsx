import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import { BsArrowRightCircle } from "react-icons/bs";
import Img1 from "../../assets/img/portfolio-img1.png";
import Img2 from "../../assets/img/portfolio-img2.png";
import Img3 from "../../assets/img/portfolio-img3.png";
import Project from "./Project";

const Work = () => {
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
            className="flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0"
          >
            {/* text */}
            <div>
              <h2 className="h2 leading-tight text-accent pointer-events-none">
                My Latest <br />
                Work.
              </h2>
              <p
                className=" max-w-sm cursor-pointer mb-3 xl:mb-12"
                onClick={() => setShowPg((prev) => !prev)}
              >
                {showPg ? paragraph : `${paragraph.substring(0, 107)} more...`}
              </p>
              <button
                className="btn btn-sm flex items-center group mb-4 xl:mb-12"
                onClick={() => setFirstClick((prev) => !prev)}
              >
                View more
                <BsArrowRightCircle className="pl-[10px] text-[30px] group-hover:translate-x-4 transition-all duration-300" />
              </button>
            </div>
            {firstClick ? (
              <Project
                src={Img3}
                alt="proj 3"
                preTitle="UI/UX Design"
                title="Project Title"
              />
            ) : (
              <Project
                src={Img1}
                alt="proj 1"
                preTitle="UI/UX Design"
                title="Project Title"
              />
            )}
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-10"
          >
            <Project
              src={Img2}
              alt="proj 2"
              preTitle="UI/UX Design"
              title="Project Title"
            />
            {/* image */}
            {firstClick ? (
              <Project
                src={Img1}
                alt="proj 1"
                preTitle="UI/UX Design"
                title="Project Title"
              />
            ) : (
              <Project
                src={Img3}
                alt="proj 3"
                preTitle="UI/UX Design"
                title="Project Title"
              />
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Work;

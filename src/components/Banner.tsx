"use client"
import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Link as LinkRs } from "react-scroll";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";
import { fadeIn } from "../variants";
import { MotionDiv, MotionH1, MotionP } from "../motionsDev";

const Banner = () => (
  <section
    className="min-h-[85vh] lg:min-h-[78vh] flex items-center bg-banner bg-cover bg-no-repeat bg-fixed"
    id="home"
  >
    <div className="container mx-auto">
      <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
        <div className="flex-1 text-center font-secondary lg:text-left">
          <MotionH1
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="text-[55px] font-bold leading-[0.8] lg:text-[110px] pointer-events-none"
          >
            AHMED <span>TAKESHY</span>
          </MotionH1>
          <MotionDiv
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]"
          >
            <span className="mr-4 text-white pointer-events-none">I am a</span>
            <TypeAnimation
              sequence={["Web Developer", 2000, "Frontend Developer", 2000]}
              speed={50}
              wrapper="span"
              className="text-accent"
              repeat={Infinity}
            />
          </MotionDiv>
          <MotionP
            variants={fadeIn("up", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="max-w-lg mx-auto mb-8 pointer-events-none lg:mx-0"
          >
            specializing in front-end development. Delivers efficient solutions
            with a strong focus on attention to detail and problem-solving.
            Skilled in both independent and team settings, committed to website
            development and continuous improvement.
          </MotionP>
          <MotionDiv
            variants={fadeIn("up", 0.6)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="flex items-center mx-auto mb-12 max-w-max gap-x-6 lg:mb-8 lg:mx-0"
          >
            <Link to="contact" title="link to contact section for contact from" smooth={true} aria-label="link" aria-details="link to contact section for contact form">
              <button className="btn btn-lg">Contact me</button>
            </Link>
            <a className="text-gradient btn-link" href="/Ahmed.pdf" title="link to download my resume" aria-label="link" download target="_blank" rel="noopener noreferrer" aria-details="link to download my resume">
              My Resume
            </Link>
          </MotionDiv>
          <MotionDiv
            variants={fadeIn("up", 0.7)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0 "
          >
            <Link
              href="https://github.com/AhmedTakeshy"
              target={"_blank"}
              rel="noreferrer"
              aria-label="github"
              aria-details="github link"
              title="link to my github profile"
            >
              <FaGithub aria-label="icon" aria-details="icon for github" />
            </a>
            <a
              href="https://www.linkedin.com/in/ahmedabdelsamiee/"
              target={"_blank"}
              rel="noreferrer"
              aria-label="linkedin"
              aria-details="linkedin link"
              title="link to my linkedin profile"
            >
              <FaLinkedin aria-label="icon" aria-description="icon for linkedin" />
            </a>
          </motion.div>
        </div>
        <MotionDiv
          variants={fadeIn("down", 0.5)}
          initial="hidden"
          whileInView={"show"}
          className="hidden lg:flex flex-1 max-w-[320px] lg:mx-w-[482]"
        >
          <Image width={300} height={300} src="/img/header-img.svg" alt="header img" className="w-auto h-auto img" />
        </motion.div>
      </div>
    </div>
  </section>
);

export default Banner;

"use client"
import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-scroll";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Banner = () => (
  <section
    className="min-h-[85vh] lg:min-h-[78vh] flex items-center bg-banner bg-cover bg-no-repeat bg-fixed"
    id="home"
  >
    <div className="container mx-auto">
      <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
        <div className="flex-1 text-center font-secondary lg:text-left">
          <motion.h1
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="text-[55px] font-bold leading-[0.8] lg:text-[110px] pointer-events-none"
          >
            AHMED <span>TAKESHY</span>
          </motion.h1>
          <motion.div
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
          </motion.div>
          <motion.p
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
          </motion.p>
          <motion.div
            variants={fadeIn("up", 0.6)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="flex items-center mx-auto mb-12 max-w-max gap-x-6 lg:mb-8 lg:mx-0"
          >
            <Link to="contact" smooth={true}>
              <button className="btn btn-lg">Contact me</button>
            </Link>
            <a className="text-gradient btn-link" href="/Ahmed.pdf" download target="_blank" rel="noopener noreferrer">
              My Resume
            </a>
          </motion.div>
          <motion.div
            variants={fadeIn("up", 0.7)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0 "
          >
            <a
              href="https://github.com/AhmedTakeshy"
              target={"_blank"}
              rel="noreferrer"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/ahmedabdelsamiee/"
              target={"_blank"}
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>
          </motion.div>
        </div>
        <motion.div
          variants={fadeIn("down", 0.5)}
          initial="hidden"
          whileInView={"show"}
          className="hidden lg:flex flex-1 max-w-[320px] lg:mx-w-[482]"
        >
          <Image width={300} height={300} src="/img/header-img.svg" alt="header img" className="img" />
        </motion.div>
      </div>
    </div>
  </section>
);

export default Banner;

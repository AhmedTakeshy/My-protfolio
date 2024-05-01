"use client"
import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Link as LinkRs } from "react-scroll";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";
import { fadeIn } from "../lib/variants";
import { MotionDiv, MotionH1, MotionP } from "../lib/motionsDev";
import Header from "./Header";
import bannerImg from "@/../public/img/banner.webp";
import headerImg from "@/../public/img/header.svg";


export default function Banner() {


  return (
    <section
      className="relative flex items-center h-screen overflow-hidden"
      id="home"
    >
      <Image src={bannerImg} className="z-[-1] object-cover" alt="Banner background" fill placeholder="blur" priority />
      <div className="container mx-auto">
        <Header />
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
                sequence={["Web Developer", 2000, "FE Developer", 2000]}
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
              className="flex items-center mx-auto mb-8 max-w-max gap-x-6 lg:mb-8 lg:mx-0"
            >
              <LinkRs className="flex items-center justify-center btn btn-lg hover:cursor-pointer" role="link" to="contact" title="link to contact section for contact from" smooth={true} aria-label="Contact me" aria-details="link to contact section for contact form">
                Contact Me
              </LinkRs>
              <Link className="text-gradient btn-link" href="/Ahmed.pdf" locale={false} title="link to download my resume" aria-label="My Resume" download target="_blank" rel="noopener noreferrer" aria-details="link to download my resume">
                My Resume
              </Link>
            </MotionDiv>
            <MotionDiv
              variants={fadeIn("down", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="z-10 flex mx-auto text-2xl gap-x-6 max-w-max lg:mx-0"
            >
              <Link
                href="https://github.com/AhmedTakeshy"
                target={"_blank"}
                rel="noreferrer"
                aria-label="github link"
                aria-details="github link"
                title="link to my github profile"
              >
                <FaGithub
                  aria-label="icon for github link"
                  aria-details="icon for github"
                  role="img"
                />
              </Link>
              <Link
                href="https://www.linkedin.com/in/ahmedabdelsamiee/"
                target={"_blank"}
                rel="noreferrer"
                aria-label="linkedin link"
                aria-details="linkedin link"
                title="link to my linkedin profile"
              >
                <FaLinkedin
                  role="img" aria-label="icon for linkedin link" aria-details="icon for linkedin" />
              </Link>
            </MotionDiv>
          </div>
          <MotionDiv
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            whileInView={"show"}
            className="hidden lg:flex flex-1 max-w-[320px] lg:mx-w-[482]"
          >
            <Image width={300} height={300} src={headerImg} priority alt="header img" className="w-auto h-auto img" />
          </MotionDiv>
        </div>
      </div>
    </section>
  )
};

"use client"
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Link as LinkRs } from "react-scroll";
import Link from "next/link";
import { fadeIn } from "../lib/variants";
import { MotionDiv, MotionH1, MotionP } from "../lib/motionsDev";
import ArchitectureDiagram from "./hero/ArchitectureDiagram";

export default function Hero() {
  return (
    <section
      className="relative flex items-center min-h-screen py-32 overflow-hidden blueprint-grid"
      id="home"
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-14 lg:flex-row lg:items-center lg:gap-x-16">
          <div className="flex-1 text-left">
            <MotionP
              variants={fadeIn("up", 0.1)}
              initial="hidden"
              animate="show"
              className="mb-5 eyebrow"
            >
              Frontend Engineer — Systems &amp; Architecture
            </MotionP>
            <MotionH1
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              className="text-[48px] font-semibold leading-[1.05] lg:text-[76px] mb-6"
            >
              Ahmed Abdelsamie
            </MotionH1>
            <MotionP
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              animate="show"
              className="max-w-lg mb-10 text-lg text-muted"
            >
              I architect frontend systems, not just components. 6+ years building
              production React/Next.js applications — most recently leading the
              migration of a live marketplace from a monolith to a 6-module
              micro-frontend architecture.
            </MotionP>
            <MotionDiv
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              className="flex items-center gap-x-6 mb-10"
            >
              <LinkRs
                className="flex items-center justify-center btn btn-lg hover:cursor-pointer"
                role="link"
                to="work"
                title="See case studies"
                smooth={true}
                aria-label="See case studies"
              >
                See the work
              </LinkRs>
              <Link className="btn-link" href="/Ahmed.pdf" title="Download resume" aria-label="Download resume" download target="_blank" rel="noopener noreferrer">
                Download résumé
              </Link>
            </MotionDiv>
            <MotionDiv
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              animate="show"
              className="flex text-2xl gap-x-6"
            >
              <Link href="https://github.com/AhmedTakeshy" target="_blank" rel="noreferrer" aria-label="GitHub profile" title="GitHub profile" className="text-muted hover:text-ink transition-colors">
                <FaGithub aria-hidden />
              </Link>
              <Link href="https://www.linkedin.com/in/ahmedabdelsamiee/" target="_blank" rel="noreferrer" aria-label="LinkedIn profile" title="LinkedIn profile" className="text-muted hover:text-ink transition-colors">
                <FaLinkedin aria-hidden />
              </Link>
            </MotionDiv>
          </div>
          <div className="flex-1 flex justify-center lg:justify-end">
            <ArchitectureDiagram />
          </div>
        </div>
      </div>
    </section>
  )
};

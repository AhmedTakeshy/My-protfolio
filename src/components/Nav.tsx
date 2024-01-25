"use client"
import { BiHomeAlt, BiUser, BiCode } from "react-icons/bi";
import { BsBriefcase, BsChatSquare } from "react-icons/bs";
import { Link } from "react-scroll";
export default function Nav() {
  return (
    <nav className="fixed z-50 w-full overflow-hidden bottom-3 lg:bottom-8">
      <div className="container mx-auto">
        <div
          className="w-full bg-black/25 backdrop-blur-[10px] rounded-full max-w-[460px] 
        mx-auto px-5 py-3 flex justify-between items-center text-2xl text-white/50"
        >
          <Link
            to="home"
            activeClass="active"
            smooth={true}
            offset={-200}
            spy={true}
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
            aria-label="home"
            aria-description="link to home section"
            title="link to home section"
          >
            <BiHomeAlt
              aria-label="icon"
              aria-description="home icon"
            />
          </Link>
          <Link
            to="skills"
            activeClass="active"
            smooth={true}
            spy={true}
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
            aria-label="skills"
            aria-description="link to skills section"
            title="link to skills section"
          >
            <BiCode
              aria-label="icon"
              aria-description="code icon"
            />
          </Link>
          <Link
            to="work"
            activeClass="active"
            smooth={true}
            spy={true}
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
            aria-label="work"
            aria-description="link to work section"
            title="link to work section"
          >
            <BsBriefcase
              aria-label="icon"
              aria-description="briefcase icon"
            />
          </Link>
          <Link
            to="about"
            activeClass="active"
            smooth={true}
            spy={true}
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
            aria-label="about"
            aria-description="link to about section"
            title="link to about section"
          >
            <BiUser
              aria-label="icon"
              aria-description="user icon"
            />
          </Link>
          <Link
            to="contact"
            activeClass="active"
            smooth={true}
            spy={true}
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
            aria-label="contact"
            aria-description="link to contact section"
            title="link to contact section"
          >
            <BsChatSquare
              aria-label="icon"
              aria-description="chat icon"
            />
          </Link>
        </div>
      </div>
    </nav>
  );
};
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
            aria-label="Home icon"
            role="link"
            aria-details="link to home section"
            title="link to home section"
          >
            <BiHomeAlt
              aria-label="icon"
              aria-details="home icon"
              role="img"
            />
          </Link>
          <Link
            to="skills"
            activeClass="active"
            smooth={true}
            spy={true}
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
            aria-label="Skills icons"
            role="link"
            aria-details="link to skills section"
            title="link to skills section"
          >
            <BiCode
              aria-label="icon"
              aria-details="code icon"
              role="img"
            />
          </Link>
          <Link
            to="work"
            activeClass="active"
            smooth={true}
            spy={true}
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
            aria-label="Work icon"
            role="link"
            aria-details="link to work section"
            title="link to work section"
          >
            <BsBriefcase
              aria-label="icon"
              aria-details="briefcase icon"
              role="img"
            />
          </Link>
          <Link
            to="about"
            activeClass="active"
            smooth={true}
            spy={true}
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
            aria-label="about"
            role="link"
            aria-details="link to about section"
            title="link to about section"
          >
            <BiUser
              aria-label="icon"
              aria-details="user icon"
              role="img"
            />
          </Link>
          <Link
            to="contact"
            activeClass="active"
            smooth={true}
            spy={true}
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
            aria-label="contact"
            role="link"
            aria-details="link to contact section"
            title="link to contact section"
          >
            <BsChatSquare
              aria-label="icon"
              aria-details="chat icon"
              role="img"
            />
          </Link>
        </div>
      </div>
    </nav>
  );
};
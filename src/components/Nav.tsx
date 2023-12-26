"use client"
import { BiHomeAlt, BiUser, BiCode } from "react-icons/bi";
import { BsBriefcase, BsChatSquare } from "react-icons/bs";
import { Link } from "react-scroll";
export default function Nav () {

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
            className={`cursor-pointer w-[60px] h-[60px] flex items-center justify-center`}
          >
            <BiHomeAlt />
          </Link>
          <Link
            to="skills"
            activeClass="active"
            smooth={true}
            spy={true}
            className={`cursor-pointer w-[60px] h-[60px] flex items-center justify-center`}
          >
            <BiCode />
          </Link>
          <Link
            to="work"
            activeClass="active"
            smooth={true}
            spy={true}
            className={`cursor-pointer w-[60px] h-[60px] flex items-center justify-center`}
          >
            <BsBriefcase />
          </Link>
          <Link
            to="about"
            activeClass="active"
            smooth={true}
            spy={true}
            className={`cursor-pointer w-[60px] h-[60px] flex items-center justify-center`}
          >
            <BiUser />
          </Link>
          <Link
            to="contact"
            activeClass="active"
            smooth={true}
            spy={true}
            offset={50}
            className={`cursor-pointer w-[60px] h-[60px] flex items-center justify-center`}
          >
            <BsChatSquare />
          </Link>
        </div>
      </div>
    </nav>
  );
};
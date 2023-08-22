import React from "react";
import { FaGithub } from "react-icons/fa";
import { RiGlobalLine } from "react-icons/ri";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type Props = {
  src: string;
  alt: string;
  preTitle: string;
  live: string;
  code: string;
}


export default function Project ({src,alt,preTitle,live,code}:Props) {
  return (
    <>
      {/* image */}
      <div
        className="relative overflow-hidden border-2 border-white group rounded-xl"
      >
        {/* overlay */}
        <div
          className="absolute z-40 w-full h-full transition-all duration-300 group-hover:bg-black/70"
        ></div>
        {/* img */}
        <Image
          width={400}
          height={300}
          className="inline transition-all duration-500 group-hover:scale-125"
          src={src}
          alt={alt}
        />
        {/* preTitle */}
        <div
          className="absolute z-50 transition-all duration-500 -bottom-full left-12 group-hover:bottom-24"
        >
          <span className="pointer-events-none text-gradient">
            {preTitle}
          </span>
        </div>
        {/* title */}
        <div
          className="absolute z-50 flex items-center transition-all duration-500 -bottom-full left-12 group-hover:bottom-14 gap-x-4"
        >
          <Link
            href={live}
            target={"_blank"}
            rel="noreferrer"
            className="text-2xl hover:rotate-[360deg] transition-all duration-500"
          >
            <RiGlobalLine />
          </Link>
          <a
            href={code}
            target={"_blank"}
            rel="noreferrer"
            className="text-[22px] hover:rotate-[360deg] transition-all duration-500"
          >
            <FaGithub />
          </a>
          {/* <span className="text-3xl text-white">{title}</span> */}
        </div>
      </div>
    </>
  );
};



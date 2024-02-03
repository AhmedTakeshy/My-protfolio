import { FaGithub } from "react-icons/fa";
import { RiGlobalLine } from "react-icons/ri";
import Link from "next/link";
import { useState } from "react";
import Image, { StaticImageData } from "next/image";

type Props = {
  src: StaticImageData;
  alt: string;
  preTitle: string;
  live: string;
  code?: string;
}


export default function Project({ src, preTitle, live, code }: Props) {
  const [showLinks, setShowLinks] = useState<boolean>(false);
  return (
    <>
      {/* image */}
      <div
        className="relative overflow-hidden w-[320px] sm:w-[450px] md:w-[660px] xl:w-[561px] h-[350px] xl:h-[316px] border-2 border-white group rounded-xl hover:cursor-pointer"
        onClick={() => setShowLinks((prev) => !prev)}
        onMouseLeave={() => setShowLinks(false)}
      >
        <Image
          src={src}
          alt={`${preTitle}-project`}
          className="group-hover:object-bottom z-10 absolute inset-0 transition-all duration-[8s] ease-in-out w-full h-full object-cover object-top"
          width={565}
          height={316}
          priority={true}
          placeholder="blur"
          quality={100}
        />
        {/* overlay */}
        {showLinks && (
          <>
            <div
              className="absolute z-40 w-full h-full transition-all duration-300 group-hover:bg-black/70"
            ></div>
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
                aria-label="live link"
                className="text-2xl hover:rotate-[360deg] transition-all duration-500"
              >
                <RiGlobalLine />
              </Link>
              <Link
                href={code ?? ""}
                target={"_blank"}
                rel="noreferrer"
                aria-label="code link"
                className="text-[22px] hover:rotate-[360deg] transition-all duration-500"
              >
                <FaGithub />
              </Link>
              {/* <span className="text-3xl text-white">{title}</span> */}
            </div>
          </>
        )}

      </div>
    </>
  );
};



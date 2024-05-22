import { FaGithub, FaLink, FaYoutube, } from "react-icons/fa";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";



export default function Project({ src, preTitle, live, code, videoLink }: Projects) {
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
            <div className="absolute z-50 flex items-center transition-all duration-500 -bottom-full left-12 group-hover:bottom-14 gap-x-4">
              <Link
                href={live}
                target={"_blank"}
                rel="noreferrer"
                aria-label="live link"
              >
                <FaLink className="text-xl hover:text-sky-400 hover:scale-125 transition-all duration-500" size={20} />
              </Link>
              <Link
                href={code ?? "#work"}
                target={code ? "_blank" : "_self"}
                rel="noreferrer"
                aria-label="code link"
              >
                <FaGithub className={`${code ? "hover:text-black hover:scale-125 rounded-2xl border-none hover:bg-white transition-all duration-500" : " cursor-not-allowed"}`} size={22} />
              </Link>
              <Link
                href={videoLink ?? "#work"}
                target={videoLink ? "_blank" : "_self"}
                rel="noreferrer"
                aria-label="code link"
              >
                <FaYoutube className={`${videoLink ? "hover:scale-125 hover:text-red-500 transition-all duration-500" : "cursor-not-allowed"} `} size={25} />
              </Link>
            </div>
          </>
        )}
      </div>
    </>
  );
};



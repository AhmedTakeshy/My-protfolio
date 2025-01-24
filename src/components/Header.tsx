"use client"
import Image from "next/image";
import { Link } from "react-scroll";
export default function Header() {
  return (
    <nav className="flex items-center justify-between mb-24">
      <button className="pointer-events-none ">
        <Image width={56} height={56} src="/logo1.png" alt="logo" className="w-14 h-14" />
      </button>
      <div className="flex items-center justify-center">
        <Link to="contact"
          aria-label="Let's Talk"
          aria-details="link to contact section for contact form"
          title="link to contact section for contact form"
          smooth={true}
          className="flex items-center justify-center btn btn-sm hover:cursor-pointer"
          role="link"
        >
          Let&apos;s Talk
        </Link>
      </div>
    </nav>
  );
};

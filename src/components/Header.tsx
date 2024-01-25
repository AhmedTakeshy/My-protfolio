"use client"
import Image from "next/image";
import { Link } from "react-scroll";

export default function Header() {
  return (
    <header className="py-8 bg-fixed bg-no-repeat bg-cover bg-banner">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <button className="pointer-events-none ">
            <Image width={50} height={50} src="/logo1.png" alt="logo" className="w-12 h-12" />
          </button>
          <div className="flex items-center justify-center">
            <Link to="contact"
              aria-label="contact"
              aria-description="link to contact section for contact form"
              title="link to contact section for contact form"
              smooth={true}>
              <button className="btn btn-sm">Let&apos;s Talk</button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

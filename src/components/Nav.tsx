"use client"
import { Link } from "react-scroll";

const LINKS = [
  { to: "home", index: "00", label: "Home" },
  { to: "live", index: "01", label: "Live" },
  { to: "work", index: "02", label: "Work" },
  { to: "skills", index: "03", label: "Capabilities" },
  { to: "about", index: "04", label: "About" },
  { to: "contact", index: "05", label: "Contact" },
];

export default function Nav() {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-border bg-bg/80 backdrop-blur-md">
      <div className="container flex items-center justify-between mx-auto h-16">
        <Link
          to="home"
          smooth={true}
          className="font-mono text-sm cursor-pointer text-ink hover:text-accent transition-colors"
          aria-label="Back to top"
          title="Back to top"
        >
          AA.dev
        </Link>
        <ul className="flex items-center gap-x-1 sm:gap-x-2">
          {LINKS.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                activeClass="active"
                smooth={true}
                spy={true}
                offset={-64}
                className="flex items-center px-2 sm:px-3 py-2 font-mono text-xs sm:text-sm cursor-pointer text-muted hover:text-ink transition-colors gap-x-2"
                aria-label={`Go to ${link.label}`}
                title={`Go to ${link.label}`}
              >
                <span className="text-accent">{link.index}</span>
                <span className="hidden sm:inline">{link.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

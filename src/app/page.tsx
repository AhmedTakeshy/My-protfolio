import Nav from '@/components/Nav';
import Hero from "@/components/Hero";
import Capabilities from "@/components/capabilities/Capabilities";
import CaseStudies from "@/components/work/CaseStudies";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const CORNER_MARK = "before:content-[''] before:absolute before:w-3 before:h-px before:bg-border after:content-[''] after:absolute after:w-px after:h-3 after:bg-border";

export default function page() {
  return (
    <div className="relative">
      {/* No bg-bg here on purpose: body already sets it (globals.css). Giving
          this wrapper its own opaque background would paint over the fixed
          grid layer below — position:relative makes it a "positioned" box,
          which paints in a later stacking step than its negative-z-index
          child, so its background would sit on top of the grid. */}
      {/* Fixed full-page blueprint substrate — one grid for the whole site,
          not a per-section decoration (see globals.css). pointer-events-none
          so this never intercepts clicks on real content. */}
      <div className="fixed inset-0 -z-10 pointer-events-none blueprint-grid-major" aria-hidden="true" />

      {/* Corner crosshairs, like registration marks on a technical drawing. */}
      <div className={`fixed z-10 pointer-events-none top-4 left-4 ${CORNER_MARK} before:top-1.5 before:left-0 after:top-0 after:left-1.5`} aria-hidden="true" />
      <div className={`fixed z-10 pointer-events-none top-4 right-4 ${CORNER_MARK} before:top-1.5 before:right-0 after:top-0 after:right-1.5`} aria-hidden="true" />
      <div className={`fixed z-10 pointer-events-none bottom-4 left-4 ${CORNER_MARK} before:bottom-1.5 before:left-0 after:bottom-0 after:left-1.5`} aria-hidden="true" />
      <div className={`fixed z-10 pointer-events-none bottom-4 right-4 ${CORNER_MARK} before:bottom-1.5 before:right-0 after:bottom-0 after:right-1.5`} aria-hidden="true" />

      <Nav />
      <Hero />
      <CaseStudies />
      <Capabilities />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

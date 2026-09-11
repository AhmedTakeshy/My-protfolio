"use client"
import { motion, useScroll } from "framer-motion";

// Thin, fixed progress indicator tied to page scroll. Purely additive --
// nothing depends on it, it never gates any content's visibility.
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] bg-accent origin-left z-[60]"
      style={{ scaleX: scrollYProgress }}
      aria-hidden="true"
    />
  );
}

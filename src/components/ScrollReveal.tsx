"use client"
import { useEffect, useRef, useState } from "react";

/**
 * Scroll-triggered reveal that can never leave content permanently hidden.
 *
 * Design constraint learned the hard way earlier in this project: motion
 * must never GATE visibility, only enhance it. So:
 * - The element renders fully visible by default (no JS = fully visible).
 * - Only once JS has confirmed it's running do we apply a subtle
 *   "about to reveal" starting state (small offset + reduced opacity, never
 *   opacity: 0 outright).
 * - A hard timeout forces the visible state regardless, in case the
 *   IntersectionObserver never fires for any reason.
 */
export default function ScrollReveal({
  children,
  className = "",
  delayMs = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delayMs?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [armed, setArmed] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const armTimer = setTimeout(() => setArmed(true), delayMs);
    const safetyTimer = setTimeout(() => setVisible(true), 1500 + delayMs);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    observer.observe(el);

    return () => {
      clearTimeout(armTimer);
      clearTimeout(safetyTimer);
      observer.disconnect();
    };
  }, [delayMs]);

  const preReveal = armed && !visible;

  return (
    <div
      ref={ref}
      className={`transition-[opacity,transform] duration-500 ease-out ${preReveal ? "opacity-40 translate-y-2" : "opacity-100 translate-y-0"} ${className}`}
    >
      {children}
    </div>
  );
}

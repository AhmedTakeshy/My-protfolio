"use client"
import { motion, useReducedMotion } from "framer-motion";

/**
 * The portfolio's signature element (see docs/superpowers/specs/2026-09-11-portfolio-redesign-design.md).
 *
 * Not decoration: a simplified, real rendering of the Elonky migration —
 * one monolith decomposed into 6 autonomous modules — the story this whole
 * site is built around. Assembles once on mount, then stays static.
 * Respects prefers-reduced-motion by skipping straight to the end state.
 */

const MODULES = [
  { label: "Catalog", x: 420, y: 40 },
  { label: "Search", x: 420, y: 108 },
  { label: "Cart", x: 420, y: 176 },
  { label: "Checkout", x: 420, y: 244 },
  { label: "Account", x: 420, y: 312 },
  { label: "Admin", x: 420, y: 380 },
];

const ORIGIN = { x: 90, y: 210 };

export default function ArchitectureDiagram() {
  const shouldReduceMotion = useReducedMotion();
  const lineTransition = (i: number) => shouldReduceMotion
    ? { duration: 0 }
    : { duration: 0.7, delay: 0.5 + i * 0.09, ease: [0.65, 0, 0.35, 1] as const };
  const nodeTransition = (i: number) => shouldReduceMotion
    ? { duration: 0 }
    : { duration: 0.35, delay: 0.75 + i * 0.09 };

  return (
    <svg
      viewBox="0 0 520 420"
      className="w-full h-auto max-w-[480px] pointer-events-none select-none"
      role="img"
      aria-label="Diagram: one monolithic frontend decomposed into six autonomous modules"
    >
      {/* Origin: the monolith */}
      <motion.g
        initial={shouldReduceMotion ? false : { opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: shouldReduceMotion ? 0 : 0.4 }}
      >
        <rect x={20} y={178} width={140} height={64} rx={4} className="fill-surface stroke-border" strokeWidth={1} />
        <text x={90} y={205} textAnchor="middle" className="fill-ink text-[13px] font-mono font-medium">Monolith</text>
        <text x={90} y={222} textAnchor="middle" className="fill-muted text-[10px] font-mono uppercase tracking-wider">2024</text>
      </motion.g>

      {/* Connecting lines — drawn, not just faded, so the "decomposition" reads as an event */}
      {MODULES.map((m, i) => (
        <motion.path
          key={`line-${m.label}`}
          d={`M ${ORIGIN.x + 70} ${ORIGIN.y} L ${m.x} ${m.y + 24}`}
          className="stroke-border"
          strokeWidth={1}
          fill="none"
          initial={shouldReduceMotion ? false : { pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={lineTransition(i)}
        />
      ))}

      {/* The six modules */}
      {MODULES.map((m, i) => (
        <motion.g
          key={m.label}
          initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={nodeTransition(i)}
        >
          <rect
            x={m.x}
            y={m.y}
            width={100}
            height={48}
            rx={4}
            className={i === 0 ? "fill-surface stroke-accent" : "fill-surface stroke-border"}
            strokeWidth={1}
          />
          <text x={m.x + 50} y={m.y + 29} textAnchor="middle" className="fill-ink text-[11px] font-mono">
            {m.label}
          </text>
        </motion.g>
      ))}

      {/* Annotation, in the register of a real schematic redline note */}
      <motion.text
        x={420}
        y={20}
        textAnchor="end"
        className="fill-accent text-[10px] font-mono uppercase tracking-wider"
        initial={shouldReduceMotion ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: shouldReduceMotion ? 0 : 1.3 }}
      >
        6 autonomous modules
      </motion.text>
    </svg>
  );
}

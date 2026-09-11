"use client"
import { motion, useReducedMotion } from "framer-motion";

/**
 * The portfolio's signature element (see docs/superpowers/specs/2026-09-11-portfolio-redesign-design.md).
 *
 * Not decoration: a simplified, real rendering of the Elonky migration —
 * one monolith decomposed into 6 autonomous modules — the story this whole
 * site is built around. Assembles once on mount, then stays static.
 * Respects prefers-reduced-motion by skipping straight to the end state.
 *
 * Status readouts below are real, verified figures (cv.md / career-ops
 * evaluation reports) rendered in the register of a system-scan result —
 * inspired by architectural BIM/scan-diagram references, but every value
 * here is true, not decorative.
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

const READOUTS = [
  { label: "CI/CD", value: "16m → 1.5m" },
  { label: "E2E COVERAGE", value: "85%" },
  { label: "PROD BUGS", value: "−60%" },
];

export default function ArchitectureDiagram() {
  const shouldReduceMotion = useReducedMotion();
  const lineTransition = (i: number) => shouldReduceMotion
    ? { duration: 0 }
    : { duration: 0.7, delay: 0.5 + i * 0.09, ease: [0.65, 0, 0.35, 1] as const };
  const nodeTransition = (i: number) => shouldReduceMotion
    ? { duration: 0 }
    : { duration: 0.35, delay: 0.75 + i * 0.09 };
  const readoutTransition = (i: number) => shouldReduceMotion
    ? { duration: 0 }
    : { duration: 0.4, delay: 1.5 + i * 0.12 };

  return (
    <svg
      viewBox="0 0 520 470"
      className="w-full h-auto max-w-[480px] pointer-events-none select-none"
      role="img"
      aria-label="Diagram: one monolithic frontend decomposed into six autonomous modules, with verified migration metrics"
    >
      <defs>
        {/* Soft ambient glow, not a blown-out neon effect -- small stdDeviation, blended back with the source. */}
        <filter id="softGlow" x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="2.2" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

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

      {/* Connecting lines — drawn, not just faded, so the "decomposition" reads as an event. Glow filter gives them the scan-line feel from the reference boards without going full neon. */}
      {MODULES.map((m, i) => (
        <motion.path
          key={`line-${m.label}`}
          d={`M ${ORIGIN.x + 70} ${ORIGIN.y} L ${m.x} ${m.y + 24}`}
          className="stroke-accent/40"
          strokeWidth={1}
          fill="none"
          filter="url(#softGlow)"
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
            filter={i === 0 ? "url(#softGlow)" : undefined}
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

      {/* Status readouts -- real, verified metrics, styled like a system-scan
          result (status dot + label + value), not decoration. */}
      {READOUTS.map((r, i) => (
        <motion.g
          key={r.label}
          initial={shouldReduceMotion ? false : { opacity: 0, x: -6 }}
          animate={{ opacity: 1, x: 0 }}
          transition={readoutTransition(i)}
        >
          <circle cx={20} cy={445 - i * 20} r={2.5} className="fill-accent" filter="url(#softGlow)" />
          <text x={30} y={449 - i * 20} className="fill-muted text-[10px] font-mono uppercase tracking-wider">
            {r.label}
          </text>
          <text x={160} y={449 - i * 20} className="fill-ink text-[10px] font-mono">
            {r.value}
          </text>
        </motion.g>
      ))}
    </svg>
  );
}

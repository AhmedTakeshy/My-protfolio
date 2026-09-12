"use client"
import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion, useMotionValue, type MotionValue } from "framer-motion";
import { IoCheckmark } from "react-icons/io5";

type Stage = { key: string; label: string; detail: string };

// Real numbers from the Elonky migration (see caseStudies.data.ts) -- the
// pipeline this strip visualizes is the same one the Work section explains
// in full, not a made-up sequence.
const STAGES: Stage[] = [
  { key: "commit", label: "COMMIT", detail: "Code pushed to main" },
  { key: "build", label: "BUILD", detail: "CI: 16min → 1.5min" },
  { key: "test", label: "TEST", detail: "Playwright E2E: 85%" },
  { key: "deploy", label: "DEPLOY", detail: "Zero-downtime release" },
  { key: "live", label: "LIVE", detail: "60% fewer prod bugs" },
];

// Fixed scatter of background squares -- the sitewide blueprint grid "waking
// up" as the pipeline runs. Positions are hand-picked for spread, not data.
const CUBES: { x: string; y: string; size: number; at: number }[] = [
  { x: "6%", y: "18%", size: 10, at: 0.08 },
  { x: "14%", y: "62%", size: 14, at: 0.18 },
  { x: "23%", y: "30%", size: 8, at: 0.28 },
  { x: "34%", y: "78%", size: 12, at: 0.35 },
  { x: "44%", y: "15%", size: 10, at: 0.45 },
  { x: "52%", y: "70%", size: 8, at: 0.52 },
  { x: "63%", y: "25%", size: 14, at: 0.62 },
  { x: "72%", y: "68%", size: 10, at: 0.7 },
  { x: "82%", y: "20%", size: 12, at: 0.8 },
  { x: "90%", y: "60%", size: 8, at: 0.88 },
  { x: "10%", y: "88%", size: 10, at: 0.95 },
  { x: "95%", y: "85%", size: 10, at: 0.98 },
];

function Cube({ cube, progress }: { cube: (typeof CUBES)[number]; progress: MotionValue<number> }) {
  const opacity = useTransform(progress, [cube.at - 0.06, cube.at], [0, 1]);
  const scale = useTransform(progress, [cube.at - 0.06, cube.at], [0.4, 1]);
  return (
    <motion.div
      style={{ left: cube.x, top: cube.y, width: cube.size, height: cube.size, opacity, scale }}
      className="absolute border rounded-sm border-accent/40 bg-accent/10"
    />
  );
}

function Node({ stage, index, total, progress }: { stage: Stage; index: number; total: number; progress: MotionValue<number> }) {
  const threshold = index / (total - 1);
  const borderColor = useTransform(progress, [threshold - 0.1, threshold], ["#232A36", "#FF7A45"]);
  const textColor = useTransform(progress, [threshold - 0.1, threshold], ["#7C8592", "#E7EAEE"]);
  const checkOpacity = useTransform(progress, [threshold - 0.03, threshold], [0, 1]);
  const dotOpacity = useTransform(checkOpacity, (v) => 1 - v);

  return (
    <div className="flex flex-col items-center text-center shrink-0 w-16 lg:w-24">
      <motion.div
        style={{ borderColor }}
        className="relative z-10 flex items-center justify-center w-12 h-12 mb-3 border-2 rounded-md bg-surface lg:w-14 lg:h-14"
      >
        <motion.span style={{ opacity: checkOpacity }} className="absolute text-lg text-accent">
          <IoCheckmark />
        </motion.span>
        <motion.span style={{ opacity: dotOpacity }} className="absolute w-2 h-2 rounded-full bg-border" />
      </motion.div>
      <motion.p style={{ color: textColor }} className="mb-1 font-mono text-[11px] lg:text-xs tracking-widest">
        {stage.label}
      </motion.p>
      <p className="hidden text-xs leading-snug text-muted sm:block">{stage.detail}</p>
    </div>
  );
}

function Connector({ progress, from, to }: { progress: MotionValue<number>; from: number; to: number }) {
  const scaleX = useTransform(progress, [from, to], [0, 1]);
  return (
    <div className="relative flex-1 h-px mx-1 mt-6 bg-border lg:mt-7">
      <motion.div style={{ scaleX, originX: 0 }} className="absolute inset-0 bg-accent" />
    </div>
  );
}

export default function Pipeline() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const prefersReducedMotion = useReducedMotion();
  const staticProgress = useMotionValue(1);
  const progress = prefersReducedMotion ? staticProgress : scrollYProgress;

  return (
    <section ref={ref} className="relative py-24 overflow-hidden lg:py-32" id="pipeline">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {CUBES.map((cube, i) => (
          <Cube key={i} cube={cube} progress={progress} />
        ))}
      </div>

      <div className="container relative mx-auto">
        <p className="mb-12 font-mono text-xs tracking-widest text-center uppercase text-muted">
          the pipeline behind the work
        </p>
        <div className="flex items-start max-w-3xl mx-auto lg:max-w-4xl">
          {STAGES.map((stage, i) => (
            <div key={stage.key} className="flex items-start flex-1 last:flex-none">
              <Node stage={stage} index={i} total={STAGES.length} progress={progress} />
              {i < STAGES.length - 1 && <Connector progress={progress} from={i / (STAGES.length - 1)} to={(i + 1) / (STAGES.length - 1)} />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

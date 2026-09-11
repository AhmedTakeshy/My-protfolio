type Direction = "up" | "down" | "left" | "right";

// Distance kept small (16px, not the old 80px) on purpose: a large slide
// distance on stacked text elements with staggered delays can visually cross
// over neighboring elements mid-animation, before each settles into its own
// document-flow position. Small distance + short duration removes that risk
// entirely rather than just making it less likely.
export const fadeIn = (direction: Direction, delay: number) => {
  return {
    hidden: {
      y: direction === "up" ? 16 : direction === "down" ? -16 : 0,
      opacity: 0,
      x: direction === "left" ? 16 : direction === "right" ? -16 : 0,
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: "tween" as const,
        duration: 0.5,
        delay: delay,
        ease: [0.25, 0.25, 0.25, 0.75] as const,
      },
    },
  };
};

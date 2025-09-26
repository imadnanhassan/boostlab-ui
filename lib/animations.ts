export const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export const scaleHover = {
  initial: { scale: 1 },
  hover: { scale: 1.03, transition: { duration: 0.2 } },
};

export const bounceIn = {
  hidden: { opacity: 0, scale: 0.95 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", damping: 18, stiffness: 220 }
  },
};
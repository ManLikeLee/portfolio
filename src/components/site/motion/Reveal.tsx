"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

export function Reveal({
  children,
  index = 0,
  y = 16,
  blur = false,
  className,
  once = true,
}: {
  children: React.ReactNode;
  index?: number;
  y?: number;
  blur?: boolean;
  className?: string;
  once?: boolean;
}) {
  const reduce = useReducedMotion();

  const variants: Variants = {
    hidden: reduce ? { opacity: 0 } : { opacity: 0, y, filter: blur ? "blur(6px)" : "blur(0px)" },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once, margin: "-80px" }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}

"use client";

import type { MouseEvent, ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";

type AnimationProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export function AnimatedHero({ children, className }: AnimationProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.header
      className={className}
      initial={
        reduceMotion ? false : { opacity: 0, y: 30, scale: 0.97 }
      }
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      {children}
    </motion.header>
  );
}

export function Reveal({
  children,
  className,
  delay = 0,
}: AnimationProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

export function AnimatedCard({
  children,
  className,
  delay = 0,
}: AnimationProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 28, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-45px" }}
      transition={{ duration: 0.48, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

export function FloatingShape({
  className,
  delay = 0,
  reverse = false,
}: {
  className: string;
  delay?: number;
  reverse?: boolean;
}) {
  const reduceMotion = useReducedMotion();
  const distance = reverse ? 10 : -10;

  return (
    <motion.div
      aria-hidden="true"
      className={className}
      animate={
        reduceMotion
          ? undefined
          : { y: [0, distance, 0], scale: [1, 1.04, 1] }
      }
      transition={{
        duration: 5.5,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}

export function SmoothScrollLink({
  targetId,
  children,
  className,
}: {
  targetId: string;
  children: ReactNode;
  className?: string;
}) {
  const reduceMotion = useReducedMotion();

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    ) {
      return;
    }

    const target = document.getElementById(targetId);
    if (!target) return;

    event.preventDefault();
    target.scrollIntoView({
      behavior: reduceMotion ? "auto" : "smooth",
      block: "start",
    });
    window.history.pushState(null, "", `#${targetId}`);
  };

  return (
    <a href={`#${targetId}`} className={className} onClick={handleClick}>
      {children}
    </a>
  );
}

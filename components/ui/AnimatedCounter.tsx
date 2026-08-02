"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";

type AnimatedCounterProps = {
  value: number;
  prefix?: string;
  suffix?: string;
  displayOverride?: string;
  className?: string;
};

export function AnimatedCounter({
  value,
  prefix = "",
  suffix = "",
  displayOverride,
  className,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const reduceMotion = useReducedMotion();
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { stiffness: 70, damping: 22 });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!inView) return;
    if (reduceMotion || displayOverride) {
      setDisplay(displayOverride ?? String(value));
      return;
    }
    motionValue.set(value);
  }, [inView, value, motionValue, reduceMotion, displayOverride]);

  useEffect(() => {
    if (displayOverride || reduceMotion) return;
    const unsubscribe = spring.on("change", (latest) => {
      setDisplay(Math.round(latest).toString());
    });
    return unsubscribe;
  }, [spring, displayOverride, reduceMotion]);

  return (
    <motion.span ref={ref} className={className}>
      {prefix}
      {display}
      {suffix}
    </motion.span>
  );
}

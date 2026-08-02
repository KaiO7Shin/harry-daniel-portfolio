"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { pageTransition } from "@/lib/motion";
import type { ReactNode } from "react";

export function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();
  const [progress, setProgress] = useState(false);

  useEffect(() => {
    setProgress(true);
    const timer = window.setTimeout(() => setProgress(false), 500);
    return () => window.clearTimeout(timer);
  }, [pathname]);

  return (
    <>
      <div
        className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-[2px] overflow-hidden"
        aria-hidden
      >
        <motion.div
          key={pathname}
          className="h-full origin-left bg-yellow"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={
            progress
              ? { scaleX: 1, opacity: 1 }
              : { scaleX: 1, opacity: 0 }
          }
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={pathname}
          initial={reduceMotion ? { opacity: 0 } : "initial"}
          animate={reduceMotion ? { opacity: 1 } : "animate"}
          exit={reduceMotion ? { opacity: 0 } : "exit"}
          variants={reduceMotion ? undefined : pageTransition}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </>
  );
}

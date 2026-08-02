"use client";

import Link from "next/link";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";
import { player } from "@/data/player";
import { Button } from "@/components/ui/Button";
import { MadagascarFlag } from "@/components/ui/MadagascarFlag";
import { SafeImage } from "@/components/ui/ImageReveal";
import { easeOutExpo, staggerFast, wordReveal } from "@/lib/motion";

export function HeroSection() {
  const reduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0.15]);

  const nameLines = [player.firstName, player.lastName];

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[100svh] overflow-hidden"
    >
      <motion.div
        className="absolute inset-0"
        style={reduceMotion ? undefined : { y: imageY, scale: imageScale }}
      >
        <SafeImage
          src={player.images.hero}
          alt={`${player.displayName} — portrait en maillot national Madagascar`}
          className="absolute inset-0 hidden h-full w-full sm:block"
          imageClassName="object-cover object-[62%_16%]"
          priority
          sizes="100vw"
        />
        <SafeImage
          src={player.images.heroMobile}
          alt={`${player.displayName} — portrait mobile`}
          className="absolute inset-0 h-full w-full sm:hidden"
          imageClassName="object-cover object-[62%_18%]"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black-main via-black-main/80 to-black-main/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-black-main via-black-main/40 to-black-main/50" />
        <div className="pointer-events-none absolute inset-0 grid-noise opacity-30" />
      </motion.div>

      <motion.div
        className="relative z-10 flex min-h-[100svh] flex-col justify-end pb-16 pt-32 md:justify-center md:pb-24"
        style={reduceMotion ? undefined : { y: contentY, opacity: contentOpacity }}
      >
        <div className="container-main">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: easeOutExpo }}
            className="mb-6 inline-flex items-center gap-3 section-eyebrow"
          >
            {player.heroLabel}
            <MadagascarFlag />
          </motion.p>

          <h1 className="text-display uppercase">
            {nameLines.map((line, lineIndex) => (
              <motion.span
                key={line}
                className="flex flex-wrap gap-x-[0.22em] overflow-hidden text-[clamp(3rem,10vw,7.5rem)]"
                initial="hidden"
                animate="visible"
                variants={
                  reduceMotion
                    ? undefined
                    : {
                        hidden: {},
                        visible: {
                          transition: {
                            staggerChildren: 0.055,
                            delayChildren: 0.12 + lineIndex * 0.18,
                          },
                        },
                      }
                }
              >
                {line.split(" ").map((word) => (
                  <motion.span
                    key={`${line}-${word}`}
                    className="inline-block"
                    variants={reduceMotion ? undefined : wordReveal}
                  >
                    {word}
                  </motion.span>
                ))}
              </motion.span>
            ))}
          </h1>

          <motion.div
            className="mt-6 h-px w-24 origin-left bg-yellow md:w-36"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.9, delay: 0.55, ease: easeOutExpo }}
          />

          <motion.div
            className="mt-7 max-w-xl"
            initial="hidden"
            animate="visible"
            variants={reduceMotion ? undefined : staggerFast}
          >
            <motion.p
              className="text-lg text-white-main/90 md:text-xl"
              variants={reduceMotion ? undefined : wordReveal}
            >
              {player.heroSubtitle}
            </motion.p>
            <motion.p
              className="mt-4 text-[16px] leading-relaxed text-muted md:text-[17px]"
              variants={reduceMotion ? undefined : wordReveal}
            >
              {player.heroDescription}
            </motion.p>
          </motion.div>

          <motion.div
            className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.85, ease: easeOutExpo }}
          >
            <Button href="/palmares" size="lg">
              Voir le parcours
            </Button>
            <Button href="/galerie" variant="secondary" size="lg">
              Voir les images
            </Button>
          </motion.div>

          <motion.div
            className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-[11px] uppercase tracking-[0.18em] text-muted"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.05, duration: 0.5 }}
          >
            {player.badges.slice(0, 3).map((badge) => (
              <span key={badge}>{badge}</span>
            ))}
          </motion.div>

          <motion.p
            className="mt-10 max-w-md border-l border-yellow/60 pl-4 text-sm italic text-white-main/70"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.15, duration: 0.6 }}
          >
            “{player.quote}”
          </motion.p>

          <motion.div
            className="mt-8 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <Link
              href="/contact"
              className="text-sm text-muted underline-offset-4 transition-colors hover:text-yellow hover:underline"
            >
              Me contacter
            </Link>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        aria-hidden
        className="pointer-events-none absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
      >
        <span className="text-[10px] uppercase tracking-[0.28em] text-muted">
          Scroll
        </span>
        <motion.span
          className="h-8 w-px bg-yellow/70"
          animate={reduceMotion ? undefined : { scaleY: [0.4, 1, 0.4], opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}

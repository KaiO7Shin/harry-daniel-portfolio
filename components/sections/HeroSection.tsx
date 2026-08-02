"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { player } from "@/data/player";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { MadagascarFlag } from "@/components/ui/MadagascarFlag";
import { SafeImage } from "@/components/ui/ImageReveal";
import { easeOutExpo } from "@/lib/motion";

export function HeroSection() {
  const reduceMotion = useReducedMotion();
  const photoRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (reduceMotion || !photoRef.current) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    photoRef.current.style.transform = `translate3d(${x * 12}px, ${y * 10}px, 0)`;
  };

  const resetParallax = () => {
    if (photoRef.current) {
      photoRef.current.style.transform = "translate3d(0,0,0)";
    }
  };

  return (
    <section
      className="relative min-h-[92vh] overflow-hidden pt-28 pb-16"
      onMouseMove={handleMouseMove}
      onMouseLeave={resetParallax}
    >
      <div className="pointer-events-none absolute inset-0 grid-noise opacity-40" />
      <div className="pointer-events-none absolute top-1/4 right-[8%] h-[42vw] w-[42vw] max-w-[560px] yellow-glow opacity-70" />

      {/* Subtle table / ball graphic accents */}
      <div
        className="pointer-events-none absolute bottom-24 left-[8%] hidden h-px w-40 bg-border lg:block"
        aria-hidden
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute bottom-20 left-[18%] hidden size-3 rounded-full bg-yellow/80 shadow-[0_0_20px_rgba(244,196,48,0.35)] lg:block"
        animate={
          reduceMotion
            ? undefined
            : { y: [0, -8, 0], opacity: [0.7, 1, 0.7] }
        }
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container-main relative grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: easeOutExpo }}
            className="mb-5 inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.22em] text-yellow"
          >
            {player.heroLabel}
            <MadagascarFlag />
          </motion.p>

          <h1 className="text-display uppercase">
            <motion.span
              className="block text-[clamp(2.75rem,8vw,6rem)] leading-[0.95]"
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1, ease: easeOutExpo }}
            >
              {player.firstName}
            </motion.span>
            <motion.span
              className="block text-[clamp(2.75rem,8vw,6rem)] leading-[0.95]"
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.22, ease: easeOutExpo }}
            >
              {player.lastName}
            </motion.span>
          </h1>

          <motion.div
            className="mt-5 h-px origin-left bg-yellow"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.85, delay: 0.4, ease: easeOutExpo }}
          />

          <motion.p
            className="mt-5 text-lg text-white-main/90"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease: easeOutExpo }}
          >
            {player.heroSubtitle}
          </motion.p>

          <motion.p
            className="mt-4 max-w-xl text-[16px] leading-relaxed text-muted"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.58, ease: easeOutExpo }}
          >
            {player.heroDescription}
          </motion.p>

          <motion.div
            className="mt-7 flex flex-wrap gap-2.5"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.08, delayChildren: 0.7 } },
            }}
          >
            {player.badges.map((badge) => (
              <motion.div
                key={badge}
                variants={{
                  hidden: { opacity: 0, y: 12 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <Badge>{badge}</Badge>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.65, delay: 0.95, ease: easeOutExpo }}
          >
            <Button href="/palmares" size="lg">
              Découvrir mon parcours
            </Button>
            <Button href="/palmares" variant="secondary" size="lg">
              Voir le palmarès
            </Button>
          </motion.div>

          <motion.div
            className="mt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.5 }}
          >
            <Link
              href="/contact"
              className="text-sm text-muted underline-offset-4 transition-colors hover:text-yellow hover:underline"
            >
              Me contacter
            </Link>
          </motion.div>

          <motion.p
            className="mt-8 max-w-md border-l border-yellow/50 pl-4 text-sm italic text-white-main/75"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
          >
            “{player.quote}”
          </motion.p>
        </div>

        <motion.div
          className="relative mx-auto w-full max-w-[520px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <div className="absolute -inset-6 yellow-glow opacity-80" aria-hidden />
          <motion.div
            ref={photoRef}
            className="relative aspect-[4/5] overflow-hidden rounded-sm border border-border bg-anthracite transition-transform duration-300 ease-out will-change-transform"
            initial={
              reduceMotion
                ? { opacity: 0 }
                : { opacity: 0, clipPath: "inset(0 0 100% 0)" }
            }
            animate={
              reduceMotion
                ? { opacity: 1 }
                : { opacity: 1, clipPath: "inset(0 0 0% 0)" }
            }
            transition={{ duration: 1.15, delay: 0.45, ease: easeOutExpo }}
          >
            <SafeImage
              src={player.images.hero}
              alt={`${player.displayName} — portrait en maillot national Madagascar`}
              className="absolute inset-0 hidden h-full w-full sm:block"
              imageClassName="object-cover object-[62%_18%]"
              priority
              sizes="(max-width: 1024px) 90vw, 520px"
            />
            <SafeImage
              src={player.images.heroMobile}
              alt={`${player.displayName} — portrait mobile`}
              className="absolute inset-0 h-full w-full sm:hidden"
              imageClassName="object-cover object-[62%_18%]"
              priority
              sizes="100vw"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black-main via-transparent to-black-main/20" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black-main to-transparent" />
          </motion.div>

          <div className="mt-4 flex items-center justify-between text-[11px] uppercase tracking-[0.18em] text-muted">
            <span>Équipe nationale</span>
            <span className="inline-flex items-center gap-2">
              Madagascar <MadagascarFlag />
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

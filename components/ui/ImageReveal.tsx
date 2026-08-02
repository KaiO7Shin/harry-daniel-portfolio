"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { fadeUp, reducedMotionVariants } from "@/lib/motion";
import { cn } from "@/lib/utils";

type ImageRevealProps = {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
  sizes?: string;
  fill?: boolean;
  width?: number;
  height?: number;
};

export function ImageReveal({
  src,
  alt,
  className,
  imageClassName,
  priority = false,
  sizes = "(max-width: 768px) 100vw, 50vw",
  fill = true,
  width,
  height,
}: ImageRevealProps) {
  const reduceMotion = useReducedMotion();
  const [failed, setFailed] = useState(false);

  return (
    <motion.div
      className={cn("relative overflow-hidden bg-anthracite", className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={reduceMotion ? reducedMotionVariants : fadeUp}
    >
      {failed ? (
        <Placeholder />
      ) : (
        <Image
          src={src}
          alt={alt}
          fill={fill}
          width={fill ? undefined : (width ?? 1200)}
          height={fill ? undefined : (height ?? 800)}
          priority={priority}
          sizes={sizes}
          className={cn("object-cover", imageClassName)}
          onError={() => setFailed(true)}
        />
      )}
    </motion.div>
  );
}

export function SafeImage({
  src,
  alt,
  className,
  imageClassName,
  priority = false,
  sizes = "(max-width: 768px) 100vw, 50vw",
  fill = true,
  width,
  height,
}: ImageRevealProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className={cn(
          "flex items-center justify-center overflow-hidden bg-gradient-to-br from-anthracite via-black-secondary to-black-main",
          className,
        )}
        role="img"
        aria-label={alt}
      >
        <Placeholder />
      </div>
    );
  }

  if (fill) {
    return (
      <div className={cn("overflow-hidden", className)}>
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          className={cn("object-cover", imageClassName)}
          onError={() => setFailed(true)}
        />
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width ?? 1200}
      height={height ?? 800}
      priority={priority}
      sizes={sizes}
      className={cn(imageClassName, className)}
      onError={() => setFailed(true)}
    />
  );
}

function Placeholder() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="text-center">
        <p className="text-display text-3xl text-yellow/40">HD</p>
        <p className="mt-2 text-xs uppercase tracking-[0.2em] text-muted">
          Photo à venir
        </p>
      </div>
    </div>
  );
}

"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import type { GalleryItem } from "@/data/gallery";
import { SafeImage } from "@/components/ui/ImageReveal";

type GalleryLightboxProps = {
  items: GalleryItem[];
  index: number | null;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
};

export function GalleryLightbox({
  items,
  index,
  onClose,
  onPrev,
  onNext,
}: GalleryLightboxProps) {
  const item = index !== null ? items[index] : null;

  useEffect(() => {
    if (index === null) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft") onPrev();
      if (event.key === "ArrowRight") onNext();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [index, onClose, onPrev, onNext]);

  return (
    <AnimatePresence>
      {item && (
        <motion.div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-black-main/90 p-4 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role="dialog"
          aria-modal="true"
          aria-label={item.caption}
          onClick={onClose}
        >
          <motion.div
            className="relative w-full max-w-5xl"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            transition={{ duration: 0.35 }}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="relative aspect-[16/10] overflow-hidden border border-border bg-anthracite">
              <SafeImage
                src={item.src}
                alt={item.alt}
                className="absolute inset-0 h-full w-full"
                sizes="100vw"
              />
            </div>

            <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-lg text-white-main">{item.caption}</p>
                <p className="text-sm text-muted">
                  {item.location} — {item.date}
                </p>
              </div>
              <p className="text-xs uppercase tracking-[0.16em] text-muted">
                {index! + 1} / {items.length}
              </p>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="absolute -top-12 right-0 inline-flex size-10 items-center justify-center border border-border bg-black-secondary text-white-main hover:border-yellow hover:text-yellow"
              aria-label="Fermer la lightbox"
            >
              <X className="size-5" />
            </button>

            <button
              type="button"
              onClick={onPrev}
              className="absolute top-1/2 left-2 inline-flex size-10 -translate-y-1/2 items-center justify-center border border-border bg-black-main/70 text-white-main hover:border-yellow hover:text-yellow md:-left-14"
              aria-label="Photo précédente"
            >
              <ChevronLeft className="size-5" />
            </button>

            <button
              type="button"
              onClick={onNext}
              className="absolute top-1/2 right-2 inline-flex size-10 -translate-y-1/2 items-center justify-center border border-border bg-black-main/70 text-white-main hover:border-yellow hover:text-yellow md:-right-14"
              aria-label="Photo suivante"
            >
              <ChevronRight className="size-5" />
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

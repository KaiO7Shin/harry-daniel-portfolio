"use client";

import { motion } from "framer-motion";
import { galleryFilters, type GalleryFilterId } from "@/data/gallery";
import { cn } from "@/lib/utils";

type GalleryFiltersProps = {
  active: GalleryFilterId;
  onChange: (id: GalleryFilterId) => void;
};

export function GalleryFilters({ active, onChange }: GalleryFiltersProps) {
  return (
    <div
      className="flex flex-wrap gap-x-1 gap-y-2 border-b border-white-main/10 pb-1"
      role="tablist"
      aria-label="Filtres de la galerie"
    >
      {galleryFilters.map((filter) => {
        const selected = active === filter.id;
        return (
          <button
            key={filter.id}
            type="button"
            role="tab"
            aria-selected={selected}
            onClick={() => onChange(filter.id)}
            className={cn(
              "relative px-4 py-3 text-[12px] uppercase tracking-[0.16em] transition-colors",
              selected
                ? "text-yellow"
                : "text-muted hover:text-white-main",
            )}
          >
            {filter.label}
            {selected && (
              <motion.span
                layoutId="gallery-filter-line"
                className="absolute inset-x-3 bottom-0 h-px bg-yellow"
              />
            )}
          </button>
        );
      })}
    </div>
  );
}

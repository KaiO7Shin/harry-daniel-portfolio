"use client";

import { motion } from "framer-motion";
import {
  achievementFilters,
  type AchievementFilterId,
} from "@/data/achievements";
import { cn } from "@/lib/utils";

type AchievementFiltersProps = {
  active: AchievementFilterId;
  onChange: (id: AchievementFilterId) => void;
};

export function AchievementFilters({
  active,
  onChange,
}: AchievementFiltersProps) {
  return (
    <div
      className="flex flex-wrap gap-x-1 gap-y-2 border-b border-white-main/10 pb-1"
      role="tablist"
      aria-label="Filtres du palmarès"
    >
      {achievementFilters.map((filter) => {
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
              selected ? "text-yellow" : "text-muted hover:text-white-main",
            )}
          >
            {filter.label}
            {selected && (
              <motion.span
                layoutId="achievement-filter-line"
                className="absolute inset-x-3 bottom-0 h-px bg-yellow"
              />
            )}
          </button>
        );
      })}
    </div>
  );
}

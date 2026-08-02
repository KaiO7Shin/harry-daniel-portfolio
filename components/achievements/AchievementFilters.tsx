"use client";

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
      className="flex flex-wrap gap-2"
      role="tablist"
      aria-label="Filtres du palmarès"
    >
      {achievementFilters.map((filter) => (
        <button
          key={filter.id}
          type="button"
          role="tab"
          aria-selected={active === filter.id}
          onClick={() => onChange(filter.id)}
          className={cn(
            "rounded-sm border px-4 py-2 text-[12px] uppercase tracking-[0.14em] transition-colors",
            active === filter.id
              ? "border-yellow bg-yellow/10 text-yellow"
              : "border-border bg-black-secondary text-muted hover:border-yellow/40 hover:text-white-main",
          )}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
}

"use client";

import { useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  achievements,
  type AchievementFilterId,
} from "@/data/achievements";
import { AchievementFilters } from "@/components/achievements/AchievementFilters";
import { AchievementYear } from "@/components/achievements/AchievementYear";

export function AchievementTimeline() {
  const [filter, setFilter] = useState<AchievementFilterId>("tous");
  const reduceMotion = useReducedMotion();

  const filtered = useMemo(() => {
    return achievements
      .map((group) => ({
        ...group,
        items:
          filter === "tous"
            ? group.items
            : group.items.filter((item) => item.scopes.includes(filter)),
      }))
      .filter((group) => group.items.length > 0)
      .slice()
      .reverse();
  }, [filter]);

  return (
    <div>
      <AchievementFilters active={filter} onChange={setFilter} />

      <div className="relative mt-12 space-y-12">
        <motion.div
          className="absolute top-2 left-[5px] hidden w-px origin-top bg-border md:block"
          style={{ height: "calc(100% - 1rem)" }}
          initial={reduceMotion ? false : { scaleY: 0 }}
          whileInView={reduceMotion ? undefined : { scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        />

        {filtered.length === 0 ? (
          <p className="text-muted">Aucun résultat pour ce filtre.</p>
        ) : (
          filtered.map((group) => (
            <AchievementYear
              key={group.year}
              year={group.year}
              items={group.items}
            />
          ))
        )}
      </div>
    </div>
  );
}

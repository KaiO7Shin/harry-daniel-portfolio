"use client";

import { useMemo, useState } from "react";
import { galleryItems, type GalleryFilterId } from "@/data/gallery";
import { GalleryCard } from "@/components/gallery/GalleryCard";
import { GalleryFilters } from "@/components/gallery/GalleryFilters";
import { GalleryLightbox } from "@/components/gallery/GalleryLightbox";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";

export function GalleryGrid() {
  const [filter, setFilter] = useState<GalleryFilterId>("tous");
  const [index, setIndex] = useState<number | null>(null);

  const filtered = useMemo(() => {
    if (filter === "tous") return galleryItems;
    return galleryItems.filter((item) => item.category === filter);
  }, [filter]);

  return (
    <div>
      <GalleryFilters active={filter} onChange={setFilter} />

      <Stagger className="mt-10 grid grid-cols-1 gap-3 md:grid-cols-3 md:gap-4">
        {filtered.map((item, itemIndex) => (
          <StaggerItem key={item.id}>
            <GalleryCard item={item} onOpen={() => setIndex(itemIndex)} />
          </StaggerItem>
        ))}
      </Stagger>

      {filtered.length === 0 && (
        <p className="mt-10 text-muted">Aucune image pour ce filtre.</p>
      )}

      <GalleryLightbox
        items={filtered}
        index={index}
        onClose={() => setIndex(null)}
        onPrev={() =>
          setIndex((current) =>
            current === null
              ? null
              : (current - 1 + filtered.length) % filtered.length,
          )
        }
        onNext={() =>
          setIndex((current) =>
            current === null ? null : (current + 1) % filtered.length,
          )
        }
      />
    </div>
  );
}

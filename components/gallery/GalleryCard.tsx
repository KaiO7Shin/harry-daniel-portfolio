"use client";

import type { GalleryItem } from "@/data/gallery";
import { SafeImage } from "@/components/ui/ImageReveal";
import { cn } from "@/lib/utils";

type GalleryCardProps = {
  item: GalleryItem;
  onOpen: () => void;
};

export function GalleryCard({ item, onOpen }: GalleryCardProps) {
  return (
    <button
      type="button"
      onClick={onOpen}
      className={cn(
        "group relative block w-full overflow-hidden border border-white-main/10 text-left focus-visible:outline-yellow",
        item.span === "wide" && "md:col-span-2",
        item.span === "tall" && "md:row-span-2",
      )}
      aria-label={`Ouvrir ${item.caption}`}
    >
      <div
        className={cn(
          "relative",
          item.span === "tall" ? "aspect-[3/4] md:h-full" : "aspect-[4/3]",
        )}
      >
        <SafeImage
          src={item.src}
          alt={item.alt}
          className="absolute inset-0 h-full w-full"
          imageClassName="transition-transform duration-700 ease-out group-hover:scale-[1.06]"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black-main/90 via-black-main/15 to-transparent opacity-75 transition-opacity duration-300 group-hover:opacity-95" />
        <div className="absolute inset-x-0 bottom-0 translate-y-2 p-4 opacity-90 transition-all duration-400 group-hover:translate-y-0 group-hover:opacity-100">
          <p className="text-sm text-white-main">{item.caption}</p>
          <p className="mt-1 text-[11px] uppercase tracking-[0.16em] text-muted">
            {item.category}
          </p>
        </div>
      </div>
    </button>
  );
}

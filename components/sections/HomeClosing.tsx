"use client";

import Link from "next/link";
import { galleryItems, galleryPreviewIds } from "@/data/gallery";
import { Button } from "@/components/ui/Button";
import { SafeImage } from "@/components/ui/ImageReveal";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";

export function HomeClosing() {
  const preview = galleryItems
    .filter((item) => galleryPreviewIds.includes(item.id))
    .slice(0, 4);

  return (
    <section className="section-space">
      <div className="container-main space-y-16">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <Reveal>
            <p className="section-eyebrow mb-4">Galerie</p>
            <h2 className="text-[clamp(2rem,4vw,3rem)] uppercase">En images</h2>
          </Reveal>
          <Reveal>
            <Link
              href="/galerie"
              className="text-sm text-muted underline-offset-4 transition-colors hover:text-yellow hover:underline"
            >
              Toute la galerie
            </Link>
          </Reveal>
        </div>

        <Stagger className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {preview.map((item, index) => (
            <StaggerItem
              key={item.id}
              className={index === 0 ? "md:col-span-1" : undefined}
            >
              <Link
                href="/galerie"
                className="group relative block aspect-[4/5] overflow-hidden border border-white-main/10"
              >
                <SafeImage
                  src={item.src}
                  alt={item.alt}
                  className="absolute inset-0 h-full w-full"
                  imageClassName="transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black-main/85 via-transparent to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-100" />
                <p className="absolute inset-x-0 bottom-0 translate-y-1 p-3 text-xs text-white-main transition-transform duration-300 group-hover:translate-y-0">
                  {item.caption}
                </p>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal>
          <div className="relative overflow-hidden border border-white-main/10 px-6 py-14 md:px-12 md:py-16">
            <div className="mg-stripe absolute inset-x-0 top-0" />
            <div
              className="pointer-events-none absolute -right-16 top-0 h-72 w-72 yellow-glow opacity-40"
              aria-hidden
            />
            <p className="section-eyebrow mb-4">Contact</p>
            <h2 className="max-w-2xl text-[clamp(2rem,4.5vw,3.25rem)] uppercase">
              Échangeons.
            </h2>
            <p className="mt-5 max-w-xl text-[17px] leading-relaxed text-muted">
              Une question, une interview, un échange autour de mon parcours —
              écrivez-moi.
            </p>
            <div className="mt-8">
              <Button href="/contact">Me contacter</Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

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
    <section className="section-space bg-black-secondary">
      <div className="container-main space-y-12">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <Reveal>
            <div>
              <p className="mb-3 text-[12px] uppercase tracking-[0.22em] text-yellow">
                Galerie
              </p>
              <h2 className="text-[clamp(2rem,4vw,2.75rem)] uppercase">
                En images
              </h2>
            </div>
          </Reveal>
          <Reveal>
            <Link
              href="/galerie"
              className="text-sm text-muted underline-offset-4 transition-colors hover:text-yellow hover:underline"
            >
              Voir toute la galerie
            </Link>
          </Reveal>
        </div>

        <Stagger className="grid grid-cols-2 gap-3 md:grid-cols-4">
          {preview.map((item) => (
            <StaggerItem key={item.id}>
              <Link
                href="/galerie"
                className="group relative block aspect-[4/5] overflow-hidden border border-border"
              >
                <SafeImage
                  src={item.src}
                  alt={item.alt}
                  className="absolute inset-0 h-full w-full"
                  imageClassName="transition-transform duration-500 group-hover:scale-[1.04]"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black-main/80 via-transparent to-transparent" />
                <p className="absolute inset-x-0 bottom-0 p-3 text-xs text-white-main">
                  {item.caption}
                </p>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>

        <div className="relative overflow-hidden border border-border bg-anthracite px-6 py-12 md:px-12 md:py-14">
          <div className="mg-stripe absolute inset-x-0 top-0" />
          <div className="pointer-events-none absolute -right-10 top-0 h-64 w-64 yellow-glow opacity-50" />

          <Reveal>
            <p className="mb-4 text-[12px] uppercase tracking-[0.22em] text-yellow">
              Contact
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="max-w-3xl text-[clamp(2rem,4.5vw,3.25rem)] uppercase">
              Échangeons autour de mon projet sportif.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 max-w-2xl text-[17px] leading-relaxed text-muted">
              Pour une opportunité sportive, une interview ou toute demande
              d’information, n’hésitez pas à me contacter.
            </p>
          </Reveal>
          <Reveal delay={0.15} className="mt-8">
            <Button href="/contact">Me contacter</Button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

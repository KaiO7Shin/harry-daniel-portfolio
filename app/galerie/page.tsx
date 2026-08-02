import { GalleryGrid } from "@/components/gallery/GalleryGrid";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Galerie",
  description:
    "Galerie photos de Harry Daniel Andriamihaja : portraits, matchs, compétitions, équipe nationale et podiums.",
  path: "/galerie",
});

export default function GaleriePage() {
  return (
    <div className="section-space pt-32">
      <div className="container-main">
        <SectionTitle
          as="h1"
          eyebrow="Visuels"
          title="Galerie"
          description="Une sélection d’images de mon parcours — matchs, compétitions et moments d’équipe."
          className="mb-12"
        />
        <GalleryGrid />
      </div>
    </div>
  );
}

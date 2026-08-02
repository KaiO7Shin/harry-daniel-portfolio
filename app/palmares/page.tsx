import { AchievementTimeline } from "@/components/achievements/AchievementTimeline";
import { CareerPreview } from "@/components/sections/CareerPreview";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Palmarès",
  description:
    "Parcours et palmarès de Harry Daniel Andriamihaja : titres régionaux, podiums nationaux et résultats internationaux.",
  path: "/palmares",
});

export default function PalmaresPage() {
  return (
    <div className="pt-32">
      <div className="container-main section-space !pb-8">
        <SectionTitle
          as="h1"
          eyebrow="Parcours"
          title="Palmarès"
          description="Ma trajectoire, du circuit régional malagasy aux compétitions africaines ITTF."
        />
      </div>

      <CareerPreview embedded />

      <div className="container-main section-space !pt-10">
        <SectionTitle
          eyebrow="Résultats"
          title="Tous les titres"
          description="Filtrer par niveau ou type de compétition."
          className="mb-10"
        />
        <AchievementTimeline />
      </div>
    </div>
  );
}

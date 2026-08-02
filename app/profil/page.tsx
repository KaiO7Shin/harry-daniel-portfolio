import { PlayerCard } from "@/components/profile/PlayerCard";
import { ProfileExtras } from "@/components/profile/ProfileExtras";
import { TechnicalProfile } from "@/components/profile/TechnicalProfile";
import { Button } from "@/components/ui/Button";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Profil",
  description:
    "Mon profil sportif : biographie, fiche technique, entraînement et parcours scolaire.",
  path: "/profil",
});

export default function ProfilPage() {
  return (
    <div className="section-space pt-32">
      <div className="container-main space-y-16">
        <PlayerCard />
        <TechnicalProfile />
        <ProfileExtras />
        <div className="flex flex-col gap-4 border border-border bg-black-secondary p-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-xl text-sm text-muted">
            Clubs, partenaires, médias : parlons de la suite.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button href="/palmares" variant="secondary">
              Voir mon palmarès
            </Button>
            <Button href="/contact">Me contacter</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

import { PlayerCard } from "@/components/profile/PlayerCard";
import { ProfileExtras } from "@/components/profile/ProfileExtras";
import { TechnicalProfile } from "@/components/profile/TechnicalProfile";
import { Button } from "@/components/ui/Button";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Profil",
  description:
    "Profil sportif de Harry Daniel Andriamihaja : biographie, fiche technique, entraînement et parcours scolaire.",
  path: "/profil",
});

export default function ProfilPage() {
  return (
    <div className="section-space pt-32">
      <div className="container-main space-y-20">
        <PlayerCard />
        <TechnicalProfile />
        <ProfileExtras />
        <div className="flex flex-col gap-5 border border-white-main/10 px-6 py-8 sm:flex-row sm:items-center sm:justify-between md:px-8">
          <p className="max-w-xl text-sm leading-relaxed text-muted">
            Pour en savoir plus sur mon parcours ou échanger, le palmarès et le
            formulaire de contact sont à votre disposition.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button href="/palmares" variant="secondary">
              Voir le palmarès
            </Button>
            <Button href="/contact">Me contacter</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

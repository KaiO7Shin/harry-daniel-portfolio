import { player } from "@/data/player";
import { Reveal } from "@/components/ui/Reveal";

const fields = [
  { label: "Nom", value: player.officialName },
  { label: "Nom sportif", value: player.displayName },
  { label: "Année de naissance", value: String(player.birthYear) },
  { label: "Nationalité", value: player.nationality },
  { label: "Club actuel", value: player.currentClub },
  { label: "Équipe nationale", value: player.country },
  { label: "Catégorie", value: player.category },
  { label: "Niveau", value: player.nationalLevel },
  { label: "Classement", value: player.nationalRanking },
  { label: "Classement junior", value: player.juniorRanking },
  { label: "Main dominante", value: player.dominantHand },
  { label: "Prise", value: player.grip },
  { label: "Style", value: player.playingStyle },
  { label: "Coup fort", value: player.strongestShot },
  { label: "Atouts", value: player.strengths.join(", ") },
  { label: "Entraîneur", value: player.coach },
];

export function TechnicalProfile() {
  return (
    <section>
      <Reveal>
        <p className="section-eyebrow mb-4">Données</p>
        <h2 className="mb-8 text-[clamp(2rem,4vw,2.75rem)] uppercase">
          Fiche technique
        </h2>
      </Reveal>
      <Reveal delay={0.08}>
        <dl className="grid gap-0 border-t border-white-main/10 sm:grid-cols-2">
          {fields.map((field) => (
            <div
              key={field.label}
              className="border-b border-white-main/10 px-0 py-4 sm:pr-8"
            >
              <dt className="text-[11px] uppercase tracking-[0.16em] text-muted">
                {field.label}
              </dt>
              <dd className="mt-2 text-sm leading-relaxed text-white-main">
                {field.value}
              </dd>
            </div>
          ))}
        </dl>
      </Reveal>
    </section>
  );
}

import { ContactForm } from "@/components/contact/ContactForm";
import { MadagascarFlag } from "@/components/ui/MadagascarFlag";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { player } from "@/data/player";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Contact",
  description:
    "Contacter Harry Daniel Andriamihaja pour une question, une interview ou un échange autour de son parcours.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <div className="section-space pt-32">
      <div className="container-main grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div>
          <p className="section-eyebrow mb-4">Contact</p>
          <h1 className="text-[clamp(2.75rem,6vw,4.5rem)] uppercase">
            Écrivons-nous
          </h1>
          <p className="mt-5 max-w-xl text-[17px] leading-relaxed text-muted">
            {player.contact.note}
          </p>

          <div className="mt-10 space-y-4 border border-white-main/10 px-6 py-7">
            <p className="flex items-center gap-2 text-sm text-white-main">
              {player.contact.location} <MadagascarFlag />
            </p>
            <a
              href={`mailto:${player.contact.email}`}
              className="block text-sm text-yellow transition-colors hover:text-yellow-hover"
            >
              {player.contact.email}
            </a>
            <SocialLinks className="pt-2" />
            <p className="pt-2 text-xs text-muted">
              Aucune information privée (adresse personnelle, numéro
              personnel, données familiales) n’est publiée sur ce site.
            </p>
          </div>
        </div>

        <div className="border border-white-main/10 bg-black-secondary/50 p-6 md:p-8">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

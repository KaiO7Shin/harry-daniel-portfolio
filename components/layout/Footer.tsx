import Link from "next/link";
import { footerLinks } from "@/data/navigation";
import { player } from "@/data/player";
import { MadagascarFlag } from "@/components/ui/MadagascarFlag";
import { SocialLinks } from "@/components/ui/SocialLinks";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white-main/10 bg-black-secondary">
      <div className="mg-stripe" />
      <div className="container-main section-space !py-16">
        <div className="grid gap-14 lg:grid-cols-[1.3fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="text-display text-2xl font-bold tracking-[0.12em]">
                {player.monogram}
              </span>
              <span className="size-1.5 rounded-full bg-yellow" />
            </div>
            <p className="mt-5 text-display text-xl font-semibold uppercase tracking-wide">
              {player.displayName}
            </p>
            <p className="mt-3 flex flex-wrap items-center gap-2 text-sm text-muted">
              Joueur national de tennis de table — {player.country}
              <MadagascarFlag />
            </p>
            <p className="mt-7 max-w-sm border-l border-yellow/50 pl-4 text-sm italic text-white-main/75">
              “{player.quote}”
            </p>
          </div>

          <div>
            <p className="section-eyebrow mb-5">Navigation</p>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted transition-colors hover:text-yellow"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="section-eyebrow mb-5">Contact</p>
            <p className="text-sm text-muted">{player.contact.location}</p>
            <a
              href={`mailto:${player.contact.email}`}
              className="mt-2 inline-block text-sm text-white-main transition-colors hover:text-yellow"
            >
              {player.contact.email}
            </a>
            <div className="mt-6">
              <SocialLinks />
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white-main/10 pt-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {player.displayName}. Tous droits réservés.
          </p>
          <p>Portfolio sportif — Madagascar</p>
        </div>
      </div>
    </footer>
  );
}

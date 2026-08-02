import Link from "next/link";
import { footerLinks } from "@/data/navigation";
import { player } from "@/data/player";
import { MadagascarFlag } from "@/components/ui/MadagascarFlag";
import { SocialLinks } from "@/components/ui/SocialLinks";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-black-secondary">
      <div className="mg-stripe" />
      <div className="container-main section-space !py-16">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-display text-2xl font-bold tracking-[0.08em]">
                {player.monogram}
              </span>
              <span className="size-1.5 rounded-full bg-yellow" />
            </div>
            <p className="mt-4 text-display text-xl font-semibold">
              {player.displayName}
            </p>
            <p className="mt-2 flex flex-wrap items-center gap-2 text-sm text-muted">
              Joueur national de tennis de table — {player.country}
              <MadagascarFlag />
            </p>
            <p className="mt-6 max-w-sm text-sm italic text-white-main/80">
              “{player.quote}”
            </p>
          </div>

          <div>
            <p className="mb-4 text-[12px] uppercase tracking-[0.2em] text-yellow">
              Navigation
            </p>
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
            <p className="mb-4 text-[12px] uppercase tracking-[0.2em] text-yellow">
              Contact
            </p>
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

        <div className="mt-14 flex flex-col gap-3 border-t border-border pt-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {player.displayName}. Tous droits réservés.
          </p>
          <p>Portfolio sportif officiel — Madagascar</p>
        </div>
      </div>
    </footer>
  );
}

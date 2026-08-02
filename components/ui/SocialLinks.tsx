import { player } from "@/data/player";
import { cn } from "@/lib/utils";

type SocialLinksProps = {
  className?: string;
};

export function SocialLinks({ className }: SocialLinksProps) {
  return (
    <ul className={cn("flex flex-wrap gap-4", className)}>
      {player.socials.map((social) => (
        <li key={social.name}>
          <a
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted transition-colors hover:text-yellow"
            aria-label={social.label}
          >
            {social.name}
          </a>
        </li>
      ))}
    </ul>
  );
}

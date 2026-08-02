import { Badge } from "@/components/ui/Badge";
import { MadagascarFlag } from "@/components/ui/MadagascarFlag";
import type { Achievement } from "@/data/achievements";
import { cn } from "@/lib/utils";

type InternationalHighlightProps = {
  achievement: Achievement;
  className?: string;
};

export function InternationalHighlight({
  achievement,
  className,
}: InternationalHighlightProps) {
  return (
    <article
      className={cn(
        "border border-yellow/55 bg-yellow/[0.04] p-5 shadow-[0_0_30px_-18px_rgba(244,196,48,0.8)]",
        className,
      )}
    >
      <div className="mb-3 flex flex-wrap items-center gap-2">
        <Badge tone="international">International</Badge>
        <MadagascarFlag />
      </div>
      <h3 className="text-display text-lg uppercase tracking-wide">
        {achievement.title}
      </h3>
      <div className="mt-3 space-y-1 text-sm text-muted">
        {achievement.category && <p>{achievement.category}</p>}
        {achievement.location && <p>{achievement.location}</p>}
      </div>
    </article>
  );
}

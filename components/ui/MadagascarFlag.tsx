import Image from "next/image";
import { cn } from "@/lib/utils";

type MadagascarFlagProps = {
  className?: string;
  title?: string;
  size?: "sm" | "md" | "lg";
};

const sizes = {
  sm: { className: "h-3.5 w-5", width: 20, height: 14 },
  md: { className: "h-4 w-6", width: 24, height: 16 },
  lg: { className: "h-5 w-8", width: 32, height: 20 },
} as const;

export function MadagascarFlag({
  className,
  title = "Drapeau de Madagascar",
  size = "sm",
}: MadagascarFlagProps) {
  const dim = sizes[size];

  return (
    <span
      className={cn(
        "relative inline-block shrink-0 overflow-hidden rounded-[1px] border border-white/15 align-middle",
        dim.className,
        className,
      )}
      title={title}
    >
      <Image
        src="/images/madagascar-flag.svg"
        alt={title}
        width={dim.width}
        height={dim.height}
        className="h-full w-full object-cover"
        unoptimized
      />
    </span>
  );
}

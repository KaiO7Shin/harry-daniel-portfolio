"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Magnetic } from "@/components/ui/Magnetic";
import type { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "md" | "lg";

type CommonProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  showIcon?: boolean;
  icon?: ReactNode;
};

type ButtonAsButton = CommonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type ButtonAsLink = CommonProps & {
  href: string;
  target?: string;
  rel?: string;
};

type ButtonProps = ButtonAsButton | ButtonAsLink;

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-yellow text-black-main hover:bg-yellow-hover",
  secondary:
    "bg-transparent text-white-main border border-white-main/25 hover:border-yellow hover:text-yellow",
  ghost: "bg-transparent text-muted hover:text-yellow px-0",
};

const sizes: Record<ButtonSize, string> = {
  md: "min-h-11 px-5 text-sm",
  lg: "min-h-12 px-7 text-[15px]",
};

export function Button(props: ButtonProps) {
  const {
    children,
    variant = "primary",
    size = "md",
    className,
    showIcon = true,
    icon,
  } = props;

  const classes = cn(
    "group inline-flex items-center justify-center gap-2 rounded-none font-medium tracking-wide transition-colors duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none",
    variants[variant],
    variant !== "ghost" && sizes[size],
    className,
  );

  const content = (
    <>
      <span>{children}</span>
      {showIcon &&
        (icon ?? (
          <ArrowUpRight
            className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            aria-hidden
          />
        ))}
    </>
  );

  if ("href" in props && props.href) {
    return (
      <Magnetic strength={0.22}>
        <Link
          href={props.href}
          className={classes}
          target={props.target}
          rel={props.rel}
        >
          {content}
        </Link>
      </Magnetic>
    );
  }

  const buttonProps = props as ButtonAsButton;

  return (
    <Magnetic strength={0.18}>
      <button
        type={buttonProps.type ?? "button"}
        className={classes}
        disabled={buttonProps.disabled}
        onClick={buttonProps.onClick}
        aria-label={buttonProps["aria-label"]}
      >
        {content}
      </button>
    </Magnetic>
  );
}

"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
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
    "bg-yellow text-black-main hover:bg-yellow-hover shadow-[0_0_0_0_rgba(244,196,48,0)] hover:shadow-[0_10px_30px_-12px_rgba(244,196,48,0.55)]",
  secondary:
    "bg-transparent text-white-main border border-border hover:border-yellow hover:text-yellow",
  ghost: "bg-transparent text-muted hover:text-yellow px-0",
};

const sizes: Record<ButtonSize, string> = {
  md: "min-h-11 px-5 text-sm",
  lg: "min-h-12 px-6 text-[15px]",
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
    "group inline-flex items-center justify-center gap-2 rounded-sm font-medium tracking-wide transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none",
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
      <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
        <Link
          href={props.href}
          className={classes}
          target={props.target}
          rel={props.rel}
        >
          {content}
        </Link>
      </motion.div>
    );
  }

  const buttonProps = props as ButtonAsButton;

  return (
    <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
      <button
        type={buttonProps.type ?? "button"}
        className={classes}
        disabled={buttonProps.disabled}
        onClick={buttonProps.onClick}
        aria-label={buttonProps["aria-label"]}
      >
        {content}
      </button>
    </motion.div>
  );
}

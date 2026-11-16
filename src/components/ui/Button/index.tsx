import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "dark" | "lemon";
  className?: string;
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-lg px-7 py-3.5 text-sm leading-6 font-normal transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand";

const variants: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary: "bg-brand text-white hover:bg-ink",
  secondary: "border border-line bg-white text-ink hover:border-ink",
  dark: "bg-ink text-white hover:bg-brand",
  lemon: "bg-lemon text-ink hover:bg-peach",
};

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonProps) {
  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  );
}


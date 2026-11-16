import type { ReactNode } from "react";

type EyebrowProps = {
  children: ReactNode;
  className?: string;
};

export function Eyebrow({ children, className = "" }: EyebrowProps) {
  return (
    <p
      className={`text-xs uppercase font-semibold leading-4 tracking-[0.12em] text-brand ${className}`}
    >
      {children}
    </p>
  );
}

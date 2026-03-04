import { cn } from "@/lib/utils";
import type { SpinnerColors, SpinnerProps } from "./type";

const colorStyle: Record<SpinnerColors, string> = {
  primary: "bg-primary",
  secondary: "bg-secondary",
  tertiary: "bg-tertiary",
  foreground: "bg-foreground",
  background: "bg-background",
};

export function Spinner({
  size = 8,
  gap = 1,
  color = "foreground",
  className,
}: SpinnerProps) {
  return (
    <span
      className={cn(
        `inline-grid grid-rows-2 grid-cols-2 animate-spin origin-center`,
        className,
      )}
      style={{
        gap: `calc(var(--spacing) * ${gap})`,
        width: Number.isNaN(Number(size))
          ? size
          : `calc(var(--spacing) * ${size})`,
        height: Number.isNaN(Number(size))
          ? size
          : `calc(var(--spacing) * ${size})`,
      }}
    >
      {Array.from({ length: 4 }).map((_, i) => (
        // biome-ignore lint/suspicious/noArrayIndexKey: static elements
        <span key={i} className={colorStyle[color]}></span>
      ))}
    </span>
  );
}

import { forwardRef } from "react";
import { cn } from "@/lib/utils";
import type { InputColors, InputProps } from "./type";

const colorStyle: Record<InputColors, string> = {
  primary: "border-primary accent-primary bg-background",
  secondary: "border-secondary accent-secondary bg-background",
  tertiary: "border-tertiary accent-tertiary bg-background",
  foreground: "border-foreground accent-foreground bg-background",
  background:
    "border-background accent-background bg-foreground text-background",
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ color = "foreground", type, className, ...props }, ref) => (
    <input
      ref={ref}
      className={cn(
        "rounded-sm border-2 px-2 py-1 bg-white error:border-red-500",
        "disabled:opacity-60 disabled:cursor-not-allowed",
        type === "radio" || type === "checkbox" ? "inline" : "block w-full",
        type === "radio" || type === "checkbox" || type === "file"
          ? ""
          : "read-only:opacity-60 read-only:cursor-not-allowed",
        colorStyle[color],
        className,
      )}
      type={type}
      {...props}
    />
  ),
);

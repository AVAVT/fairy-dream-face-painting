import { forwardRef } from "react";
import { cn } from "@/lib/utils";
import type { TextareaColors, TextareaProps } from "./type";

const colorStyle: Record<TextareaColors, string> = {
  primary: "border-primary accent-primary bg-background",
  secondary: "border-secondary accent-secondary bg-background",
  tertiary: "border-tertiary accent-tertiary bg-background",
  foreground: "border-foreground accent-foreground bg-background",
  background:
    "border-background accent-background bg-foreground text-background",
};

export const TextArea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ color = "tertiary", className, ...props }, ref) => (
    <textarea
      ref={ref}
      className={cn(
        "block rounded-sm border-2 px-2 py-1 bg-white error:border-red-500 w-full h-[6rem]",
        "disabled:opacity-60 disabled:cursor-not-allowed read-only:opacity-60 read-only:cursor-not-allowed",
        colorStyle[color],
        className,
      )}
      {...props}
    />
  ),
);

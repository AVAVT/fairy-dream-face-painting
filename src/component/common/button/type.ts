import type { ButtonHTMLAttributes } from "react";
import { ALL_SCHEME_COLORS } from "@/lib/types";

export type ButtonVariants = "solid" | "outline";

export const ALL_BUTTON_COLORS = ALL_SCHEME_COLORS;
type AllButtonColors = typeof ALL_BUTTON_COLORS;

export type ButtonColors = AllButtonColors[number];

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariants;
  color?: ButtonColors;
  loading?: boolean;
}

import type { InputHTMLAttributes } from "react";
import { ALL_SCHEME_COLORS } from "@/lib/types";

export const ALL_INPUT_COLORS = ALL_SCHEME_COLORS;
type AllInputColors = typeof ALL_INPUT_COLORS;

export type InputColors = AllInputColors[number];

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  color?: InputColors;
}

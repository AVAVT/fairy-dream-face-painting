import { ALL_SCHEME_COLORS } from "@/lib/types";

export const ALL_SPINNER_COLORS = ALL_SCHEME_COLORS;
export type AllSpinnerColors = typeof ALL_SPINNER_COLORS;

export type SpinnerColors = AllSpinnerColors[number];

export interface SpinnerProps {
  size?: number;
  gap?: number;
  color?: SpinnerColors;
  className?: string;
}

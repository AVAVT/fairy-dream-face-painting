import type { TextareaHTMLAttributes } from "react";
import { ALL_SCHEME_COLORS } from "@/lib/types";

export const ALL_TEXTAREA_COLORS = ALL_SCHEME_COLORS;
type AllTextareaColors = typeof ALL_TEXTAREA_COLORS;

export type TextareaColors = AllTextareaColors[number];

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  color?: TextareaColors;
}

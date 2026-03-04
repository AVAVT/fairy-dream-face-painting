export const ALL_SCHEME_COLORS = [
  "primary",
  "secondary",
  "tertiary",
  "foreground",
  "background",
] as const;

type AllSchemeColors = typeof ALL_SCHEME_COLORS;

export type SchemeColors = AllSchemeColors[number];

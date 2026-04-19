import clsx from "clsx";

export const container = clsx(
  "flex",
  "flex-col",
  "md:flex-row",
  "gap-4",
  "md:gap-4",
  "p-2",
  "h-full",
  "min-h-0",
  "flex-1",
);

export const bannerCustomizerContainer = clsx(
  "flex",
  "flex-col",
  "flex-1",
  "gap-4",
  "h-full",
  "min-h-0",
  "w-full",
);

export const content = clsx("flex", "flex-row", "gap-1");

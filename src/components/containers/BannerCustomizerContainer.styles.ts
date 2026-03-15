import clsx from "clsx";

export const container = clsx(
  "md:flex",
  "md:flex-row",
  "md:gap-4",
  "p-2",
  "h-full",
  "min-h-0",
  "overflow-hidden",
);

export const header = clsx(
  "mb-8",
  "text-2xl",
  "font-bold",
  "text-center",
  "uppercase",
);

export const bannerCustomizerContainer = clsx(
  "md:flex",
  "md:flex-col",
  "gap-4",
  "h-full",
  "min-h-0",
  "w-full",
);

export const content = clsx("md:flex", "md:flex-row", "gap-1");

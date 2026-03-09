import clsx from "clsx";

export const controlSidebar = clsx(
  "flex",
  "flex-col",
  "w-64",
  "p-4",
  "bg-gray-200",
  "rounded-lg",
);

export const controlInputGroup = clsx("flex", "flex-col", "gap-4");

export const fileNameInput = clsx(
  "p-2",
  "border",
  "border-gray-400",
  "rounded",
);

export const textInput = clsx(
  "p-2",
  "border",
  "border-gray-400",
  "rounded",
  "h-24",
  "resize-none",
);

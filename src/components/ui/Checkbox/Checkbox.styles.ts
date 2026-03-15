import clsx from "clsx";

export const checkbox = clsx(
  "flex",
  "h-4.5",
  "w-4.5",
  "items-center",
  "justify-center",
  "rounded-sm",
  "border",
  "border-zinc-500",
  "bg-white",
  "transition",
  "peer-checked:border-orange-600",
  "peer-checked:bg-orange-600",
  "peer-focus:ring-2",
  "peer-focus:ring-orange-300",
  "[&>svg]:opacity-0",
  "peer-checked:[&>svg]:opacity-100",
);

export const input = clsx("peer", "sr-only");

export const checkboxContainer = clsx(
  "flex",
  "items-center",
  "gap-3",
  "cursor-pointer",
  "select-none",
);

export const svg = clsx(
  "block",
  "h-3.75",
  "w-3.75",
  "shrink-0",
  "text-white",
  "transition-opacity",
  "duration-200",
);

export const label = clsx("text-sm", "font-medium");

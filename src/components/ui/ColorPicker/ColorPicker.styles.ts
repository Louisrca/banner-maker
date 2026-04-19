import clsx from "clsx";

export const container = clsx("flex", "flex-col", "gap-2", "w-full");

export const label = clsx("text-sm", "font-medium");

export const pickerWrapper = clsx(
  "flex",
  "items-center",
  "gap-3",
  "p-2",
  "border",
  "border-gray-400",
  "rounded",
  "cursor-pointer",
  "hover:border-orange-600",
  "transition-colors",
  "duration-200",
);

export const swatchContainer = clsx("relative", "w-6", "h-6", "shrink-0");

export const colorSwatch = clsx(
  "absolute",
  "inset-0",
  "rounded-sm",
  "border",
  "border-gray-200",
);

export const input = clsx(
  "absolute",
  "inset-0",
  "opacity-0",
  "cursor-pointer",
  "w-full",
  "h-full",
);

export const hexInput = clsx(
  "text-sm",
  "text-gray-600",
  "font-mono",
  "bg-transparent",
  "outline-none",
  "w-full",
  "min-w-0",
);

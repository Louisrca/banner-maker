import clsx from "clsx";

export const anchor = clsx(
  "px-4",
  "py-2",
  "text-black",
  "rounded-md",
  "hover:text-orange-600",
  "transition-colors",
  "duration-200",
  "cursor-pointer",
);

export const button = (variant: "primary" | "secondary") =>
  clsx(
    "cursor-pointer",
    "rounded-md",
    "px-2",
    "py-1",
    "transition-all",
    "duration-300",
    "ease-in-out",
    variant === "secondary" && [
      "border",
      "border-gray-300",
      "bg-transparent",
      "text-xs",
      "text-black",
      "shadow-sm",
      "hover:shadow-md",
    ],
    variant === "primary" && [
      "bg-black",
      "text-base",
      "text-white",
      "hover:bg-orange-600",
    ],
  );

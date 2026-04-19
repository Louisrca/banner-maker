import clsx from "clsx";

export const container = (isOverflow?: boolean) =>
  clsx(
    "p-4",
    "bg-white",
    "border-1",
    "border-gray-300",
    "rounded-xl",
    "flex",
    "flex-col",
    "gap-4",
    "shadow-lg",
    "max-h-screen",
    isOverflow && "h-full overflow-y-auto overscroll-contain",
  );

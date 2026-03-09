import clsx from "clsx";

export const anchor = `px-4 py-2 text-black rounded-md hover:text-orange-600 transition-colors duration-200 cursor-pointer`;

export const button = (variant: "primary" | "secondary") =>
  clsx(
    `px-2 py-1 rounded-md  cursor-pointer
     transition-all duration-300 ease-in-out`,
    variant === "secondary" &&
      `text-black bg-transparent border border-gray-300 shadow-sm text-xs hover:shadow-md`,
    variant === "primary" &&
      `bg-black text-white hover:bg-orange-600 text-base`,
  );

import clsx from "clsx";
export const section = `p-1 bg-gray-200 rounded-lg flex flex-col gap-4`;

export const container = `flex flex-col gap-4`;

export const header = `flex flex-row gap-4 items-center mb-4`;

export const imageContainer = clsx(
  "relative",
  "w-full",
  "max-w-[550px]",
  "aspect-[3/1]",
  "overflow-hidden",
  "mx-auto",
  "inline-block",
);

export const emptyContainer = clsx(
  "flex",
  "items-center",
  "justify-center",
  "w-full",
  "max-w-[550px]",
  "aspect-[3/1]",
  "border-2",
  "border-dashed",
  "border-black",
  "rounded-md",
  "relative",
  "cursor-pointer",
  "mx-auto",
);

export const textOverlay = clsx(
  "absolute",
  "top-[50%]",
  "left-[50%]",
  "transform",
  "-translate-x-1/2",
  "-translate-y-1/2",
  "text-red-500",
  "text-center",
  "w-[90%]",
);

export const gridOverlay = (isEnabled: boolean) =>
  clsx(
    "bg-grid-pattern pointer-events-none absolute inset-0 top-0 z-100 opacity-75",
    !isEnabled && "hidden",
  );

export const fileName = clsx("text-sm", "text-gray-600", "underline");

// TODO: object-[value] must be dynamic
export const image = clsx(
  "h-full",
  "w-full",
  "object-cover",
  "object-[50%_20%]",
);

export const fileInformation = clsx(
  "flex",
  "flex-col",
  "gap-2",
  "text-sm",
  "text-gray-600",
);

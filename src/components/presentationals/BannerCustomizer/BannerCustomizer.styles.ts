import clsx from "clsx";

export const container = "flex flex-col gap-4 flex-1 min-h-0";

export const header = "flex flex-row gap-4 items-center";

export const imageContainer = clsx(
  "relative",
  "w-full",
  "max-w-[550px]",
  "aspect-[3/1]",
  "overflow-hidden",
  "mx-auto",
  "block",
);

export const textOverlayContainer = (isDownloading: boolean) =>
  clsx(
    "absolute",
    "top-1/2",
    "left-1/2",
    "-translate-x-1/2",
    "-translate-y-1/2",
    "z-10",
    "cursor-move",
    "select-none",
    "inline-block",
    "max-w-full",
    !isDownloading && "border border-dashed border-gray-400",
  );

export const textOverlay =
  "text-center whitespace-pre-wrap pointer-events-none";

export const gridOverlay = (isEnabled: boolean) =>
  clsx(
    "bg-grid-pattern pointer-events-none absolute inset-0 z-[100] opacity-75",
    !isEnabled && "hidden",
  );

export const fileName = "text-sm text-gray-600 underline";

// TODO: object-[value] must be dynamic
export const image = "h-full w-full object-cover object-[50%_20%]";

export const fileInformation = "flex flex-col gap-2 text-sm text-gray-600";

import clsx from "clsx";
export const section = `p-1 bg-gray-200 rounded-lg flex flex-col gap-4`;

export const container = `flex flex-col gap-4`;

export const header = `flex flex-row gap-4 items-center mb-4`;

export const imageContainer = `h-[183.33px] w-[550px] relative inline-block`;

export const emptyContainer = `flex items-center justify-center h-[183.33px] w-[550px] border-2 border-dashed border-black rounded-md relative cursor-pointer`;

export const textOverlay = `absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 text-red-500 text-center w-[90%]`;

export const gridOverlay = (isEnabled: boolean) =>
  clsx(
    "absolute top-0 inset-0 bg-grid-pattern pointer-events-none opacity-75 z-100",
    !isEnabled && "hidden",
  );

export const fileName = `text-sm text-gray-600 underline`;

export const image = `h-[183.33px] w-[550px] object-cover object-[50%_20%]`;

export const fileInformation = `flex flex-col gap-2 text-sm text-gray-600`;

import { toPng, toJpeg } from "html-to-image";

export const useDownloadImage = () => {
  const htmlToPng = (nodeName: string, fileName?: string) => {
    const node = document.querySelector(nodeName) as HTMLElement;
    if (node) {
      toPng(node)
        .then((dataUrl) => {
          const link = document.createElement("a");
          link.download = fileName ?? "banner.png";
          link.href = dataUrl;
          link.click();
        })
        .catch((err) => {
          console.error("Failed to download image:", err);
        });
    }
  };

  const htmlToJpeg = (nodeName: string, fileName?: string) => {
    const node = document.querySelector(nodeName) as HTMLElement;
    if (node) {
      toJpeg(node)
        .then((dataUrl) => {
          const link = document.createElement("a");
          link.download = fileName ?? "banner.jpeg";
          link.href = dataUrl;
          link.click();
        })
        .catch((err) => {
          console.error("Failed to download image:", err);
        });
    }
  };

  return { htmlToPng, htmlToJpeg };
};

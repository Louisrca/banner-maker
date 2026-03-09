import { toPng, toJpeg } from "html-to-image";

export const useDownloadImage = () => {
  const htmlToPng = (nodeName: string, fileName?: string) => {
    console.log("youuuhouuu");
    const node = document.getElementById(nodeName);
    console.log("🚀 ~ htmlToPng ~ node:", node);
    if (node) {
      console.log("youuuhouuu 222222");
      toPng(node, { quality: 1, filter: (node) => node.id !== "gridOverlay" })
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
    const node = document.getElementById(nodeName);
    if (node) {
      toJpeg(node, { quality: 1, filter: (node) => node.id !== "gridOverlay" })
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

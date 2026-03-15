import { toBlob, toJpeg } from "html-to-image";

type DownloadOptions = {
  fileName?: string;
  scale?: number;
  excludeGrid?: boolean;
  setIsDownloading?: (isDownloading: boolean) => void;
};

const DEFAULT_SCALE = 3;

export const useDownloadImage = () => {
  const getNode = (nodeName: string) => {
    const node = document.getElementById(nodeName);
    if (!node) {
      throw new Error(`Node with id "${nodeName}" not found.`);
    }
    return node;
  };

  const buildFilter = (excludeGrid: boolean) => {
    return (domNode: HTMLElement) => {
      if (!excludeGrid) return true;
      return domNode.id !== "gridOverlay";
    };
  };

  const downloadBlob = (blob: Blob, fileName: string) => {
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.download = fileName;
    link.href = url;
    link.click();
    URL.revokeObjectURL(url);
  };

  const htmlToPng = async (nodeName: string, options: DownloadOptions = {}) => {
    try {
      const {
        fileName = "banner.png",
        scale = DEFAULT_SCALE,
        excludeGrid = true,
        setIsDownloading,
      } = options;

      setIsDownloading?.(true);

      const node = getNode(nodeName);
      const rect = node.getBoundingClientRect();

      const blob = await toBlob(node, {
        cacheBust: true,
        pixelRatio: scale,
        canvasWidth: Math.round(rect.width * scale),
        canvasHeight: Math.round(rect.height * scale),
        filter: buildFilter(excludeGrid),
      });

      if (!blob) {
        throw new Error("Failed to generate PNG blob.");
      }

      downloadBlob(blob, fileName);
      setIsDownloading?.(false);
    } catch (err) {
      console.error("Failed to download PNG:", err);
    }
  };

  const htmlToJpeg = async (
    nodeName: string,
    options: DownloadOptions = {},
  ) => {
    try {
      const {
        fileName = "banner.jpeg",
        scale = DEFAULT_SCALE,
        excludeGrid = true,
        setIsDownloading,
      } = options;

      setIsDownloading?.(true);

      const node = getNode(nodeName);
      const rect = node.getBoundingClientRect();

      const dataUrl = await toJpeg(node, {
        quality: 0.95,
        cacheBust: true,
        pixelRatio: scale,
        canvasWidth: Math.round(rect.width * scale),
        canvasHeight: Math.round(rect.height * scale),
        filter: buildFilter(excludeGrid),
      });

      const link = document.createElement("a");
      link.download = fileName;
      link.href = dataUrl;
      link.click();
      setIsDownloading?.(false);
    } catch (err) {
      console.error("Failed to download JPEG:", err);
    }
  };

  return { htmlToPng, htmlToJpeg };
};

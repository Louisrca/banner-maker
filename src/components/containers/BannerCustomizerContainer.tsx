import { useDownloadImage } from "@Hooks/useDownloadImage";
import BannerCustomizer from "@Presentationals/BannerCustomizer/BannerCustomizer";
import ControlSideBar from "@Presentationals/ControlSideBar/ControlSideBar";
import React, { useState } from "react";
import * as styles from "./BannerCustomizerContainer.styles";

export default function BannerCustomizerContainer() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const [isDownloading, setIsDownloading] = useState<boolean>(false);

  const [colorText, setColorText] = useState<string>("#000000");

  const [isGridOverlayEnabled, setIsGridOverlayEnabled] =
    useState<boolean>(false);

  const [isContentSavedInLocalStorage] = useState<boolean>(false);

  const { htmlToPng } = useDownloadImage();

  const [mainText, setMainText] = useState<string>("");

  const [fileName, setFileName] = useState<string>(
    selectedFile ? selectedFile.name : "",
  );

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null;

    if (!file) {
      return;
    }
    setSelectedFile(file);
    setFileName(file.name);
  };
  const handleHtmlToPng = () => {
    htmlToPng("imageContainer", {
      fileName: fileName,
      setIsDownloading,
    });
  };

  return (
    <>
      <div className={styles.container}>
        <ControlSideBar
          setMainText={setMainText}
          fileName={fileName}
          setFileName={setFileName}
          mainText={mainText}
          isContentSavedInLocalStorage={isContentSavedInLocalStorage}
          handleHtmlToPng={handleHtmlToPng}
          setIsGridOverlayEnabled={setIsGridOverlayEnabled}
          isGridOverlayEnabled={isGridOverlayEnabled}
          setColorText={setColorText}
          colorText={colorText}
          handleFileChange={handleFileChange}
        />
        <div className={styles.bannerCustomizerContainer}>
          <div className={styles.content}></div>
          <BannerCustomizer
            selectedFile={selectedFile}
            mainText={mainText}
            handleFileChange={handleFileChange}
            isGridOverlayEnabled={isGridOverlayEnabled}
            showFileInput={!!selectedFile}
            colorText={colorText}
            isDownloading={isDownloading}
          />
        </div>
      </div>
    </>
  );
}

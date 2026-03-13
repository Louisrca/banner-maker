import BannerCustomizer from "@Presentationals/BannerCustomizer/BannerCustomizer";
import ControlSideBar from "@Presentationals/ControlSideBar/ControlSideBar";
import { imageToBase64 } from "@Utils/convert-image-file";
import React, { useState } from "react";
import * as styles from "./BannerCustomizerContainer.styles";
import { useDownloadImage } from "@Hooks/useDownloadImage";

export default function BannerCustomizerContainer() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const [colorText, setColorText] = useState<string>("#000000");

  const [isGridOverlayEnabled, setIsGridOverlayEnabled] =
    useState<boolean>(false);

  const [isContentSavedInLocalStorage, setIsContentSavedInLocalStorage] =
    useState<boolean>(false);

  const { htmlToPng } = useDownloadImage();
  const [imageBase64, setImageBase64] = useState<string>();

  const [mainText, setMainText] = useState<string>("");

  const [fileName, setFileName] = useState<string>("");

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null;
    imageToBase64(file as File).then((base64) => {
      setImageBase64(base64);
      setSelectedFile(file);
    });
  };
  const handleHtmlToPng = () => {
    htmlToPng("imageContainer");
  };

  // TODO: Refactor this function to only save the image name in local storage the entire node and convert the image to base64 when loading the content from local storage
  const handleSaveNode = () => {
    if (!mainText) {
      alert("Please enter banner text before saving.");
      return;
    }

    if (!imageBase64) {
      alert("Please select an image before saving.");
      return;
    }

    localStorage.setItem(
      "bannerNode",
      JSON.stringify([
        {
          mainText: mainText ? mainText : null,
          // TODO: Store the image
          image: imageBase64 ? imageBase64 : null,
        },
      ]),
    );

    setIsContentSavedInLocalStorage(true);

    setTimeout(() => {
      setIsContentSavedInLocalStorage(false);
    }, 3000);
  };
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1
          style={{
            display: "inline-block",
            transform: "scaleY(2) scaleX(1.5) ",
            letterSpacing: "-0.09em",
          }}
        >
          Banner.io
        </h1>
      </div>
      <div className={styles.content}>
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
        />
        <BannerCustomizer
          selectedFile={selectedFile}
          mainText={mainText}
          handleFileChange={handleFileChange}
          isGridOverlayEnabled={isGridOverlayEnabled}
          showFileInput={!!selectedFile}
          colorText={colorText}
        />
      </div>
    </div>
  );
}

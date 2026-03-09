import CardContainer from "@UI/CardContainer/CardContainer";
import React, { useEffect } from "react";
import * as styles from "./BannerCustomizer.styles";
import Button from "@UI/Button/Button";
import { imageToBase64 } from "@Utils/convert-image-file";

type BannerCustomizerProps = {
  selectedFile: File | null;
  mainText: string;
  handleFileChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  isGridOverlayEnabled: boolean;
  showFileInput?: boolean;
};

export default function BannerCustomizer({
  selectedFile,
  mainText,
  handleFileChange,
  isGridOverlayEnabled,
  showFileInput = false,
}: BannerCustomizerProps) {
  const inputFileRef = React.useRef<HTMLInputElement>(null);

  const [dimensions, setDimensions] = React.useState<{
    width: number;
    height: number;
  } | null>(null);

  const [previewUrl, setPreviewUrl] = React.useState<string>("");

  useEffect(() => {
    if (!selectedFile) {
      setPreviewUrl("");
      setDimensions(null);
      return;
    }

    const objectUrl = URL.createObjectURL(selectedFile);

    const img = new Image();
    img.onload = () => {
      setDimensions({ width: img.width, height: img.height });
      URL.revokeObjectURL(objectUrl);
    };
    img.src = objectUrl;

    imageToBase64(selectedFile).then((base64) => {
      setPreviewUrl(base64);
    });
  }, [selectedFile]);

  return (
    <CardContainer>
      <div className={styles.container}>
        {selectedFile ? (
          <>
            <div className={styles.header}>
              <p className={styles.fileName}>{selectedFile?.name}</p>
              {showFileInput && (
                <>
                  <Button
                    buttonVariant="secondary"
                    onClick={() => {
                      if (inputFileRef.current) {
                        inputFileRef.current.click();
                      }
                    }}
                  >
                    Change image
                  </Button>
                  <input
                    type="file"
                    id="updateFile"
                    name="updateFile"
                    accept="image/*"
                    className="hidden"
                    ref={inputFileRef}
                    onChange={handleFileChange}
                  />
                </>
              )}
            </div>
            <div className={styles.imageContainer} id="imageContainer">
              {selectedFile && (
                <img src={previewUrl} alt="Selected" className={styles.image} />
              )}
              {mainText && (
                <span className={styles.textOverlay}>{mainText}</span>
              )}
              <div
                className={styles.gridOverlay(isGridOverlayEnabled)}
                id="gridOverlay"
              ></div>
            </div>
          </>
        ) : (
          <label className={styles.emptyContainer} htmlFor="file">
            <span className="text-orange-500">Upload image</span>

            <input
              type="file"
              id="file"
              name="file"
              accept="image/*"
              className="hidden"
              onChange={handleFileChange}
            />
          </label>
        )}
        {selectedFile && (
          <div className={styles.fileInformation}>
            <span>file size: {(selectedFile.size / 1024).toFixed(2)} KB</span>
            <span>
              image dimensions:{" "}
              {dimensions
                ? `${dimensions.width} x ${dimensions.height}`
                : "N/A"}
            </span>
            <span> file type: {selectedFile.type}</span>
          </div>
        )}
      </div>
    </CardContainer>
  );
}

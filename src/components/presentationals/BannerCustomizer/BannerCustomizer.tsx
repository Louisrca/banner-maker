import CardContainer from "@UI/CardContainer/CardContainer";
import React, { useEffect } from "react";
import * as styles from "./BannerCustomizer.styles";
import Button from "@UI/Button/Button";

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
  const getImageDimensions = (
    file: File,
  ): Promise<{ width: number; height: number }> => {
    return new Promise((resolve) => {
      const img = new Image();
      img.onload = () => resolve({ width: img.width, height: img.height });
      img.src = URL.createObjectURL(file);
    });
  };
  const inputFileRef = React.useRef<HTMLInputElement>(null);

  const [dimensions, setDimensions] = React.useState<{
    width: number;
    height: number;
  } | null>(null);

  useEffect(() => {
    if (selectedFile) {
      getImageDimensions(selectedFile).then(setDimensions);
    }
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
                <img
                  src={URL.createObjectURL(selectedFile)}
                  alt="Selected"
                  className={styles.image}
                />
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

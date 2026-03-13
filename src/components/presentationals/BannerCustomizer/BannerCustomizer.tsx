import CardContainer from "@UI/CardContainer/CardContainer";
import React, { useEffect, useRef, useState } from "react";
import * as styles from "./BannerCustomizer.styles";
import Button from "@UI/Button/Button";
import { imageToBase64 } from "@Utils/convert-image-file";

import useDraggableElement from "@Hooks/useDraggableElement";

type BannerCustomizerProps = {
  selectedFile: File | null;
  mainText: string;
  handleFileChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  isGridOverlayEnabled: boolean;
  showFileInput?: boolean;
  colorText: string;
};

export default function BannerCustomizer({
  selectedFile,
  mainText,
  handleFileChange,
  isGridOverlayEnabled,
  showFileInput = false,
  colorText,
}: BannerCustomizerProps) {
  const inputFileRef = useRef<HTMLInputElement>(null);
  const textOverlayRef = useRef<HTMLDivElement>(null);

  const [dimensions, setDimensions] = useState<{
    width: number;
    height: number;
  } | null>(null);

  const [textOverlayPosition, setTextOverlayPosition] = useState<{
    x: number;
    y: number;
  } | null>(null);

  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  useEffect(() => {
    if (!selectedFile) {
      setPreviewUrl(null);
      setDimensions(null);
      return;
    }

    const objectUrl = URL.createObjectURL(selectedFile);
    let isMounted = true;

    const img = new Image();
    img.onload = () => {
      if (!isMounted) return;
      setDimensions({
        width: img.width,
        height: img.height,
      });
    };
    img.src = objectUrl;

    imageToBase64(selectedFile).then((base64) => {
      if (!isMounted) return;
      setPreviewUrl(base64);
    });

    return () => {
      isMounted = false;
      URL.revokeObjectURL(objectUrl);
    };
  }, [selectedFile]);

  useDraggableElement(
    textOverlayRef,
    setTextOverlayPosition,
    textOverlayPosition,
    !!mainText,
  );

  return (
    <CardContainer>
      <div className={styles.container}>
        {selectedFile ? (
          <>
            <div className={styles.header}>
              <p className={styles.fileName}>{selectedFile.name}</p>

              {showFileInput && (
                <>
                  <Button
                    buttonVariant="secondary"
                    onClick={() => inputFileRef.current?.click()}
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
              {previewUrl && (
                <img src={previewUrl} alt="Selected" className={styles.image} />
              )}

              {!!mainText && (
                <div
                  ref={textOverlayRef}
                  className={styles.textOverlayContainer}
                  id="textOverlay"
                >
                  <span
                    className={styles.textOverlay}
                    style={{ color: colorText }}
                  >
                    {mainText}
                  </span>
                </div>
              )}

              <div
                className={styles.gridOverlay(isGridOverlayEnabled)}
                id="gridOverlay"
              />
            </div>
          </>
        ) : (
          <label className={styles.emptyContainer} htmlFor="file">
            <div className="h-full w-full border border-amber-600">
              <span className="text-orange-500">Upload image</span>
              <input
                type="file"
                id="file"
                name="file"
                accept="image/*"
                className="hidden"
                onChange={handleFileChange}
              />
            </div>
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
            <span>file type: {selectedFile.type}</span>
          </div>
        )}
      </div>
    </CardContainer>
  );
}

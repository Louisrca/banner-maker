import React from "react";
import CardContainer from "@UI/CardContainer/CardContainer";
import * as styles from "./BannerCustomizer.styles";

type BannerCustomizerProps = {
  selectedFile: File | null;
  mainText: string;
  handleFileChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function BannerCustomizer({
  selectedFile,
  mainText,
  handleFileChange,
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

  const [dimensions, setDimensions] = React.useState<{
    width: number;
    height: number;
  } | null>(null);

  React.useEffect(() => {
    if (selectedFile) {
      getImageDimensions(selectedFile).then(setDimensions);
    }
  }, [selectedFile]);

  return (
    <CardContainer>
      <div>
        <p>Selected file: {selectedFile?.name}</p>
        {selectedFile ? (
          <div className={styles.imageContainer} id="imageContainer">
            {selectedFile && (
              <img
                src={URL.createObjectURL(selectedFile)}
                alt="Selected"
                className={styles.image}
              />
            )}
            {mainText && <span className={styles.textOverlay}>{mainText}</span>}
          </div>
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

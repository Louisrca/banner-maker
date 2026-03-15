import React from "react";

import * as styles from "./InputFile.styles";

type InputFileProps = {
  handleFileChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function InputFile({ handleFileChange }: InputFileProps) {
  return (
    <>
      <label className={styles.emptyContainer} htmlFor="file">
        <div className="h-full w-full">
          <span>Upload image</span>
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
    </>
  );
}

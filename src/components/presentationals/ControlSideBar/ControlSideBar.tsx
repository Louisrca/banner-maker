import { type ChangeEvent } from "react";
import * as styles from "./ControlSideBar.styles";
import CardContainer from "@UI/CardContainer/CardContainer";
import Button from "@UI/Button/Button";

type ControlSideBarProps = {
  handleFileChange: (event: ChangeEvent<HTMLInputElement>) => void;
  setMainText: (text: string) => void;
  fileName: string;
  setFileName: (name: string) => void;
  showFileInput?: boolean;
  mainText?: string;
  isContentSavedInLocalStorage?: boolean;
  handleHtmlToPng: () => void;
};

export default function ControlSideBar({
  handleFileChange,
  setMainText,
  fileName,
  setFileName,
  showFileInput = false,
  mainText = "",
  isContentSavedInLocalStorage,
  handleHtmlToPng,
}: ControlSideBarProps) {
  return (
    <CardContainer>
      <h2>Control</h2>
      <div className={styles.controlInputGroup}>
        {showFileInput && (
          <input
            type="file"
            id="updateFile"
            name="updateFile"
            accept="image/*"
            onChange={handleFileChange}
          />
        )}
        <input
          type="text"
          id="fileName"
          placeholder="File name"
          className={styles.fileNameInput}
          value={fileName}
          onChange={(event) => {
            setFileName(event.target.value);
          }}
        />
        <textarea
          id="mainText"
          maxLength={100}
          placeholder="Banner text"
          className={styles.textInput}
          value={mainText}
          onChange={(event) => {
            setMainText(event.target.value);
          }}
        />
        {isContentSavedInLocalStorage && (
          <p style={{ color: "green" }}>
            Your content has been saved in local storage.
          </p>
        )}
        <Button onClick={handleHtmlToPng}>Download banner</Button>
      </div>
    </CardContainer>
  );
}

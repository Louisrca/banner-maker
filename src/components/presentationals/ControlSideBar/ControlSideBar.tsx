import Button from "@UI/Button/Button";
import CardContainer from "@UI/CardContainer/CardContainer";
import Checkbox from "@UI/Checkbox/Checkbox";
import { type ChangeEvent } from "react";
import * as styles from "./ControlSideBar.styles";

type ControlSideBarProps = {
  setMainText: (text: string) => void;
  fileName: string;
  setFileName: (name: string) => void;
  mainText?: string;
  isContentSavedInLocalStorage?: boolean;
  handleHtmlToPng: () => void;
  setIsGridOverlayEnabled: (isEnabled: boolean) => void;
  isGridOverlayEnabled: boolean;
};

export default function ControlSideBar({
  setMainText,
  fileName,
  setFileName,
  mainText = "",
  isContentSavedInLocalStorage,
  handleHtmlToPng,
  setIsGridOverlayEnabled,
  isGridOverlayEnabled,
}: ControlSideBarProps) {
  return (
    <CardContainer>
      <h2>Control</h2>
      <div className={styles.controlInputGroup}>
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
        <Checkbox
          label="Show grid overlay"
          checked={isGridOverlayEnabled}
          onChange={() =>
            setIsGridOverlayEnabled(isGridOverlayEnabled ? false : true)
          }
        />

        <Button onClick={handleHtmlToPng}>Download banner</Button>
      </div>
    </CardContainer>
  );
}

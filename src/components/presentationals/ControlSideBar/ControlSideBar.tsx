import Button from "@UI/Button/Button";
import CardContainer from "@UI/CardContainer/CardContainer";
import Checkbox from "@UI/Checkbox/Checkbox";
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
  setColorText: (color: string) => void;
  colorText: string;
};

export default function ControlSideBar({
  setMainText,
  fileName,
  setFileName,
  mainText = "",
  handleHtmlToPng,
  setIsGridOverlayEnabled,
  isGridOverlayEnabled,
  setColorText,
  colorText,
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
        <input
          type="color"
          id="colorPicker"
          value={colorText}
          onChange={(event) => setColorText(event.target.value)}
        />

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

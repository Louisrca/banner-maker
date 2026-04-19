import Button from "@UI/Button/Button";
import CardContainer from "@UI/CardContainer/CardContainer";
import Checkbox from "@UI/Checkbox/Checkbox";
import ColorPicker from "@UI/ColorPicker/ColorPicker";
import * as styles from "./ControlSideBar.styles";
import InputFile from "@UI/InputFile/InputFile";
import TextArea from "@UI/TextArea/TextArea";

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
  handleFileChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
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
  handleFileChange,
}: ControlSideBarProps) {
  return (
    <CardContainer isOverflow>
      <h2>Control</h2>
      <div className={styles.controlInputGroup}>
        <InputFile handleFileChange={handleFileChange} />

        <label htmlFor="fileName">File Name</label>
        <input
          type="text"
          id="fileName"
          name="fileName"
          placeholder="File name"
          className={styles.fileNameInput}
          value={fileName}
          onChange={(event) => {
            setFileName(event.target.value);
          }}
        />

        <TextArea mainText={mainText} setMainText={setMainText} />

        <ColorPicker
          label="Text color"
          value={colorText}
          onChange={setColorText}
        />

        <Checkbox
          label="Show grid overlay"
          checked={isGridOverlayEnabled}
          onChange={() =>
            setIsGridOverlayEnabled(isGridOverlayEnabled ? false : true)
          }
        />

        <Button onClick={handleHtmlToPng} label="Download" />
      </div>
    </CardContainer>
  );
}

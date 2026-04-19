import * as styles from "./TextArea.styles";

type TextAreaProps = {
  mainText: string;
  setMainText: (text: string) => void;
};

export default function TextArea({ mainText, setMainText }: TextAreaProps) {
  return (
    <div className={styles.textAreaContainer}>
      <label htmlFor="mainText">Text Field</label>
      <textarea
        id="mainText"
        name="mainText"
        maxLength={100}
        placeholder="Banner text"
        className={styles.textInput}
        value={mainText}
        onChange={(event) => {
          setMainText(event.target.value);
        }}
      />
    </div>
  );
}

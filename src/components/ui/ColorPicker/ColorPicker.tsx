import { useId, useState, useEffect } from "react";
import * as styles from "./ColorPicker.styles";

type ColorPickerProps = {
  value: string;
  onChange: (color: string) => void;
  label?: string;
};

const isValidHex = (hex: string) => /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/.test(hex);

export default function ColorPicker({ value, onChange, label }: ColorPickerProps) {
  const id = useId();
  const [hexInput, setHexInput] = useState(value);

  useEffect(() => {
    setHexInput(value);
  }, [value]);

  const handleHexChange = (raw: string) => {
    const normalized = raw.startsWith("#") ? raw : `#${raw}`;
    setHexInput(normalized);
    if (isValidHex(normalized)) {
      onChange(normalized);
    }
  };

  return (
    <div className={styles.container}>
      {label && <label htmlFor={id} className={styles.label}>{label}</label>}
      <div className={styles.pickerWrapper}>
        <div className={styles.swatchContainer}>
          <div className={styles.colorSwatch} style={{ backgroundColor: value }} />
          <input
            id={id}
            type="color"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className={styles.input}
          />
        </div>
        <input
          type="text"
          value={hexInput}
          onChange={(e) => handleHexChange(e.target.value)}
          onBlur={() => !isValidHex(hexInput) && setHexInput(value)}
          className={styles.hexInput}
          maxLength={7}
          spellCheck={false}
        />
      </div>
    </div>
  );
}

import { useId } from "react";
import * as styles from "./Checkbox.styles";

type CheckboxProps = {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
};

export default function Checkbox({ checked, onChange, label }: CheckboxProps) {
  const id = useId();

  return (
    <label htmlFor={id} className={styles.checkboxContainer}>
      <input
        id={id}
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className={styles.input}
      />

      <div className={styles.checkbox}>
        <svg className={styles.svg} viewBox="0 0 20 20" fill="currentColor">
          <path
            fillRule="evenodd"
            d="M16.704 5.29a1 1 0 010 1.42l-7.25 7.25a1 1 0 01-1.415 0l-3.25-3.25a1 1 0 111.414-1.42l2.543 2.544 6.543-6.544a1 1 0 011.415 0z"
            clipRule="evenodd"
          />
        </svg>
      </div>

      {label && <span className={styles.label}>{label}</span>}
    </label>
  );
}

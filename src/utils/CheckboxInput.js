import React from "react";

import styles from "../components/Filter/style.module.css";

export default function CheckboxInput({
  name,
  value,
  handleChange,
  checked,
  children,
}) {
  return (
    <label className={styles.container}>
      <input
        type="checkbox"
        name={name}
        value={value}
        onChange={handleChange}
        checked={checked}
      />

      <span className={styles.checkmark}></span>
      <span className={styles.name}>{children}</span>
    </label>
  );
}

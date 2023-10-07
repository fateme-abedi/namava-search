import React from "react";

import styles from "../components/Filter/style.module.css";

export default function CheckboxInput({
  names,
  handleChange,
  checked,
  index,
  type,
  children,
}) {
  return (
    <label className={styles.container}>
      <input
        type="checkbox"
        name={names[+index]}
        onChange={handleChange}
        checked={checked[type]}
      />
      <span className={styles.checkmark}></span>
      <span className={styles.name}>{children}</span>
    </label>
  );
}

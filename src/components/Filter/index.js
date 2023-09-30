import React, { useState } from "react";
import styles from "./style.module.css";

export default function Filter({ handleChange, checked, name }) {
  return (
    <div className={styles.filter}>
      <div>
        <span className={styles.title}>فیلترها</span>
      </div>
      <div className={styles.checkbox}>
        <label className={styles.container}>
          <input
            type="checkbox"
            name={name[0]}
            onChange={handleChange}
            checked={checked.Movie}
          />
          <span className={styles.checkmark}></span>
          <span className={styles.name}>فیلم</span>
        </label>

        <label className={styles.container}>
          <input
            type="checkbox"
            name={name[1]}
            onChange={handleChange}
            checked={checked.Series}
          />
          <span className={styles.checkmark}></span>
          <span className={styles.name}>سریال</span>
        </label>
      </div>
    </div>
  );
}

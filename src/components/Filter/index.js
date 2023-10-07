import React, { useState } from "react";
import styles from "./style.module.css";
import CheckboxInput from "../../utils/CheckboxInput";

export default function Filter({ handleChange, checked, names }) {
  return (
    <div className={styles.filter}>
      <div>
        <span className={styles.title}>فیلترها</span>
      </div>
      <div className={styles.checkbox}>
        <CheckboxInput
          names={names}
          handleChange={handleChange}
          checked={checked}
          index={0}
          type={"Movie"}
          children="فیلم"
        />
        <CheckboxInput
          names={names}
          handleChange={handleChange}
          checked={checked}
          index={1}
          type={"Series"}
          children="سریال"
        />
      </div>
    </div>
  );
}

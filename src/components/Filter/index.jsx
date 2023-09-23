import React, { useState } from "react";
import styles from "./style.module.css";


export default function Filter() {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxClick = () => {
    setIsChecked(!isChecked);
  };
  return (
    <div className={styles.filter}>
      <div>
        <span className={styles.title}>فیلترها</span>
      </div>
      <div className={styles.checkbox}>
        <input value="فیلم" type="checkbox" />
        <span className={styles.value}>
          <img src='./assets/Rectangle.png'/>
        </span>
        <span className={styles.inputTitle}> فیلم </span>
        <input value="سریال" type="checkbox" />
        <span className={styles.value}>
          <img src='./assets/Rectangle.png'/>
        </span>
        <span className={styles.inputTitle} > سریال </span>
      </div>

    </div>
  );
}

import React, { useState } from "react";
import styles from "./style.module.css";

export default function RootContent() {
  return (
    <div className={styles.root}>
      <img src="./assets/Not Found.png" />
      <p className={styles.desc}>موردی یافت نشد</p>
    </div>
  );
}

import React, { useState } from "react";
import styles from "./style.module.css";

export default function RootContent({ imgSrc, description }) {
  return (
    <div className={styles.root}>
      <img src={imgSrc} alt={description} />
      <p className={styles.desc}>{description}</p>
    </div>
  );
}

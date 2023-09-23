import React, { useState } from "react";
import styles from "./style.module.css";


export default function RootContent() {
  return (
    <div className={styles.root}>
        <img src='./assets/Empty State.png'/>
        <p className={styles.desc}>عنوان فیلم، سریال یا بازیگر مورد نظر خود را جستجو کنید و یا از طریق فیلتر‌های موجود، فیلم و سریال مورد علاقه خود را پیدا کنید.</p>
    </div>
  )
}
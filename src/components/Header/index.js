import React from "react";
import styles from "./style.module.css";

export default function Header() {
  return (
    <header className={styles.header} dir="rtl">
      <div>
        <span>
          <img src="./assets/Logo.jpeg" alt="namava logo" />
        </span>
        <nav className={styles.nav}>
          <span>
            <a href="#">خانه</a>
          </span>
          <span>
            <a href="#">فیلم ها</a>
          </span>
          <span>
            <a href="#">سریال ها</a>
          </span>
          <span>
            <a href="#">دسته بندی</a>
          </span>
          <span>
            <a href="#">تازه ها</a>
          </span>
          <span>
            <a href="#">کودکان</a>
          </span>
          <span>
            <a href="#">پردیس نماوا</a>
          </span>
          <span>
            <a href="#">نماوا مگ</a>
          </span>
        </nav>
      </div>
      <div>
        <a href="#">
          <img src="./assets/search.png" alt="search" />
        </a>
        <a href="#">
          <img src="./assets/message.png" alt="message" />
        </a>
        <a href="#">
          <img src="./assets/ellipse.png" alt="ellipse" />
        </a>
      </div>
    </header>
  );
}

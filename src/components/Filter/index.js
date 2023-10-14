import React, { useState } from "react";
import styles from "./style.module.css";
import CheckboxInput from "../../utils/CheckboxInput";

export default function Filter({ handleChange, type }) {
  const checkboxes = [
    { name: "Movie", children: "فیلم", checked: type.includes("Movie") },
    { name: "ُSeries", children: "سریال", checked: type.includes("Series") },
  ];

  return (
    <div className={styles.filter}>
      <div>
        <span className={styles.title}>فیلترها</span>
      </div>
      <div className={styles.checkbox}>
        <CheckboxInput
          name="Movie"
          value="movie"
          handleChange={handleChange}
          checked={type.includes("movie")}
          children="فیلم"
        />
        <CheckboxInput
          name="Series"
          value="series"
          handleChange={handleChange}
          checked={type.includes("series")}
          children="سریال"
        />
      </div>
    </div>
  );
}

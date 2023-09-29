import React, { useState } from "react";
import styles from "./style.module.css";


export default function Card({src,movieName}) {
  return (
    <div className={styles.card} >
        <a href='#' target='_blank'>
            <div className={styles.cardImg}>
               <img src={src} alt={movieName}/>
            </div>
            <div className={styles.title}>
               {movieName}
            </div>

        </a>
    </div>

  )
}
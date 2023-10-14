import React, { useState, useEffect } from "react";
import styles from "./style.module.css";
import fetchBriefData from "../../services/fetchMovieBriefData";

export default function Card({ id, src, movieName, type, url }) {
  const persianType = type === "Series" ? "سریال" : "فیلم";
  const [briefData, setBriefData] = useState({});

  const fetchData = async () => {
    const movieData = await fetchBriefData(id);
    setBriefData(movieData);
  };
  useEffect(() => {
    fetchData();
  }, []);

  const cardHandler = () => {
    window.open(url, "_blank");
  };
  return (
    <div className={styles.container} onClick={cardHandler}>
      <div className={styles.card}>
        <a href="#" target="_blank">
          <div className={styles.cardImg}>
            <img src={src} alt={movieName} />
          </div>
          <div className={styles.card_info}>
            <div>
              <span>
                <span>{persianType}</span>- <span>{briefData.year}</span>
              </span>
              <span className={styles.hit}>
                <span className={styles.like}>
                  <img src="./assets/heart.png" />
                </span>
                {briefData.hit}%{" "}
              </span>
              {briefData.imdb && (
                <span>
                  {briefData.imdb}
                  <span className={styles.imdb}>IMDb</span>
                </span>
              )}
              {briefData.hasPersianSubtitle ? (
                <span className={styles.hit}>
                  <span className={styles.like}>
                    <img src="./assets/subtitle.png" />
                  </span>
                  زیرنویس
                </span>
              ) : (
                <span className={styles.hit}>
                  <span className={styles.like}>
                    <img src="./assets/microphone.png" />
                  </span>
                  دوبله نماوا
                </span>
              )}
            </div>
          </div>
        </a>
      </div>
      <div className={styles.title}>{movieName}</div>
    </div>
  );
}

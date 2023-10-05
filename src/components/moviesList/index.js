import React, { useState, useEffect } from "react";
import styles from "./style.module.css";
import MovieCard from "../MovieCard/index.js";

export default function Container({ movies }) {
  return (
      <div className={styles.movieList}>
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            src={movie.image_url}
            movieName={movie.name}
          />
        ))}
      </div>
  );
}

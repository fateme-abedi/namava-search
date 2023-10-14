import React, { useState, useEffect } from "react";
import styles from "./style.module.css";
import Filter from "../Filter/index.js";
import Searchbar from "../Searchbar/index.js";

import fetchData from "../../services/fetchMoviesData";
import ResultSearch from "../ResultSearch";

export default function Container() {
  const [searchQuery, setSearchQuery] = useState("");
  const [movieType, setMovieType] = useState([]);

  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

  const fetchMovies = async () => {
    const movieData = await fetchData(movieType, page, searchQuery);
    setMovies((prevMovies) => [...prevMovies, ...movieData]);
  };

  useEffect(() => {
    fetchMovies();
  }, [page]);

  useEffect(() => {
    setMovies([]);
    setPage(1);
    fetchMovies();
  }, [searchQuery]);

  useEffect(() => {
    setMovies([]);
    setPage(1);
    fetchMovies();
  }, [movieType]);

  function handleScroll() {
    if (
      window.innerHeight + window.scrollY >=
      document.documentElement.offsetHeight
    ) {
      setPage((prevPage) => prevPage + 1);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleTypeChange = (e) => {
    const { value, checked } = e.target;

    if (checked) {
      setMovieType((prevTypes) => [...prevTypes, value]);
    } else {
      setMovieType((prevTypes) => prevTypes.filter((type) => type !== value));
    }
  };

  console.log("mov: " + movies);
  return (
    <section className={styles.container}>
      <div className={styles.search}>
        <Filter handleChange={handleTypeChange} type={movieType} />
        <div className={styles.content}>
          <Searchbar
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
          <ResultSearch searchQuery={searchQuery} movies={movies} />
        </div>
      </div>
    </section>
  );
}

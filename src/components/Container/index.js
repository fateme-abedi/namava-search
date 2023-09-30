import React, { useState, useEffect } from "react";
import styles from "./style.module.css";
import Filter from "../Filter/index.js";
import Searchbar from "../Searchbar/index.js";
import RootContent from "../../pages/RootContent/index.js";
import ResultFrame from "../ResultFrame/index.js";
import fetchData from "../../services/api";

export default function Container() {
  const [searchQuery, setSearchQuery] = useState("");
  const [typeFilter, setTypeFilter] = useState({
    Movie: false,
    Series: false,
  });
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const checkboxNames = ["Movie", "Series"];

  const fetchMovies = async () => {
    const movieData = await fetchData(page, searchQuery);
    setMovies((prevMovies) => [...prevMovies, ...movieData]);
    setLoading(false);
    console.log("movies:" + movieData);
  };

  useEffect(() => {
    fetchMovies();
  }, [page]);

  useEffect(() => {
    setMovies([]);
    setPage(1);
    fetchMovies();
  }, [searchQuery]);

  function handleScroll(e) {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollTop =
      Math.ceil(document.documentElement.scrollTop) ||
      Math.ceil(document.body.scrollTop);
    if (Math.ceil(scrollTop + windowHeight) === documentHeight) {
      setPage((prevPage) => prevPage + 1);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleChange = (e) => {
    const { name } = e.target;
    setTypeFilter((prevState) => {
      return {
        ...prevState,
        [name]: !prevState[name],
      };
    });
  };

  const filteredMovies = movies.filter(
    (movie) =>
      (typeFilter.Movie && movie.type === "Movie") ||
      (typeFilter.Series && movie.type === "Series")
  );

  return (
    <section className={styles.container}>
      <div className={styles.search}>
        <Filter
          handleChange={handleChange}
          checked={typeFilter}
          name={checkboxNames}
        />
        <div className={styles.content}>
          <Searchbar setSearchQuery={setSearchQuery} />
          {searchQuery ? (
            <ResultFrame
              query={searchQuery}
              movies={filteredMovies.length === 0 ? movies : filteredMovies}
            />
          ) : (
            <RootContent
              imgSrc={`./assets/Empty State.png`}
              description={`عنوان فیلم، سریال یا بازیگر مورد نظر خود را جستجو کنید و یا از طریق فیلتر‌های موجود، فیلم و سریال مورد علاقه خود را پیدا کنید.`}
            />
          )}
          {searchQuery && movies.length === 0 ? (
            <RootContent
              img
              src={`./assets/Not Found.png`}
              description={`موردی یافت نشد`}
            />
          ) : (
            ""
          )}
        </div>
      </div>
    </section>
  );
}

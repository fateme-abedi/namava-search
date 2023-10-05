import React, { useState, useEffect } from "react";
import styles from "./style.module.css";
import Filter from "../Filter/index.js";
import Searchbar from "../Searchbar/index.js";
import RootContent from "../EmptyState/index.js";
import ResultFrame from "../moviesList/index.js";
import fetchData from "../../services/fetchMovieData";

export default function Container() {
  const [searchQuery, setSearchQuery] = useState("");
  const [typeFilter, setTypeFilter] = useState({
    Movie: false,
    Series: false,
  });
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

  const checkboxNames = ["Movie", "Series"];

  const fetchMovies = async () => {
    const movieData = await fetchData(page, searchQuery);
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
          names={checkboxNames}
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
              imgSrc={"./assets/Empty State.png"}
              description={`عنوان فیلم، سریال یا بازیگر مورد نظر خود را جستجو کنید و یا از طریق فیلتر‌های موجود، فیلم و سریال مورد علاقه خود را پیدا کنید.`}
            />
          )}
          {searchQuery && movies.length === 0 && (
            <RootContent
              imgSrc={"./assets/Not Found.png"}
              description={`موردی یافت نشد`}
            />
          )}
        </div>
      </div>
    </section>
  );
}

import React from "react";
import EmptyState from "../EmptyState/index.js";
import MoviesList from "../MoviesList/index.js";
export default function ResultSearch({ searchQuery, movies, filteredMovies }) {
  return (
    <>
      {searchQuery ? (
        <MoviesList
          query={searchQuery}
          movies={filteredMovies.length === 0 ? movies : filteredMovies}
        />
      ) : (
        <EmptyState
          imgSrc={"./assets/empty_state.png"}
          description={`عنوان فیلم، سریال یا بازیگر مورد نظر خود را جستجو کنید و یا از طریق فیلتر‌های موجود، فیلم و سریال مورد علاقه خود را پیدا کنید.`}
        />
      )}
      {searchQuery && movies.length === 0 && (
        <EmptyState
          imgSrc={"./assets/not_found.png"}
          description={`موردی یافت نشد`}
        />
      )}
    </>
  );
}

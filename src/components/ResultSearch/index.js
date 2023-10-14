import React from "react";
import EmptyState from "../EmptyState/index.js";
import MoviesList from "../MoviesList/index.js";
export default function ResultSearch({ searchQuery, movies }) {
  return (
    <>
      {searchQuery ? (
        <MoviesList movies={movies} />
      ) : (
        <EmptyState
          imgSrc={"./assets/empty_state.png"}
          description={`عنوان فیلم، سریال یا بازیگر مورد نظر خود را جستجو کنید و یا از طریق فیلتر‌های موجود، فیلم و سریال مورد علاقه خود را پیدا کنید.`}
        />
      )}
      {/* {searchQuery && movies.length === 0 && (
        <EmptyState
          imgSrc={"./assets/not_found.png"}
          description={`موردی یافت نشد`}
        />
      )} */}
    </>
  );
}

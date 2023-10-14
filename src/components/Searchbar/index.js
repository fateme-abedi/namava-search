import React, { useState } from "react";
import styles from "./style.module.css";

export default function SearchBar({ searchQuery, setSearchQuery }) {
  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleDeleteInput = () => {
    setSearchQuery("");
  };

  return (
    <div className={styles.searchbar}>
      <span>
        <img
          src="./assets/search.png"
          alt="search"
          className={styles.searchIcon}
        />
      </span>
      <input
        type="text"
        value={searchQuery}
        onChange={handleInputChange}
        placeholder="فیلم، سریال، بازیگر و ژانر"
      />
      {searchQuery && (
        <span onClick={handleDeleteInput}>
          <img
            src="./assets/cross.png"
            alt="delete"
            className={styles.deleteIcon}
          />
        </span>
      )}
    </div>
  );
}

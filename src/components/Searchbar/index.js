import React, { useState } from "react";
import styles from "./style.module.css";

export default function SearchBar({ setSearchQuery }) {
  const [query, setQuery] = useState("");
  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
    setQuery(event.target.value);
  };
  const handleDeleteInput = () => {
    setQuery("");
    setSearchQuery("");
  };

  return (
    <div className={styles.searchbar}>
      <span>
        <img
          src="./assets/Search.png"
          alt="search"
          className={styles.searchIcon}
        />
      </span>
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="فیلم، سریال، بازیگر و ژانر"
      />
      {query ? (
        <span onClick={handleDeleteInput}>
          <img
            src="./assets/cross.png"
            alt="delete"
            className={styles.deleteIcon}
          />
        </span>
      ) : (
        ""
      )}
    </div>
  );
}

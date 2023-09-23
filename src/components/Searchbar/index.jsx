import React, {useState} from "react";
import styles from "./style.module.css";



export default function SearchBar(){
    
    return (
    <div className={styles.searchbar}>
        <span>
           <img src="./assets/Search.png" alt='search' className={styles.searchIcon} />  
        </span>
        <input type='text'  placeholder="فیلم، سریال، بازیگر و ژانر" />
    </div>
    )


}
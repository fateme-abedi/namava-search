import React, {useState} from "react";
import styles from "./style.module.css";



export default function SearchBar({setSearchQuery}){
    const handleInputChange=(event)=>{
        setSearchQuery(event.target.value);
    }

    return (
    <div className={styles.searchbar}>
        <span>
           <img src="./assets/Search.png" alt='search' className={styles.searchIcon} />  
        </span>
        <input type='text' onChange={handleInputChange}  placeholder="فیلم، سریال، بازیگر و ژانر" />
    </div>
    )


}
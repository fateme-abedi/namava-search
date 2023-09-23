import React, {useState} from "react";
import styles from "./style.module.css";
import Filter from "../../components/Filter/index.jsx";
import Searchbar from "../../components/Searchbar/index.jsx";
import RootContent from "../../components/RootContent/index.jsx";

export default function Container() {
  const [searchQuery, setSearchQuery] =useState('')
  console.log(searchQuery);

  return (
    <section className={styles.container}> 
      <div className={styles.search}>
        <Filter/>
        <div className={styles.content}>
        <Searchbar setSearchQuery={setSearchQuery}/>
        <RootContent/>

        </div>
      </div>
    </section>
  )
}

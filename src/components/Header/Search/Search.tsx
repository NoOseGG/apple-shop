import React, { FormEvent } from "react";

import styles from "./Search.module.css";
import iconSearch from "../../../assets/header/icon-search.svg";

const Search: React.FC = () => {
  const handleSubmit = (event: FormEvent<HTMLElement>) => {
    event.preventDefault();
  };

  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      <button type="submit">
        <img className={styles.icon} src={iconSearch} alt="search" />
      </button>
      <input className={styles.input} type="text" placeholder="Search" />
    </form>
  );
};

export default Search;

import React from "react";

import styles from "./CategoriesList.module.css";
import { dataCategoriesList } from "./data/data";
import Item from "./Item/Item";

const CategoriesList: React.FC = () => {
  return (
    <ul className={styles.categoriesList}>
      {dataCategoriesList.map((item, index) => (
        <Item icon={item.icon} name={item.name} key={index} />
      ))}
    </ul>
  );
};

export default CategoriesList;

import React from "react";

import styles from "./Item.module.css";

type Props = {
  icon: string;
  name: string;
};

const Item: React.FC<Props> = ({ icon, name }) => {
  return (
    <li className={styles.item}>
      <img className={styles.item__icon} src={icon} alt={name} />
      <div className={styles.item__name}>{name}</div>
    </li>
  );
};

export default Item;

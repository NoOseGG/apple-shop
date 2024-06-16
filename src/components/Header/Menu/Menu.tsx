import React from "react";

import styles from "./Menu.module.css";

const Menu: React.FC = () => {
  return (
    <ul className={styles.menu}>
      <li className={styles.item}>
        <a className={styles.link} href="">
          Home
        </a>
      </li>
      <li className={styles.item}>
        <a className={styles.link} href="">
          About
        </a>
      </li>
      <li className={styles.item}>
        <a className={styles.link} href="">
          Contact Us
        </a>
      </li>
      <li className={styles.item}>
        <a className={styles.link} href="">
          Blog
        </a>
      </li>
    </ul>
  );
};

export default Menu;

import React, { useState } from "react";

import styles from "./TitleTabs.module.css";
import { Tabs } from "../Products";

type Props = {
  tab: Tabs;
  handleClick: (tab: Tabs) => void;
};

const TitleTabs: React.FC<Props> = ({ tab, handleClick }) => {
  return (
    <div className={styles.tabs}>
      <button
        className={`${styles.tabs__btn} ${
          tab === Tabs.Arival && styles.active
        }  `}
        onClick={() => handleClick(Tabs.Arival)}
      >
        New Arrival
      </button>
      <button
        className={`${styles.tabs__btn} ${
          tab === Tabs.Bestseller && styles.active
        }`}
        onClick={() => handleClick(Tabs.Bestseller)}
      >
        Bestseller
      </button>
      <button
        className={`${styles.tabs__btn} ${
          tab === Tabs.Featured && styles.active
        }`}
        onClick={() => handleClick(Tabs.Featured)}
      >
        Featured Products
      </button>
    </div>
  );
};

export default TitleTabs;

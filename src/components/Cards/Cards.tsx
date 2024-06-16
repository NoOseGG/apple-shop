import React from "react";

import styles from "./Cards.module.css";

import ShopNow, { ButtonColor } from "../Buttons/ShopNow/ShopNow";
import watch from "../../assets/cards/watches.png";
import ipad from "../../assets/cards/ipad.png";
import samsung from "../../assets/cards/samsung.png";
import mac from "../../assets/cards/mac.png";

const Cards: React.FC = () => {
  return (
    <div className={styles.cards}>
      <div className={styles.card}>
        <img className={styles.image} src={watch} alt="watch" />
        <div className={styles.card__inner}>
          <div className={`${styles.name} ${styles["text-black"]}`}>
            Popular Products
          </div>
          <span className={styles.description}>
            iPad combines a magnificent 10.2-inch Retina display, incredible
            performance, multitasking and ease of use.
          </span>
          <ShopNow />
        </div>
      </div>
      <div className={`${styles.card} ${styles["bg-light-grey"]}`}>
        <img className={styles.image} src={ipad} alt="ipad" />
        <div className={styles.card__inner}>
          <div className={`${styles.name} ${styles["text-black"]}`}>
            Ipad Pro
          </div>
          <span className={styles.description}>
            iPad combines a magnificent 10.2-inch Retina display, incredible
            performance, multitasking and ease of use.
          </span>
          <ShopNow />
        </div>
      </div>
      <div className={`${styles.card} ${styles["bg-grey"]}`}>
        <img className={styles.image} src={samsung} alt="samsung" />
        <div className={styles.card__inner}>
          <div className={`${styles.name} ${styles["text-black"]}`}>
            Samsung Galaxy
          </div>
          <span className={styles.description}>
            iPad combines a magnificent 10.2-inch Retina display, incredible
            performance, multitasking and ease of use.
          </span>
          <ShopNow />
        </div>
      </div>
      <div className={`${styles.card} ${styles["bg-dark-grey"]}`}>
        <img className={styles.image} src={mac} alt="mac" />
        <div className={styles.card__inner}>
          <div className={`${styles.name} ${styles["text-white"]}`}>
            Macbook Pro
          </div>
          <span className={styles.description}>
            iPad combines a magnificent 10.2-inch Retina display, incredible
            performance, multitasking and ease of use.
          </span>
          <ShopNow color={ButtonColor.White} />
        </div>
      </div>
    </div>
  );
};

export default Cards;

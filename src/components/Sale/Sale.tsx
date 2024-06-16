import React from "react";

import styles from "./Sale.module.css";
import ShopNow, { ButtonColor } from "../Buttons/ShopNow/ShopNow";

import one from "../../assets/sale/1.png";
import two from "../../assets/sale/2.png";
import three from "../../assets/sale/3.png";
import four from "../../assets/sale/4.png";
import five from "../../assets/sale/5.png";

const Sale: React.FC = () => {
  return (
    <div className={styles.sale}>
      <div className={styles.sale__title}>
        Big Summer <span className={styles["text-bold"]}>Sale</span>
      </div>
      <div className={styles.sale__subtitle}>
        Commodo fames vitae vitae leo mauris in. Eu consequat.
      </div>
      <ShopNow color={ButtonColor.White} />
      <img className={styles.image__one} src={one} alt="image" />
      <img className={styles.image__two} src={two} alt="image" />
      <img className={styles.image__three} src={three} alt="image" />
      <img className={styles.image__four} src={four} alt="image" />
      <img className={styles.image__five} src={five} alt="image" />
    </div>
  );
};

export default Sale;

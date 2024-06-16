import React from "react";

import styles from "./Info.module.css";

const Info: React.FC = () => {
  return (
    <div className={styles.info}>
      <span className={styles.topText}>Pro.Beyond.</span>
      <h1 className={styles.title}>
        IPhone 14 <span className={styles.bold}>Pro</span>
      </h1>
      <span className={styles.bottomText}>
        Created to change everything for the better. For everyone
      </span>
      <button className={styles.btn}>Shop Now</button>
    </div>
  );
};

export default Info;

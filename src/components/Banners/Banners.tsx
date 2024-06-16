import React from "react";

import styles from "./Banners.module.css";
import ps5 from "../../assets/banners/ps5.png";
import mac from "../../assets/banners/mac.png";
import headphone from "../../assets/banners/headphone.png";
import vision from "../../assets/banners/vision.png";
import ShopNow from "../Buttons/ShopNow/ShopNow";

const Banners: React.FC = () => {
  return (
    <div className={styles.banners}>
      <div className={styles.item__ps}>
        <img src={ps5} alt="ps5" />
        <div>
          <h3>Playstation 5</h3>
          <p>
            Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O will
            redefine your PlayStation experience.
          </p>
        </div>
      </div>

      <div className={styles.item__mac}>
        <div className={styles.info}>
          <h3 className={styles.title}>
            Macbook <span className={styles.medium}>Air</span>
          </h3>
          <p className={styles.text}>
            The new 15‑inch MacBook Air makes room for more of what you love
            with a spacious Liquid Retina display.
          </p>
          <ShopNow />
        </div>
        <img className={styles.image} src={mac} alt="ps5" />
      </div>

      <div className={styles.item__headphones}>
        <img src={headphone} alt="ps5" />
        <div>
          <h3>
            Apple AirPods <span className={styles.medium}>Max</span>
          </h3>
          <p>Computational audio. Listen, it's powerful</p>
        </div>
      </div>

      <div className={styles.item__vision}>
        <img src={vision} alt="ps5" />
        <div>
          <h3>
            Apple Vision <span className={styles.medium}>Pro</span>
          </h3>
          <p>An immersive way to experience entertainment</p>
        </div>
      </div>
    </div>
  );
};

export default Banners;

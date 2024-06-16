import React from "react";

import styles from "./Hero.module.css";
import Container from "../Container/Container";
import Info from "./Info/Info";
import ImagePhone from "./ImagePhone/ImagePhone";

const Hero: React.FC = () => {
  return (
    <section className={styles.hero}>
      <Container>
        <div className={styles.hero__inner}>
          <Info />
          <ImagePhone />
        </div>
      </Container>
    </section>
  );
};

export default Hero;

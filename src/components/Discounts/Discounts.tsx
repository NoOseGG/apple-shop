import React from "react";

import styles from "./Discounts.module.css";
import Container from "../Container/Container";
import ProductsList from "../Products/ProductsList/ProductsList";
import { Tabs } from "../Products/Products";

const Discounts: React.FC = () => {
  return (
    <div className={styles.discounts}>
      <Container>
        <div className={styles.discounts__inner}>
          <div className={styles.discount__title}>Discounts up to -50%</div>
          <ProductsList tab={Tabs.Discount} />
        </div>
      </Container>
    </div>
  );
};

export default Discounts;

import React, { useEffect, useState } from "react";

import styles from "./Products.module.css";

import Container from "../Container/Container";
import ProductsList from "./ProductsList/ProductsList";
import TitleTabs from "./TitleTabs/TitleTabs";

export enum Tabs {
  Arival,
  Bestseller,
  Featured,
  Discount,
}

const Products: React.FC = () => {
  const [tab, setTab] = useState<Tabs>(Tabs.Arival);

  useEffect(() => {
    console.log(tab);
  }, [tab]);

  return (
    <div className={styles.products}>
      <Container>
        <div className={styles.products__inner}>
          <TitleTabs tab={tab} handleClick={setTab} />
          <ProductsList tab={tab}/>
        </div>
      </Container>
    </div>
  );
};

export default Products;

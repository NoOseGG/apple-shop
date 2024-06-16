import React, { useEffect, useState } from "react";

import styles from "./ProductsList.module.css";
import { dataProductList, getDataProductList } from "./data/data";
import Item from "./Item/Item";
import { Tabs } from "../Products";

type Props = {
  tab: Tabs;
};

const ProductsList: React.FC<Props> = ({ tab }) => {
  const [data, setData] = useState(() => getDataProductList(tab));

  useEffect(() => {
    setData(getDataProductList(tab));
  }, [tab]);

  return (
    <ul className={styles.productList}>
      {data.map((item, index) => (
        <Item
          isFavourite={item.isFavourite}
          image={item.image}
          name={item.name}
          price={item.price}
          key={index}
        />
      ))}
    </ul>
  );
};

export default ProductsList;

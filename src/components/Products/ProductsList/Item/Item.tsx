import React from "react";

import styles from "./Item.module.css";

type Props = {
  isFavourite: boolean;
  image: string;
  name: string;
  price: number;
};

const Item: React.FC<Props> = ({ image, name, price }) => {
  return (
    <li className={styles.item}>
      <svg
        className={styles.favourite}
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5.93415 18.5443L15.3152 27.3569C15.6397 27.6616 15.8019 27.814 15.9999 27.814C16.1979 27.814 16.3602 27.6616 16.6846 27.3569L26.0657 18.5443C28.6739 16.0942 28.9907 12.0622 26.797 9.2348L26.3845 8.70316C23.7603 5.32081 18.4928 5.88806 16.6488 9.75157C16.3883 10.2973 15.6115 10.2973 15.351 9.75157C13.5071 5.88806 8.23955 5.32081 5.61531 8.70316L5.20284 9.2348C3.00918 12.0622 3.32592 16.0942 5.93415 18.5443Z"
          stroke="#919191"
          stroke-opacity="0.77"
          stroke-width="1.4"
        />
      </svg>
      <img className={styles.image} src={image} alt="product" />
      <div className={styles.name}>{name}</div>
      <span className={styles.price}>${price}</span>
      <button className={styles.btn}>Buy Now</button>
    </li>
  );
};

export default Item;

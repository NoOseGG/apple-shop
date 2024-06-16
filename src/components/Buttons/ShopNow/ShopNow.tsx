import React from "react";

import styles from "./ShopNow.module.css";

export enum ButtonColor {
  White,
  Black,
}

type Props = {
  color?: ButtonColor;
};

const ShopNow: React.FC<Props> = ({ color = ButtonColor.Black }) => {
  return (
    <button className={color === ButtonColor.Black ? styles.btn : styles.btn__white}>
      Shop Now
    </button>
  );
};

export default ShopNow;

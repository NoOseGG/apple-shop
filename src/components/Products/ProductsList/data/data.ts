import phone from "../../../../assets/products/phone.png";
import camera from "../../../../assets/products/camera.png";
import watch from "../../../../assets/products/watch.png";
import airpod from "../../../../assets/products/airpod.png";
import samsungWatch from "../../../../assets/products/samsung-watch.png";
import galaxyPhone from "../../../../assets/products/galaxy-phone.png";
import galaxyBuds from "../../../../assets/products/galaxy-buds.png";
import ipad from "../../../../assets/products/ipad.png";
import { Tabs } from "../../Products";
import discountIphoneGold from "../../../../assets/discount/discount-iphone-gold.png";
import discountAirpods from "../../../../assets/discount/discount-airpods.png";
import discountWatch from "../../../../assets/discount/discount-watch.png";
import discountIphoneSilver from "../../../../assets/discount/discount-iphone-silver.png";

type IData = {
  isFavourite: boolean;
  image: string;
  name: string;
  price: number;
};

export const dataProductList: IData[] = [
  {
    isFavourite: false,
    image: phone,
    name: "Apple iPhone 14 Pro Max 128GB Deep Purple (MQ9T3RX/A)",
    price: 900,
  },
  {
    isFavourite: false,
    image: camera,
    name: "Blackmagic Pocket Cinema Camera 6k",
    price: 2535,
  },
  {
    isFavourite: false,
    image: watch,
    name: "Apple Watch Series 9 GPS 41mm Starlight Aluminium Case",
    price: 399,
  },
  {
    isFavourite: false,
    image: airpod,
    name: "AirPods Max Silver",
    price: 549,
  },
  {
    isFavourite: false,
    image: samsungWatch,
    name: "Samsung Galaxy Watch6 Classic 47mm Black",
    price: 369,
  },
  {
    isFavourite: false,
    image: galaxyPhone,
    name: "Galaxy Z Fold5 Unlocked | 256GB | Phantom Black",
    price: 1799,
  },
  {
    isFavourite: false,
    image: galaxyBuds,
    name: "Galaxy Buds FE Graphite",
    price: 99.99,
  },
  {
    isFavourite: false,
    image: ipad,
    name: '"Apple iPad 9 10.2" 64GB Wi-Fi Silver (MK2L3) 2021',
    price: 398,
  },
];

export const dataBestsellerList: IData[] = [
  {
    isFavourite: false,
    image: watch,
    name: "Apple Watch Series 9 GPS 41mm Starlight Aluminium Case",
    price: 399,
  },
  {
    isFavourite: false,
    image: airpod,
    name: "AirPods Max Silver",
    price: 549,
  },
  {
    isFavourite: false,
    image: samsungWatch,
    name: "Samsung Galaxy Watch6 Classic 47mm Black",
    price: 369,
  },

  {
    isFavourite: false,
    image: ipad,
    name: '"Apple iPad 9 10.2" 64GB Wi-Fi Silver (MK2L3) 2021',
    price: 398,
  },
];

export const dataFeaturedList: IData[] = [
  {
    isFavourite: false,
    image: watch,
    name: "Apple Watch Series 9 GPS 41mm Starlight Aluminium Case",
    price: 399,
  },

  {
    isFavourite: false,
    image: ipad,
    name: '"Apple iPad 9 10.2" 64GB Wi-Fi Silver (MK2L3) 2021',
    price: 398,
  },
];

export const dataDiscountList: IData[] = [
  {
    isFavourite: false,
    image: discountIphoneGold,
    name: "Apple iPhone 14 Pro 512GB Gold (MQ233)",
    price: 1437,
  },

  {
    isFavourite: false,
    image: discountAirpods,
    name: "AirPods Max Silver",
    price: 549,
  },
  {
    isFavourite: false,
    image: watch,
    name: "Apple Watch Series 9 GPS 41mm Starlight Aluminium Case",
    price: 399,
  },
  {
    isFavourite: false,
    image: discountIphoneSilver,
    name: "Apple iPhone 14 Pro 1TB Gold (MQ2V3)",
    price: 1499,
  },
];

export const getDataProductList = (tab: Tabs): IData[] => {
  switch (tab) {
    case Tabs.Arival:
      return dataProductList;
    case Tabs.Bestseller:
      return dataBestsellerList;
    case Tabs.Featured:
      return dataFeaturedList;
    case Tabs.Discount:
      return dataDiscountList;
    default:
      return dataProductList;
  }
};

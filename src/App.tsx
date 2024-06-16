import "./App.css";
import Banners from "./components/Banners/Banners";
import Cards from "./components/Cards/Cards";
import Categories from "./components/Categories/Categories";
import Discounts from "./components/Discounts/Discounts";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Products from "./components/Products/Products";
import Sale from "./components/Sale/Sale";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Banners />
      <Categories />
      <Products />
      <Cards />
      <Discounts />
      <Sale />
      <Footer />
    </>
  );
}

export default App;

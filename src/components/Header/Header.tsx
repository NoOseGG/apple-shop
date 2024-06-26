import React from "react";

import styles from "./Header.module.css";
import Container from "../Container/Container";
import Logo from "./Logo/Logo";
import Search from "./Search/Search";
import Menu from "./Menu/Menu";
import Profile from "./Profile/Profile";

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.header__inner}>
          <Logo />
          <Search />
          <Menu />
          <Profile />
        </div>
      </Container>
    </header>
  );
};

export default Header;

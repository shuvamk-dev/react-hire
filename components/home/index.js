import React from "react";
import styles from "./home.module.css";
import Header from "../header/index";
function Home() {
  return (
    <div className={styles.home}>
      <Header />
    </div>
  );
}

export default Home;

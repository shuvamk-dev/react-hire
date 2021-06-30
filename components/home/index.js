import React from "react";
import styles from "./home.module.css";
import Header from "../common/header/index";
import Separator from "../common/separator/index";
import CompanyCard from "./company-card/index";
import { Companies } from "../../data/companies";
function Home() {
  const data = Companies;
  return (
    <div className={styles.home}>
      <Header />
      <Separator />
      {data.map((company) => {
        return <CompanyCard company={company} />;
      })}
    </div>
  );
}

export default Home;

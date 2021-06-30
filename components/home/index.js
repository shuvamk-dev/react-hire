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
      <div className={styles.intro}>
        <p>
          This is a handpicked list of Indian startups that use ReactJS as their
          frontend framework. This will help you in job hunting, startup
          research etc.
        </p>
        <div className={styles.introRight}>
          Find this useful?
          <div className={styles.githubStar}>
            <i class="devicon-github-original colored"></i> Star
          </div>
        </div>
      </div>
      {data.map((company) => {
        return <CompanyCard company={company} />;
      })}
    </div>
  );
}

export default Home;

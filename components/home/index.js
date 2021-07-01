import React, { useState } from "react";
import styles from "./home.module.css";
import Header from "../common/header/index";
import Separator from "../common/separator/index";
import CompanyCard from "./company-card/index";
import { connect } from "react-redux";
import SavedCard from "./saved-card/index";
function Home(props) {
  const { list, saved } = props;
  const [isSavedOpen, setIsSavedOpen] = useState(false);
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
          <div className={styles.githubOption}>
            Find this useful?
            <a
              href="https://github.com/shuvamk/react-hire"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className={styles.githubStar}>
                <i className="devicon-github-original colored"></i> Star
              </div>
            </a>
          </div>
          <div
            className={styles.bookmarkOption}
            onClick={() => setIsSavedOpen(!isSavedOpen)}
          >
            <i className="fi-rr-bookmark"></i> Bookmarked
          </div>
        </div>
      </div>
      <div className={styles.listContainer}>
        {isSavedOpen ? (
          <div className={styles.savedListMobile}>
            <div className={styles.savedTop}>
              <label className={styles.savedTitle}>Bookmarked Startups</label>
              <div
                className={styles.closeIcon}
                onClick={() => setIsSavedOpen(!isSavedOpen)}
              >
                <i className="fi-rr-cross-circle"></i>
              </div>
            </div>
            {saved.map((company) => {
              return <SavedCard company={company} key={company.id} />;
            })}
          </div>
        ) : (
          <div className={styles.companyList}>
            {list.map((company) => {
              return <CompanyCard company={company} key={company.id} />;
            })}
          </div>
        )}
        <div className={styles.savedList}>
          <div className={styles.savedTop}>
            <label className={styles.savedTitle}>Bookmarked Startups</label>
          </div>
          {saved.map((company) => {
            return <SavedCard company={company} key={company.id} />;
          })}
        </div>
      </div>
    </div>
  );
}
const mapStateToProps = ({ react }) => {
  return {
    list: react.companyList,
    saved: react.saved,
  };
};
export default connect(mapStateToProps)(Home);

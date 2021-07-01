import React from "react";
import { connect } from "react-redux";
import { addToSave } from "../../../reduxstore/actions/react";
import styles from "./company-card.module.css";

function CompanyCard({ company, addToSave }) {
  const handleBookmark = () => {
    addToSave(company);
  };
  return (
    <div className={styles.card}>
      <div>
        <img
          src={company.logo}
          className={styles.card_logo}
          alt="company logo"
        />
        {/* <Image
          src={company.logo}
          height={80}
          width={80}
          className={styles.card_logo}
        /> */}
      </div>
      <div className={styles.info}>
        <label className={styles.name}>{company.name}</label>
        <div className={styles.location}>
          <i className="fi-rr-marker"></i>
          <label>{company.location}</label>
        </div>
      </div>
      <div className={styles.cardRight}>
        <div className={styles.options}>
          <div className={styles.bookmarkIcon} onClick={handleBookmark}>
            <i className="fi-rr-bookmark"></i>
          </div>
          <a href={company.website} target="_blank" rel="noopener noreferrer">
            <div className={styles.visit}>
              <i className="fi-rr-globe"></i>Visit
            </div>
          </a>
        </div>
        <div className={styles.domain}>{company.domain}</div>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToSave: (data) => dispatch(addToSave(data)),
  };
};
export default connect(null, mapDispatchToProps)(CompanyCard);

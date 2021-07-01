import React from "react";
import { connect } from "react-redux";
import { addToSave, deleteFromSave } from "../../../reduxstore/actions/react";
import styles from "./saved-card.module.css";

function SavedCard({ company, addToSave, saved, deleteFromSave }) {
  const isSaved = saved.includes(company);
  console.log(isSaved);
  const handleBookmark = () => {
    isSaved ? deleteFromSave(company) : addToSave(company);
  };
  return (
    <div className={styles.card}>
      <div>
        <img
          src={company.logo}
          className={styles.card_logo}
          alt="company logo"
        />
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
            {isSaved ? (
              <i className="fi-sr-bookmark"></i>
            ) : (
              <i className="fi-rr-bookmark"></i>
            )}
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

const mapStateToProps = ({ react }) => {
  return {
    saved: react.saved,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addToSave: (data) => dispatch(addToSave(data)),
    deleteFromSave: (data) => dispatch(deleteFromSave(data)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SavedCard);

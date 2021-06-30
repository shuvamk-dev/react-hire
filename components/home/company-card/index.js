import React from "react";
import styles from "./company-card.module.css";
function CompanyCard({ company }) {
  return (
    <div className={styles.card}>
      <div>
        <img src={company.logo} className={styles.card_logo} />
      </div>
      <div className={styles.info}>
        <label className={styles.name}>{company.name}</label>
        <div className={styles.location}>
          <i class="fi-rr-marker"></i>
          <label>{company.location}</label>
        </div>
      </div>
      <div className={styles.cardRight}>
        <div>Visit</div>
        <div className={styles.domain}>{company.domain}</div>
      </div>
    </div>
  );
}

export default CompanyCard;

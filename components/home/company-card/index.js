import React from "react";
import styles from "./company-card.module.css";
// import Image from "next/image";
function CompanyCard({ company }) {
  return (
    <div className={styles.card}>
      <div>
        <img src={company.logo} className={styles.card_logo} />
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
        <a href={company.website} target="_blank" rel="noopener noreferrer">
          <div className={styles.visit}>
            <i className="fi-rr-globe"></i>Visit
          </div>
        </a>
        <div className={styles.domain}>{company.domain}</div>
      </div>
    </div>
  );
}

export default CompanyCard;

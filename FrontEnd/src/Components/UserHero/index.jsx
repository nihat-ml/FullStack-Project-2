import React from "react";
import styles from "./style.module.css"; // CSS modulunu import edin

function UserHero() {
  return (
    <div className={styles.heroSection}>
      <div className={styles.heroContent}>
        <span className={styles.subHeading}>COMMITTED TO SUCCESS</span>
        <h1 className={styles.mainHeading}>We help to grow your business</h1>
        <p className={styles.description}>
          Mollit anim laborum. Dvcuis aute serunt iruxvfg dhjkolor indd re voluptate velit esscillumlore eu quife nrulla parihatur.
        </p>
        <button className={styles.heroButton}>OUR SERVICES</button>
      </div>
      <div className={styles.heroImage}>
        <img src="/path-to-your-image.jpg" alt="Businessman" />
      </div>
      <div className={styles.navigationArrows}>
        <button className={styles.arrowButton}>&lt;</button>
        <button className={styles.arrowButton}>&gt;</button>
      </div>
    </div>
  );
}

export default UserHero;

import React from "react";
import styles from "./style.module.css";

function UserHero() {
  return (
    <div className={styles.heroSection}>
      <div className={styles.heroContent}>
        <p className={styles.subtitle}>COMMITTED TO SUCCESS</p>
        <h1 className={styles.title}>We help to grow your business</h1>
        <p className={styles.description}>
          Mollit anim laborum. Dvcuis aute serunt iruxvfg dhjkolor indd re
          voluptate velit esscillumlore eu quife nrulla parihatur.
        </p>
        <button className={styles.heroButton}>OUR SERVICES</button>
      </div>
      <div className={styles.heroImage}>
        <img
          src="/path-to-your-image.jpg"
          alt="Hero"
          className={styles.image}
        />
      </div>
      <div className={styles.arrowButtons}>
        <button className={styles.arrowButton}>{"<"}</button>
        <button className={styles.arrowButton}>{">"}</button>
      </div>
    </div>
  );
}

export default UserHero;


import React from 'react';
import styles from './style.module.css';

function UserBestServices() {
  return (
    <section className={styles.bestServicesSection}>
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <img
            src="https://preview.colorlib.com/theme/consultingbiz/assets/img/gallery/about.png"
            alt="Two people working on a laptop"
            className={styles.image}
          />
        </div>
        <div className={styles.contentContainer}>
          <h4 className={styles.subTitle}>OUR TOP SERVICES</h4>
          <h2 className={styles.mainTitle}>Our Best Services</h2>
          <p className={styles.description}>
            Mollit anim laborum duis adseu dolor iuyn voluptcate velit ess
            cillum dolore egru loffre dsu quality mollit anim labourumuis au
            dolor in voluptate velit cillu.
          </p>
          <p className={styles.description}>
            Mollit anim laborum.Dvcuis aute serunt iruxvfg dhjkolohre indd re
            voluptate velit esscillumlore eu quife nrulla pariatur. Excghecpteur
            sfwfsignjnt occa cupidatat non aute iruxvfg dhjinulpadeserunt moll.
          </p>
          <button className={styles.moreButton}>MORE ABOUT US</button>
        </div>
      </div>
    </section>
  );
}

export default UserBestServices;

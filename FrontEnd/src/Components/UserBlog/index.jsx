import React from 'react';
import styles from './style.module.css';
import { FaChartLine, FaClipboardList, FaHandshake } from 'react-icons/fa';

function UserBlog() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Our Best Services</h2>
      <div className={styles.cards}>
        <div className={`${styles.card} ${styles.activeCard}`}>
          <FaChartLine className={styles.icon} />
          <h3 className={styles.cardTitle}>Strategy Planning</h3>
          <p className={styles.cardDescription}>
            There are many variations of passages of lorem Ipsum available but the new majority have suffered.
          </p>
        </div>
        <div className={styles.card}>
          <FaClipboardList className={styles.icon} />
          <h3 className={styles.cardTitle}>Insurance Service</h3>
          <p className={styles.cardDescription}>
            There are many variations of passages of lorem Ipsum available but the new majority have suffered.
          </p>
        </div>
        <div className={styles.card}>
          <FaHandshake className={styles.icon} />
          <h3 className={styles.cardTitle}>Audit & Evaluation</h3>
          <p className={styles.cardDescription}>
            There are many variations of passages of lorem Ipsum available but the new majority have suffered.
          </p>
        </div>
      </div>
    </div>
  );
}

export default UserBlog;


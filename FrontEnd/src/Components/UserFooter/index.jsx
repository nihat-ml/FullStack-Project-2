import React from "react";
import styles from "./style.module.css";

function UserFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.copyright}>
          Copyright ©2025 All rights reserved | This template is made with{" "}
          <span className={styles.heart}>❤️</span> by{" "}
          <a
            href="https://colorlib.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            Colorlib
          </a>
        </p>
        <div className={styles.socialIcons}>
          <a href="#" className={styles.icon}>
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className={styles.icon}>
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#" className={styles.icon}>
            <i className="fas fa-globe"></i>
          </a>
          <a href="#" className={styles.icon}>
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default UserFooter;

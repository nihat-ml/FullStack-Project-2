import React from "react";
import { FaHeart } from "react-icons/fa"; 
import styles from "./style.module.css"; 


function TopNavbar() {
  return (
    <div className={styles.topNavbar}>
      <div className={styles.topNavbarContent}>
        <span>MON - SAT: 6.00 AM - 10.00 PM</span>
        <span>SUN: CLOSED</span>
      </div>
    </div>
  );
}


function MainNavbar() {
  return (
    <div className={styles.mainNavbar}>
     
      <div>
        <img
          src="https://preview.colorlib.com/theme/consultingbiz/assets/img/logo/logo.png"
          alt="Logo"
          className={styles.logo}
        />
      </div>
      <div className={styles.navLinks}>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#blog">Blog</a>
        <a href="#contact">Contact</a>
      </div>
      
      <div className={styles.favoriteIcon}>
        <FaHeart />
      </div>
    </div>
  );
}

function UserNavbar() {
  return (
    <div>
      <TopNavbar />
      <MainNavbar />
    </div>
  );
}

export default UserNavbar;

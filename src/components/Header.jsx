import React from 'react';
import styles from "./header.module.css";

const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <h1 className={styles.navTitle}><a href="/">Code Crafter</a></h1>
        <div className={styles.navLinks}>
          <a href="/" className={styles.navLink}>Challenges</a>
          <a href="/courses" className={styles.navLink}>Courses</a>
          <a href="/" className={styles.navLink}>Community</a>
        </div>
        <button className={styles.Button}>Join Us</button>
      </header>
    </>
  )
}

export default Header
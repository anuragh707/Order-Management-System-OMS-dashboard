import React from 'react';
import styles from './Navbar.module.css';
import { FiSearch, FiBell, FiCalendar, FiSettings } from 'react-icons/fi';

const Navbar = () => {
  return (
    <header className={styles.navbar}>
      <div className={styles.leftSection}>
        <span className={styles.brandName}>Aludecor</span>
      </div>
      <div className={styles.rightSection}>
        <button className={styles.iconBtn} aria-label="Search">
          <FiSearch />
        </button>
        <button className={styles.iconBtn} aria-label="Notifications">
          <FiBell />
          <span className={styles.badge} />
        </button>
        <button className={styles.iconBtn} aria-label="Calendar">
          <FiCalendar />
        </button>
        <button className={styles.iconBtn} aria-label="Settings">
          <FiSettings />
        </button>
        <div className={styles.profileContainer}>
          <div className={styles.avatar}>
            <span className={styles.avatarText}>AD</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

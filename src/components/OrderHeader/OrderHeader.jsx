import React from 'react';
import styles from './OrderHeader.module.css';
import { FiPrinter, FiRefreshCw, FiChevronDown, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const OrderHeader = ({ orderId, status }) => {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.leftPanel}>
        <div className={styles.breadcrumbs}>
          <span>Dashboard</span>
          <span className={styles.separator}>/</span>
          <span>Production order</span>
          <span className={styles.separator}>/</span>
          <span className={styles.inactiveBreadcrumb}>OD#-1001</span>
          <span className={styles.doubleChevron}>&gt;&gt;</span>
          <span className={styles.activeBreadcrumb}>{orderId}</span>
        </div>
        <div className={styles.titleWrapper}>
          <h1 className={styles.title}>{orderId}</h1>
          <div className={styles.statusBadge}>
            <span className={styles.statusDot} />
            {status}
          </div>
        </div>
      </div>
      <div className={styles.rightPanel}>
        <button className={styles.iconButton} title="Print">
          <FiPrinter />
        </button>
        <button className={styles.iconButton} title="Refresh">
          <FiRefreshCw />
        </button>
        <div className={styles.dropdownWrapper}>
          <button className={styles.statusDropdown}>
            <span>Status</span>
            <FiChevronDown className={styles.dropdownIcon} />
          </button>
        </div>
        <button className={styles.actionButton}>
          <span>Action</span>
          <span className={styles.plusSign}>+</span>
        </button>
        <div className={styles.pagination}>
          <button className={styles.navBtn}>
            <FiChevronLeft />
          </button>
          <button className={styles.navBtn}>
            <FiChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderHeader;

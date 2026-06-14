import React from 'react';
import styles from './OrderInformation.module.css';

const OrderInformation = ({ summaryData }) => {
  if (!summaryData) {
    return <div className={styles.loading}>Loading order summary...</div>;
  }

  return (
    <div className={styles.infoCard}>
      <div className={styles.grid}>
        <div className={styles.gridItem}>
          <label className={styles.label}>Order number</label>
          <span className={styles.value}>{summaryData.orderNumber}</span>
        </div>
        <div className={styles.gridItem}>
          <label className={styles.label}>Material</label>
          <span className={styles.value}>{summaryData.material}</span>
        </div>

        <div className={styles.gridItem}>
          <label className={styles.label}>Total quality</label>
          <span className={styles.value}>{summaryData.totalQuality}</span>
        </div>
        <div className={styles.gridItem}>
          <label className={styles.label}>Sales organisation</label>
          <span className={styles.value}>{summaryData.salesOrganization}</span>
        </div>

        <div className={styles.gridItem}>
          <label className={styles.label}>Sales Document Type</label>
          <span className={styles.value}>{summaryData.salesDocumentType}</span>
        </div>
        <div className={styles.gridItem}>
          <label className={styles.label}>Plant</label>
          <span className={styles.value}>{summaryData.plant}</span>
        </div>

        <div className={styles.gridItem}>
          <label className={styles.label}>Delivery date</label>
          <span className={styles.value}>{summaryData.deliveryDate}</span>
        </div>
        <div className={styles.gridItem}>
          <label className={styles.label}>Status</label>
          <span className={styles.statusValue}>
            <span className={styles.statusDot} />
            {summaryData.status}
          </span>
        </div>
      </div>
    </div>
  );
};

export default OrderInformation;

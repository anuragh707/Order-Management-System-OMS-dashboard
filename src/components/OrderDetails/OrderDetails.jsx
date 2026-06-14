import React from 'react';
import styles from './OrderDetails.module.css';
import { FiFileText } from 'react-icons/fi';

const OrderDetails = ({ detailsData }) => {
  if (!detailsData) {
    return <div className={styles.loading}>Loading order details...</div>;
  }

  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <h2 className={styles.cardTitle}>Order Detail</h2>
        <div className={styles.iconWrapper}>
          <FiFileText className={styles.headerIcon} />
        </div>
      </div>
      <div className={styles.cardContent}>
        <div className={styles.grid}>
          <div className={styles.gridItem}>
            <label className={styles.label}>Plant</label>
            <span className={styles.value}>{detailsData.plant}</span>
          </div>
          <div className={styles.gridItem}>
            <label className={styles.label}>Sales District</label>
            <span className={styles.value}>{detailsData.salesDistrict}</span>
          </div>
          <div className={styles.gridItem}>
            <label className={styles.label}>Distribution Channel</label>
            <span className={styles.value}>{detailsData.distributionChannel}</span>
          </div>
          <div className={styles.gridItem}>
            <label className={styles.label}>Sales Document Type</label>
            <span className={styles.value}>{detailsData.salesDocumentType}</span>
          </div>

          <div className={styles.gridItem}>
            <label className={styles.label}>Sales Organisation</label>
            <span className={styles.value}>{detailsData.salesOrganization}</span>
          </div>
          <div className={styles.gridItem}>
            <label className={styles.label}>Division</label>
            <span className={styles.value}>{detailsData.division}</span>
          </div>
          <div className={styles.gridItem}>
            <label className={styles.label}>Incoterm</label>
            <span className={styles.value}>{detailsData.incoterm}</span>
          </div>
          <div className={styles.gridItem}>
            <label className={styles.label}>Payment Term</label>
            <span className={styles.value}>{detailsData.paymentTerm}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;

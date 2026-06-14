import React from 'react';
import styles from './CustomerDetails.module.css';
import { FiFileText } from 'react-icons/fi';

const CustomerDetails = ({ customerData }) => {
  if (!customerData) {
    return <div className={styles.loading}>Loading customer details...</div>;
  }

  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <h2 className={styles.cardTitle}>Customer Detail</h2>
        <div className={styles.iconWrapper}>
          <FiFileText className={styles.headerIcon} />
        </div>
      </div>
      <div className={styles.cardContent}>
        <div className={styles.grid}>
          <div className={styles.gridItem}>
            <label className={styles.label}>Customer Reference</label>
            <span className={styles.value}>{customerData.customerReference}</span>
          </div>
          <div className={styles.gridItem}>
            <label className={styles.label}>Order Created Date</label>
            <span className={styles.value}>{customerData.orderCreatedDate}</span>
          </div>
          <div className={styles.gridItem}>
            <label className={styles.label}>Requested Delivery Date</label>
            <span className={styles.value}>{customerData.requestedDeliveryDate}</span>
          </div>
          <div className={styles.gridItem}>
            <label className={styles.label}>Sold To</label>
            <span className={styles.value}>{customerData.soldTo}</span>
          </div>

          <div className={styles.gridItem}>
            <label className={styles.label}>Ship to</label>
            <span className={styles.value}>{customerData.shipTo}</span>
          </div>
          <div className={styles.gridItem}>
            <label className={styles.label}>Billing Address</label>
            <span className={styles.value}>{customerData.billingAddress}</span>
          </div>
          <div className={styles.gridItem}>
            <label className={styles.label}>Shipping Address</label>
            <span className={styles.value}>{customerData.shippingAddress}</span>
          </div>
          <div className={styles.gridItem}>
            <label className={styles.label}>Remarks</label>
            <span className={styles.value}>{customerData.remarks}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerDetails;

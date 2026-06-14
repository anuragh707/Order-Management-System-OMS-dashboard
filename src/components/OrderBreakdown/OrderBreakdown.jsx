import React from 'react';
import styles from './OrderBreakdown.module.css';
import { FiPackage, FiDroplet } from 'react-icons/fi';
import { MdOutlineWarehouse } from 'react-icons/md';

const OrderBreakdown = ({ items }) => {
  if (!items || items.length === 0) {
    return <div className={styles.loading}>Loading order breakdown...</div>;
  }

  // Get material icon based on string match
  const getMaterialIcon = (materialName) => {
    if (materialName.toLowerCase().includes('paint')) {
      return <FiDroplet className={styles.materialIconPaint} title="Liquid/Paint Material" />;
    }
    return <FiPackage className={styles.materialIconBox} title="Package/Solid Material" />;
  };

  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <h2 className={styles.cardTitle}>Order Breakdown</h2>
        <div className={styles.iconWrapper}>
          <MdOutlineWarehouse className={styles.headerIcon} />
        </div>
      </div>
      <div className={styles.tableResponsive}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th className={styles.alignLeft}>Material</th>
              <th>Requested quantity</th>
              <th>Scheduled quantity</th>
              <th>Confirmed quantity</th>
              <th>Extra quantity</th>
              <th>UOM</th>
              <th>Timestamp</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id}>
                <td className={`${styles.alignLeft} ${styles.materialCell}`}>
                  <div className={styles.materialWrapper}>
                    {getMaterialIcon(item.material)}
                    <span className={styles.materialText}>{item.material}</span>
                  </div>
                </td>
                <td className={styles.quantityCol}>{item.requestedQuantity}</td>
                <td className={styles.quantityCol}>{item.scheduledQuantity}</td>
                <td className={styles.mutedCol}>{item.confirmedQuantity}</td>
                <td className={styles.mutedCol}>{item.extraQuantity}</td>
                <td>{item.uom}</td>
                <td className={styles.timestampCol}>
                  <div className={styles.timestampWrapper}>
                    <span className={styles.tsDate}>
                      {item.timestamp.split(' ').slice(0, 3).join(' ')}
                    </span>
                    <span className={styles.tsTime}>
                      {item.timestamp.split(' ').slice(3).join(' ')}
                    </span>
                  </div>
                </td>
                <td>
                  <span className={styles.pendingBadge}>{item.status}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderBreakdown;

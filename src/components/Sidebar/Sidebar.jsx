import React from 'react';
import styles from './Sidebar.module.css';
import { 
  FiHome, 
  FiPackage, 
  FiShoppingCart, 
  FiBox, 
  FiTag, 
  FiBarChart2, 
  FiCheckSquare,
  FiFileText
} from 'react-icons/fi';
import { 
  MdOutlineWarehouse, 
  MdPrecisionManufacturing,
  MdApps
} from 'react-icons/md';

const Sidebar = () => {
  const menuItems = [
    { id: 'home', icon: <FiHome className={styles.iconHome} />, color: '#e53e3e', label: 'Home' },
    { id: 'orders', icon: <FiPackage className={styles.iconOrders} />, color: '#dd6b20', label: 'Production Order' },
    { id: 'dashboard', icon: <FiBarChart2 className={styles.iconDashboard} />, color: '#3182ce', label: 'Dashboard' },
    { id: 'production', icon: <MdPrecisionManufacturing className={styles.iconProduction} />, color: '#38a169', label: 'Operations' },
    { id: 'cart', icon: <FiShoppingCart className={styles.iconCart} />, color: '#e53e3e', label: 'Cart' },
    { id: 'warehouse', icon: <MdOutlineWarehouse className={styles.iconWarehouse} />, color: '#805ad5', label: 'Warehouse' },
    { id: 'inventory', icon: <FiBox className={styles.iconInventory} />, color: '#dd6b20', label: 'Inventory' },
    { id: 'checklist', icon: <FiCheckSquare className={styles.iconChecklist} />, color: '#dd6b20', label: 'Checklist' },
    { id: 'calendar', icon: <FiFileText className={styles.iconCalendar} />, color: '#38a169', label: 'Reports' },
    { id: 'tag', icon: <FiTag className={styles.iconTag} />, color: '#d69e2e', label: 'Offers' },
  ];

  return (
    <aside className={styles.sidebar}>
      <div className={styles.logoContainer}>
        <MdApps className={styles.appsIcon} />
      </div>
      <div className={styles.menuList}>
        {menuItems.map((item) => (
          <div 
            key={item.id} 
            className={`${styles.menuItem} ${item.id === 'orders' ? styles.active : ''}`}
            title={item.label}
          >
            <div className={styles.iconWrapper} style={{ '--hover-color': item.color }}>
              {item.icon}
            </div>
            {item.id === 'orders' && <div className={styles.activeIndicator} />}
          </div>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;

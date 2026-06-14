import React, { useState, useEffect } from 'react';
import styles from './OrderDetailsPage.module.css';
import api from '../services/api';

// Import child components
import OrderHeader from '../components/OrderHeader/OrderHeader';
import OrderInformation from '../components/OrderInformation/OrderInformation';
import Timeline from '../components/Timeline/Timeline';
import OrderDetails from '../components/OrderDetails/OrderDetails';
import OrderBreakdown from '../components/OrderBreakdown/OrderBreakdown';
import CustomerDetails from '../components/CustomerDetails/CustomerDetails';
import ApiChart from '../components/ApiChart/ApiChart';

const OrderDetailsPage = () => {
  const orderId = 'OD-1591'; // Target order ID from screenshot

  // State definitions
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [summaryData, setSummaryData] = useState(null);
  const [detailsData, setDetailsData] = useState(null);
  const [breakdownItems, setBreakdownItems] = useState([]);
  const [customerData, setCustomerData] = useState(null);
  const [timelineEvents, setTimelineEvents] = useState([]);
  const [activeTab, setActiveTab] = useState('Detail');

  const tabs = [
    { id: 'Detail', label: 'Detail' },
    { id: 'Offers & Coupon', label: 'Offers & Coupon' },
    { id: 'Module', label: 'Module' },
    { id: 'Stock Reservation', label: 'Stock Reservation' },
    { id: 'Documents', label: 'Documents' },
    { id: 'Info', label: 'Info' },
    { id: 'Comment', label: 'Comment' },
    { id: 'Timeline', label: 'Timeline' },
    { id: 'API Design', label: 'API Design' } // Special recruitment assignment tab
  ];

  useEffect(() => {
    const fetchOrderData = async () => {
      try {
        setLoading(true);
        // Execute parallel requests to simulate live API environment
        const [
          summaryResponse,
          detailsResponse,
          itemsResponse,
          customerResponse,
          timelineResponse
        ] = await Promise.all([
          api.get(`/orders/${orderId}`),
          api.get(`/orders/${orderId}/details`),
          api.get(`/orders/${orderId}/items`),
          api.get(`/orders/${orderId}/customer`),
          api.get(`/orders/${orderId}/timeline`)
        ]);

        setSummaryData(summaryResponse.data);
        setDetailsData(detailsResponse.data);
        setBreakdownItems(itemsResponse.data);
        setCustomerData(customerResponse.data);
        setTimelineEvents(timelineResponse.data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching order datasets:', err);
        setError('Failed to fetch dashboard data. Please try again.');
        setLoading(false);
      }
    };

    fetchOrderData();
  }, [orderId]);

  if (loading) {
    return (
      <div className={styles.loaderContainer}>
        <div className={styles.spinner} />
        <p className={styles.loadingText}>Fetching order data from ERP database...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.errorContainer}>
        <div className={styles.errorCard}>
          <h3>Data Fetch Error</h3>
          <p>{error}</p>
          <button className={styles.retryBtn} onClick={() => window.location.reload()}>
            Retry Connection
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.pageLayout}>
      {/* Top Breadcrumbs & Heading Sub-navbar */}
      <OrderHeader orderId={orderId} status={summaryData?.status || 'In Process'} />

      {/* Main Content Split Panels */}
      <div className={styles.contentContainer}>
        {/* Left column: Summary Parameters + Timeline Lifecycle */}
        <div className={styles.leftColumn}>
          <OrderInformation summaryData={summaryData} />
          <Timeline events={timelineEvents} />
        </div>

        {/* Right column: Interactive Tabs + Content Cards */}
        <div className={styles.rightColumn}>
          {/* Tab Navigation */}
          <div className={styles.tabsScroller}>
            <div className={styles.tabsContainer}>
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  className={`${styles.tabBtn} ${activeTab === tab.id ? styles.activeTab : ''}`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Active Tab Panel Content */}
          <div className={styles.tabContentPanel}>
            {activeTab === 'Detail' && (
              <>
                <OrderDetails detailsData={detailsData} />
                <OrderBreakdown items={breakdownItems} />
                <CustomerDetails customerData={customerData} />
              </>
            )}

            {activeTab === 'Timeline' && (
              <div className={styles.placeholderTabContent}>
                <h3>Interactive Timeline Details</h3>
                <p>Detailed logistical tracking and transit timeline details for order reference {orderId}.</p>
                <div className={styles.innerCardWrapper}>
                  <Timeline events={timelineEvents} />
                </div>
              </div>
            )}

            {activeTab === 'API Design' && <ApiChart />}

            {/* General fallback view for inactive placeholder tabs */}
            {!['Detail', 'Timeline', 'API Design'].includes(activeTab) && (
              <div className={styles.placeholderTabContent}>
                <h3>{activeTab} Module</h3>
                <p>
                  The requested ERP module <strong>{activeTab}</strong> is currently integrated. No records are present for Order ID {orderId}.
                </p>
                <div className={styles.illustrationSquare}>
                  <span>Empty Dataset</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetailsPage;

import React, { useState } from 'react';
import styles from './ApiChart.module.css';
import { FiDatabase, FiLayers } from 'react-icons/fi';

const ApiChart = () => {
  const [activeSegment, setActiveSegment] = useState(null);

  const apiData = [
    {
      id: 0,
      name: 'Order Summary',
      endpoint: 'GET /api/orders/:id',
      description: 'Returns the high-level header attributes of the order (Status, material ID, overall quantities).',
      color: '#3182ce', // Blue
      percentage: '20%'
    },
    {
      id: 1,
      name: 'Order Details',
      endpoint: 'GET /api/orders/:id/details',
      description: 'Fetches structural ERP parameters (Plant, sales district, Division, distribution channels, incoterms).',
      color: '#38a169', // Green
      percentage: '20%'
    },
    {
      id: 2,
      name: 'Order Breakdown',
      endpoint: 'GET /api/orders/:id/items',
      description: 'Returns the tabular list of line items including materials, requested/scheduled counts, and pending status.',
      color: '#dd6b20', // Orange
      percentage: '20%'
    },
    {
      id: 3,
      name: 'Customer Details',
      endpoint: 'GET /api/orders/:id/customer',
      description: 'Fetches detailed customer profiles (sold-to, shipping address, billing address, and special remarks).',
      color: '#805ad5', // Purple
      percentage: '20%'
    },
    {
      id: 4,
      name: 'Timeline Events',
      endpoint: 'GET /api/orders/:id/timeline',
      description: 'Returns chronology tracking PO creation, SO creation, and STO movements.',
      color: '#e53e3e', // Red
      percentage: '20%'
    }
  ];

  // Circle properties for stroke-dasharray SVG calculations
  const radius = 50;
  const strokeWidth = 24;
  const circumference = 2 * Math.PI * radius; // ~314.159
  const segmentLength = circumference / apiData.length; // ~62.83

  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <div className={styles.headerTitle}>
          <FiDatabase className={styles.titleIcon} />
          <h2>OMS Screen API Design & Distribution</h2>
        </div>
        <div className={styles.apiCountBadge}>5 APIs Required</div>
      </div>
      <div className={styles.content}>
        {/* Left Side: SVG Pie Chart */}
        <div className={styles.chartSection}>
          <div className={styles.svgWrapper}>
            <svg viewBox="0 0 140 140" className={styles.pieSvg}>
              <g transform="rotate(-90 70 70)">
                {apiData.map((api, index) => {
                  const dashOffset = -index * segmentLength;
                  const isHovered = activeSegment === api.id;
                  
                  return (
                    <circle
                      key={api.id}
                      cx="70"
                      cy="70"
                      r={radius}
                      fill="transparent"
                      stroke={api.color}
                      strokeWidth={isHovered ? strokeWidth + 4 : strokeWidth}
                      strokeDasharray={`${segmentLength} ${circumference}`}
                      strokeDashoffset={dashOffset}
                      className={styles.segment}
                      onMouseEnter={() => setActiveSegment(api.id)}
                      onMouseLeave={() => setActiveSegment(null)}
                    />
                  );
                })}
              </g>
              {/* Inner ring to make it a donut chart (sleeker dashboard aesthetic) */}
              <circle cx="70" cy="70" r={radius - strokeWidth/2 - 2} fill="#ffffff" />
              
              {/* Center text */}
              <text x="70" y="68" textAnchor="middle" className={styles.centerNumber}>
                100%
              </text>
              <text x="70" y="82" textAnchor="middle" className={styles.centerLabel}>
                API Coverage
              </text>
            </svg>
          </div>

          {/* Interactive Tooltip Card */}
          <div className={styles.tooltipCard}>
            {activeSegment !== null ? (
              <div className={styles.activeTooltipContent}>
                <div 
                  className={styles.tooltipColorBar} 
                  style={{ backgroundColor: apiData[activeSegment].color }} 
                />
                <div>
                  <h4 className={styles.tooltipName}>{apiData[activeSegment].name}</h4>
                  <code className={styles.tooltipRoute}>{apiData[activeSegment].endpoint}</code>
                  <p className={styles.tooltipDesc}>{apiData[activeSegment].description}</p>
                </div>
              </div>
            ) : (
              <div className={styles.tooltipPrompt}>
                <FiLayers className={styles.promptIcon} />
                <span>Hover over the pie chart segments to inspect endpoint details.</span>
              </div>
            )}
          </div>
        </div>

        {/* Right Side: Detailed Endpoints List */}
        <div className={styles.listSection}>
          <h3>API Endpoint Documentation</h3>
          <p className={styles.sectionSubtitle}>
            Estimated backend endpoints required to serve the OMS Order Details view:
          </p>
          <div className={styles.apiList}>
            {apiData.map((api) => (
              <div 
                key={api.id} 
                className={`${styles.apiItem} ${activeSegment === api.id ? styles.apiItemActive : ''}`}
                onMouseEnter={() => setActiveSegment(api.id)}
                onMouseLeave={() => setActiveSegment(null)}
              >
                <div className={styles.apiItemHeader}>
                  <div className={styles.apiLegendIndicator}>
                    <span 
                      className={styles.legendColor} 
                      style={{ backgroundColor: api.color }} 
                    />
                    <span className={styles.apiName}>{api.name}</span>
                  </div>
                  <span className={styles.apiPercentage}>{api.percentage}</span>
                </div>
                <code className={styles.apiRoute}>{api.endpoint}</code>
                <p className={styles.apiDesc}>{api.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApiChart;

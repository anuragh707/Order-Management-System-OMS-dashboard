import React from 'react';
import styles from './Timeline.module.css';
import { FiFileText } from 'react-icons/fi';

const Timeline = ({ events }) => {
  if (!events || events.length === 0) {
    return <div className={styles.loading}>Loading timeline...</div>;
  }

  return (
    <div className={styles.timelineCard}>
      <div className={styles.eventsList}>
        {events.map((event, index) => (
          <div key={event.id} className={styles.timelineItem}>
            {/* Left line & indicator */}
            <div className={styles.indicatorColumn}>
              <div className={styles.iconCircle}>
                <FiFileText className={styles.docIcon} />
              </div>
              {index < events.length - 1 && <div className={styles.dashedLine} />}
            </div>

            {/* Right text content */}
            <div className={styles.contentColumn}>
              <div className={styles.statusHeader}>
                <span className={styles.statusText}>{event.status}</span>
                <span className={styles.pipe}>|</span>
                <a href={`#${event.orderId}`} className={styles.orderLink}>
                  {event.orderId}
                </a>
              </div>
              <div className={styles.eventTitle}>{event.eventTitle}</div>
              <div className={styles.timestamp}>
                <span className={styles.date}>{event.date}</span>
                <span className={styles.pipe}>|</span>
                <span className={styles.time}>{event.time}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;

import React from 'react';
import { ReactComponent as NotificationIcon } from '../assets/icons/bell.svg';
// styles
import styles from './notificationTab.module.scss';
const NotificationTab = () => {
  return (
    <div>
      <div className={styles.notificationContainer}>
        <NotificationIcon className={styles.icon} />
        <span>6</span>
      </div>
    </div>
  );
};

export { NotificationTab };

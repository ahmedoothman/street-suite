// react
import React, { useEffect } from 'react';
//router
import { Outlet, useNavigate } from 'react-router-dom';
// styles
import styles from './index.module.scss';
// components
import SideNav from '../../layouts/sideNav';
const DashboardBase = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate('/alerts');
  }, []);
  // state
  return (
    <div className={styles.bodyContainer}>
      <SideNav />
      <div className={styles.mainContent}>
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardBase;

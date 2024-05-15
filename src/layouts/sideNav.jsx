import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
//logo
import logo from '../assets/pics/street-suite-logo.png';
// svgs
// import Bell from '../assets/icons/bell.svg';
import { ReactComponent as Bell } from '../assets/icons/bell.svg';
import { ReactComponent as GradHat } from '../assets/icons/grad-hat.svg';
import { ReactComponent as Settings } from '../assets/icons/settings.svg';
import { ReactComponent as Porfolio } from '../assets/icons/portfolio.svg';
import { ReactComponent as Chart } from '../assets/icons/chart.svg';
import Avatar from '../assets/icons/avatar.svg';
//styles
import styles from './sideNav.module.scss';

//components
import { NotificationTab } from '../components/NotificationTab';
const SideNav = () => {
  const { pathname } = useLocation();
  return (
    <div className={styles.sideNavContainer}>
      <div className='upper'>
        <div className={styles.logo}>
          <img src={logo} alt='logo' />
        </div>
        <div className={styles.list}>
          <NavLink
            to='/alerts'
            className={({ isActive }) =>
              isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
            }
          >
            <Bell className={styles.icon} />
            <p className={styles.navTitle}>Alerts</p>
          </NavLink>
          <NavLink
            to='/training'
            className={({ isActive }) =>
              isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
            }
          >
            <GradHat className={styles.icon} />
            <p className={styles.navTitle}>Training</p>
          </NavLink>
          <NavLink to={pathname} className={styles.disabled}>
            <Settings className={styles.icon} />
            <p className={styles.navTitle}>Settings</p>
          </NavLink>
          <NavLink to={pathname} className={styles.disabled}>
            <Porfolio className={styles.icon} />
            <p className={styles.navTitle}>Portfolio</p>
          </NavLink>
          <NavLink to={pathname} className={styles.disabled}>
            <Chart className={styles.icon} />
            <p className={styles.navTitle}>Trading</p>
          </NavLink>
          {/* <a className={styles.note}>Coming Soon</a> */}
        </div>
      </div>
      <div className={styles.lower}>
        <div className={styles.notificationTab}>
          <NotificationTab />
        </div>
        <div className={styles.profile}>
          <div className={styles.profilePic}>
            <img src={Avatar} alt='avatar' />
          </div>
          <div className={styles.profileInfo}>
            <p>John Doe</p>
            <p>
              <span>View Profile</span>
            </p>
          </div>
        </div>
        <div className={styles.versionInfo}>Street Suite 2.0</div>
      </div>
    </div>
  );
};
export default SideNav;

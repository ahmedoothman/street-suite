import React, { Fragment, useState } from 'react';

// styles
import styles from './stockItem.module.scss';
//icons
import { ReactComponent as PriceTag } from '../assets/icons/price-tag.svg';
import { ReactComponent as DocumentIcon } from '../assets/icons/document.svg';
import { ReactComponent as PercentageChange } from '../assets/icons/percentage-change.svg';
import { ReactComponent as HighRisk } from '../assets/icons/high-risk.svg';
import { ReactComponent as LowRisk } from '../assets/icons/low-risk.svg';
const StockItem = (props) => {
  const [minimized, setMinimized] = useState(true);
  // state
  return (
    <div
      className={styles.itemContainer}
      onClick={() => {
        setMinimized((prev) => !prev);
      }}
    >
      <div
        className={
          !minimized
            ? `${styles.stockItemContainer} ${styles.stockItemContainerActive}`
            : styles.stockItemContainer
        }
      >
        <div className={styles.stockItemField}>
          <PriceTag className={styles.icon} />
          <p className={styles.stockItemTitle}>{props.name}</p>
        </div>
        <div className={styles.stockItemField}>
          <DocumentIcon className={styles.icon} />
          <p className={styles.stockItemTitle}>{props.stock}</p>
        </div>
        <div className={styles.stockItemField}>
          <PercentageChange className={styles.icon} />
          <p className={styles.stockItemTitle}>
            <span
              className={
                props.percentageChange > 0 ? styles.success : styles.danger
              }
            >
              {props.percentageChange}%
            </span>
          </p>
        </div>
        <div className={styles.stockItemField}>
          {props.risk === 'high' ? (
            <Fragment>
              <HighRisk className={styles.icon} />
              <p className={styles.stockItemTitle}>High Risk</p>
            </Fragment>
          ) : (
            <Fragment>
              <LowRisk className={styles.icon} />
              <p className={styles.stockItemTitle}>Low Risk</p>
            </Fragment>
          )}
        </div>
      </div>
      {!minimized && <div className={styles.desc}>{props.desc}</div>}
    </div>
  );
};

export { StockItem };

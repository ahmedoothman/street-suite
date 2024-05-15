// react
import React, { useState } from 'react';

// styles
import styles from './alertsPage.module.scss';

// components
import { StockItem } from '../../components/StockItem';
import { NotificationTab } from '../../components/NotificationTab';
import { FilterComponent } from '../../components/FilterComponent';
// icons
import { ReactComponent as SearchIcon } from '../../assets/icons/search.svg';
const AlertsPage = () => {
  const [stockItems, setStockItems] = useState([
    {
      name: 'AMZN',
      stock: 200,
      percentageChange: -25,
      risk: 'Low',
      marketCap: 'Large',
      industry: 'Tech',
      desc: '$TSLA just announced an acquisition of $NFLX at $200 B. This is an arbitrage opportunity, with the max gain being %X if the deal closes, but the possible risk is %Y  if the deal fails, If the deal success is % and therefore the recommended play is long/short $ABC',
    },
    {
      name: 'TSLA',
      stock: 200,
      percentageChange: 25,
      risk: 'Low',
      marketCap: 'Small',
      industry: 'Tech',
      desc: '$TSLA just announced an acquisition of $NFLX at $200 B. This is an arbitrage opportunity, with the max gain being %X if the deal closes, but the possible risk is %Y  if the deal fails, If the deal success is % and therefore the recommended play is long/short $ABC',
    },
    {
      name: 'ABQQ',
      stock: 200,
      percentageChange: -25,
      risk: 'High',
      marketCap: 'Micro',
      industry: 'Healthcare',
      desc: '$TSLA just announced an acquisition of $NFLX at $200 B. This is an arbitrage opportunity, with the max gain being %X if the deal closes, but the possible risk is %Y  if the deal fails, If the deal success is % and therefore the recommended play is long/short $ABC',
    },
    {
      name: 'MSFT',
      stock: 200,
      percentageChange: -25,
      risk: 'Low',
      marketCap: 'Large',
      industry: 'Energy',
      desc: '$TSLA just announced an acquisition of $NFLX at $200 B. This is an arbitrage opportunity, with the max gain being %X if the deal closes, but the possible risk is %Y  if the deal fails, If the deal success is % and therefore the recommended play is long/short $ABC',
    },
    {
      name: 'AAPL',
      stock: 200,
      percentageChange: 25,
      risk: 'Low',
      marketCap: 'Large',
      industry: 'Realestate',
      desc: '$TSLA just announced an acquisition of $NFLX at $200 B. This is an arbitrage opportunity, with the max gain being %X if the deal closes, but the possible risk is %Y  if the deal fails, If the deal success is % and therefore the recommended play is long/short $ABC',
    },
    {
      name: 'GOOGL',
      stock: 200,
      percentageChange: -25,
      risk: 'Low',
      marketCap: 'Large',
      industry: 'IT',
      desc: '$TSLA just announced an acquisition of $NFLX at $200 B. This is an arbitrage opportunity, with the max gain being %X if the deal closes, but the possible risk is %Y  if the deal fails, If the deal success is % and therefore the recommended play is long/short $ABC',
    },
    {
      name: 'AMZN',
      stock: 200,
      percentageChange: 25,
      risk: 'Low',
      marketCap: 'Large',
      industry: 'Tech',
      desc: '$TSLA just announced an acquisition of $NFLX at $200 B. This is an arbitrage opportunity, with the max gain being %X if the deal closes, but the possible risk is %Y  if the deal fails, If the deal success is % and therefore the recommended play is long/short $ABC',
    },
    {
      name: 'TSLA',
      stock: 200,
      percentageChange: -25,
      risk: 'Low',
      marketCap: 'Large',
      industry: 'Tech',
      desc: '$TSLA just announced an acquisition of $NFLX at $200 B. This is an arbitrage opportunity, with the max gain being %X if the deal closes, but the possible risk is %Y  if the deal fails, If the deal success is % and therefore the recommended play is long/short $ABC',
    },
    {
      name: 'ABQQ',
      stock: 200,
      percentageChange: 25,
      risk: 'Low',
      marketCap: 'Large',
      industry: 'Tech',
      desc: '$TSLA just announced an acquisition of $NFLX at $200 B. This is an arbitrage opportunity, with the max gain being %X if the deal closes, but the possible risk is %Y  if the deal fails, If the deal success is % and therefore the recommended play is long/short $ABC',
    },
    {
      name: 'MSFT',
      stock: 200,
      percentageChange: -25,
      risk: 'Low',
      marketCap: 'Large',
      industry: 'Tech',
      desc: '$TSLA just announced an acquisition of $NFLX at $200 B. This is an arbitrage opportunity, with the max gain being %X if the deal closes, but the possible risk is %Y  if the deal fails, If the deal success is % and therefore the recommended play is long/short $ABC',
    },
    {
      name: 'AAPL',
      stock: 200,
      percentageChange: 25,
      risk: 'Low',
      marketCap: 'Large',
      industry: 'Tech',
      desc: '$TSLA just announced an acquisition of $NFLX at $200 B. This is an arbitrage opportunity, with the max gain being %X if the deal closes, but the possible risk is %Y  if the deal fails, If the deal success is % and therefore the recommended play is long/short $ABC',
    },
    {
      name: 'GOOGL',
      stock: 200,
      percentageChange: -25,
      risk: 'Low',
      marketCap: 'Large',
      industry: 'Tech',
      desc: '$TSLA just announced an acquisition of $NFLX at $200 B. This is an arbitrage opportunity, with the max gain being %X if the deal closes, but the possible risk is %Y  if the deal fails, If the deal success is % and therefore the recommended play is long/short $ABC',
    },
  ]);

  // state
  return (
    <div className={styles.bodyContainer}>
      <div className={styles.alertsContainer}>
        <div className={styles.alertsHeader}>
          <h1 className={styles.title}>Alerts</h1>
          <div className={styles.searchInput}>
            <input
              type='text'
              placeholder='Search By...'
              className={styles.searchInput}
            />
            <SearchIcon className={styles.icon} />
          </div>
          <div className={styles.notificationTab}>
            <NotificationTab />
          </div>
        </div>
        <div className={styles.alertsList}>
          {stockItems.map((stock, index) => (
            <StockItem
              key={index}
              name={stock.name}
              stock={stock.stock}
              percentageChange={stock.percentageChange}
              risk={stock.risk}
              marketCap={stock.marketCap}
              industry={stock.industry}
              desc={stock.desc}
            />
          ))}
        </div>
      </div>
      <div className={styles.filterContainer}>
        <FilterComponent />
      </div>
    </div>
  );
};

export { AlertsPage };

// react
import React, { useState } from 'react';

// styles
import styles from './alertsPage.module.scss';
//mui
import Backdrop from '@mui/material/Backdrop';
// components
import { StockItem } from '../../components/StockItem';
import { NotificationTab } from '../../components/NotificationTab';
import { FilterComponent } from '../../components/FilterComponent';
// icons
import { ReactComponent as SearchIcon } from '../../assets/icons/search.svg';

/* 
-- industry filter
  'Health Care',
  'Materials',
  'Energy',
  'Consumer Discretionary',
  'Real Estate',
  'IT',
  'Communication',
  'Industrials',
  'Utilities',
  'Financials',
*/
const AlertsPage = () => {
  const [stockItems, setStockItems] = useState([
    {
      name: 'AMZN',
      stock: 200,
      percentageChange: -25,
      risk: 'low',
      marketCap: 'large',
      industry: 'IT',
      desc: '$TSLA just announced an acquisition of $NFLX at $200 B. This is an arbitrage opportunity, with the max gain being %X if the deal closes, but the possible risk is %Y  if the deal fails, If the deal success is % and therefore the recommended play is long/short $ABC',
    },
    {
      name: 'TSLA',
      stock: 200,
      percentageChange: 25,
      risk: 'low',
      marketCap: 'small',
      industry: 'Health Care',
      desc: '$TSLA just announced an acquisition of $NFLX at $200 B. This is an arbitrage opportunity, with the max gain being %X if the deal closes, but the possible risk is %Y  if the deal fails, If the deal success is % and therefore the recommended play is long/short $ABC',
    },
    {
      name: 'ABQQ',
      stock: 200,
      percentageChange: -25,
      risk: 'high',
      marketCap: 'micro',
      industry: 'Materials',
      desc: '$TSLA just announced an acquisition of $NFLX at $200 B. This is an arbitrage opportunity, with the max gain being %X if the deal closes, but the possible risk is %Y  if the deal fails, If the deal success is % and therefore the recommended play is long/short $ABC',
    },
    {
      name: 'MSFT',
      stock: 200,
      percentageChange: -25,
      risk: 'low',
      marketCap: 'large',
      industry: 'Energy',
      desc: '$TSLA just announced an acquisition of $NFLX at $200 B. This is an arbitrage opportunity, with the max gain being %X if the deal closes, but the possible risk is %Y  if the deal fails, If the deal success is % and therefore the recommended play is long/short $ABC',
    },
    {
      name: 'AAPL',
      stock: 200,
      percentageChange: 25,
      risk: 'low',
      marketCap: 'large',
      industry: 'Consumer Discretionary',
      desc: '$TSLA just announced an acquisition of $NFLX at $200 B. This is an arbitrage opportunity, with the max gain being %X if the deal closes, but the possible risk is %Y  if the deal fails, If the deal success is % and therefore the recommended play is long/short $ABC',
    },
    {
      name: 'GOOGL',
      stock: 200,
      percentageChange: -25,
      risk: 'low',
      marketCap: 'large',
      industry: 'IT',
      desc: '$TSLA just announced an acquisition of $NFLX at $200 B. This is an arbitrage opportunity, with the max gain being %X if the deal closes, but the possible risk is %Y  if the deal fails, If the deal success is % and therefore the recommended play is long/short $ABC',
    },
    {
      name: 'AMZN',
      stock: 200,
      percentageChange: 25,
      risk: 'low',
      marketCap: 'large',
      industry: 'IT',
      desc: '$TSLA just announced an acquisition of $NFLX at $200 B. This is an arbitrage opportunity, with the max gain being %X if the deal closes, but the possible risk is %Y  if the deal fails, If the deal success is % and therefore the recommended play is long/short $ABC',
    },
    {
      name: 'TSLA',
      stock: 200,
      percentageChange: -25,
      risk: 'low',
      marketCap: 'large',
      industry: 'Communication',
      desc: '$TSLA just announced an acquisition of $NFLX at $200 B. This is an arbitrage opportunity, with the max gain being %X if the deal closes, but the possible risk is %Y  if the deal fails, If the deal success is % and therefore the recommended play is long/short $ABC',
    },
    {
      name: 'ABQQ',
      stock: 200,
      percentageChange: 25,
      risk: 'low',
      marketCap: 'large',
      industry: 'Industrials',
      desc: '$TSLA just announced an acquisition of $NFLX at $200 B. This is an arbitrage opportunity, with the max gain being %X if the deal closes, but the possible risk is %Y  if the deal fails, If the deal success is % and therefore the recommended play is long/short $ABC',
    },
    {
      name: 'MSFT',
      stock: 200,
      percentageChange: -25,
      risk: 'low',
      marketCap: 'large',
      industry: 'Utilities',
      desc: '$TSLA just announced an acquisition of $NFLX at $200 B. This is an arbitrage opportunity, with the max gain being %X if the deal closes, but the possible risk is %Y  if the deal fails, If the deal success is % and therefore the recommended play is long/short $ABC',
    },
    {
      name: 'AAPL',
      stock: 200,
      percentageChange: 25,
      risk: 'low',
      marketCap: 'large',
      industry: 'Financials',
      desc: '$TSLA just announced an acquisition of $NFLX at $200 B. This is an arbitrage opportunity, with the max gain being %X if the deal closes, but the possible risk is %Y  if the deal fails, If the deal success is % and therefore the recommended play is long/short $ABC',
    },
    {
      name: 'GOOGL',
      stock: 200,
      percentageChange: -25,
      risk: 'low',
      marketCap: 'large',
      industry: 'Real Estate',
      desc: '$TSLA just announced an acquisition of $NFLX at $200 B. This is an arbitrage opportunity, with the max gain being %X if the deal closes, but the possible risk is %Y  if the deal fails, If the deal success is % and therefore the recommended play is long/short $ABC',
    },
  ]);

  const [filterItems, setFilterItems] = useState(stockItems);

  const [openFilter, setOpenFilter] = useState(false);
  const handleOpenFilter = () => {
    setOpenFilter(true);
  };
  const handleCloseFilter = () => {
    setOpenFilter(false);
  };

  /* ****************************************** */
  // search handler
  /* ****************************************** */

  const searchHandler = (e) => {
    // same logic but when emoty return all
    const searchValue = e.target.value;
    if (searchValue === '') {
      setFilterItems(stockItems);
    } else {
      const filteredStocks = stockItems.filter((stock) => {
        return stock.name.tolowerCase().includes(searchValue.tolowerCase());
      });
      setFilterItems(filteredStocks);
    }
  };

  /* ****************************************** */
  // filter handler
  /* ****************************************** */
  const filterHandler = (filterObjs) => {
    if (filterObjs.industry.length === 0) {
      setFilterItems(stockItems);
    }

    if (filterObjs.industry.length > 0) {
      const filteredStocks = stockItems.filter((stock) => {
        return filterObjs.industry.includes(stock.industry);
      });
      setFilterItems(filteredStocks);
    }

    if (filterObjs.riskLevel !== 'none') {
      const filteredStocks = stockItems.filter((stock) => {
        return filterObjs.riskLevel.includes(stock.risk);
      });
      setFilterItems(filteredStocks);
    }

    if (filterObjs.marketCap !== 'none') {
      const filteredStocks = stockItems.filter((stock) => {
        return filterObjs.marketCap.includes(stock.marketCap);
      });
      setFilterItems(filteredStocks);
    }
  };
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
              onChange={searchHandler}
            />
            <SearchIcon className={styles.icon} />
          </div>
          <div className={styles.notificationTab}>
            <NotificationTab />
          </div>

          <div className={styles.filterButton}>
            <button className={styles.filterButton} onClick={handleOpenFilter}>
              Filter
            </button>
          </div>
        </div>
        <div className={styles.alertsList}>
          {filterItems.map((stock, index) => (
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
        <FilterComponent filterHandlerFunc={filterHandler} />
      </div>
      {/* add a background white and blur it */}
      <Backdrop
        sx={{
          color: '#fff',
          zIndex: (theme) => theme.zIndex.drawer + 1,
          backdropFilter: 'blur(4px)',
        }}
        open={openFilter}
        onClick={handleCloseFilter}
      >
        <FilterComponent filterHandlerFunc={filterHandler} />
      </Backdrop>
    </div>
  );
};

export { AlertsPage };

import React, { useState } from 'react';
//
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
// mui styles
import { CustomLabel, BpRadio } from './CheckBoxStyles';
// swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './swiper-styles.css';
//icons
import { ReactComponent as SearchIcon } from '../assets/icons/search.svg';
import { ReactComponent as Close } from '../assets/icons/close.svg';
import { ReactComponent as ArrowDown } from '../assets/icons/arrow-down.svg';
import { ReactComponent as Heart } from '../assets/icons/heart.svg';
import { ReactComponent as Mater } from '../assets/icons/material.svg';
import { ReactComponent as Energy } from '../assets/icons/energy.svg';
import { ReactComponent as Consum } from '../assets/icons/consume.svg';
import { ReactComponent as RealState } from '../assets/icons/realState.svg';
import { ReactComponent as IT } from '../assets/icons/it.svg';
import { ReactComponent as Comm } from '../assets/icons/comm.svg';
import { ReactComponent as Indust } from '../assets/icons/indust.svg';
import { ReactComponent as Util } from '../assets/icons/util.svg';
import { ReactComponent as Finance } from '../assets/icons/finan.svg';
// styles
import styles from './filterComponent.module.scss';
const SwiperSlideStyles = { height: '30px' };

const FilterComponent = (props) => {
  const [selectedMarketCap, setSelectedMarketCap] = useState('none');
  const [selectedRiskLevel, setSelectedRiskLevel] = useState('none');
  const [selectedStrategy, setSelectedStrategy] = useState(1);
  const [selectedAsset, setSelectedAsset] = useState(1);
  const [IndustryFilter, setIndustryFilter] = useState([]);
  const handleMarketCapChange = (event) => {
    setSelectedMarketCap(event.target.value);
  };

  const handleRiskLevelChange = (event) => {
    setSelectedRiskLevel(event.target.value);
  };

  /* ********************************************************** */
  /* ************** Filter Handler ***************************** */
  /* ********************************************************** */
  const filterHandler = () => {
    // construct the filter object with the selected values
    // get the assets from the selectedAsset
    const assets = ['Stocks', 'Options', 'Futures'][selectedAsset];
    // get the strategy from the selectedStrategy
    const strategy = ['Big Option Buys', 'Merger Arbitrage', 'Short Reports'][
      selectedStrategy
    ];
    const filter = {
      marketCap: selectedMarketCap,
      riskLevel: selectedRiskLevel,
      industry: IndustryFilter,
      assets,
      strategy,
    };
    // call the parent filter function
    console.log(filter);
    props.filterHandlerFunc(filter);
  };

  /* ********************************************************** */
  /* ************** Clear Filter Handler ***************************** */
  /* ********************************************************** */

  const clearFilterHandler = () => {
    setIndustryFilter([]);
    setSelectedMarketCap('none');
    setSelectedRiskLevel('none');
    setSelectedStrategy(1);
    setSelectedAsset(1);
  };
  // state
  return (
    <div className={styles.filterContainer}>
      <h2 className={styles.alertTitle}>Filters</h2>
      <div className={styles.appliedContainer}>
        <div className={styles.appliedFilterHead}>
          <span className={styles.appliedTitle}>Filters Applied</span>
          <span className={styles.clearFilter} onClick={clearFilterHandler}>
            Clear All
          </span>
        </div>
        <div className={styles.appliedFilter}>
          {IndustryFilter.map((item, index) => (
            <div className={styles.appliedItem} key={index}>
              <span>
                {item}
                <Close
                  className={styles.icon}
                  onClick={() => {
                    setIndustryFilter(
                      IndustryFilter.filter((_, i) => i !== index)
                    );
                  }}
                />
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.filterOptions}>
        <h3 className={styles.filterOptionsTitle}>Stock</h3>
        <div className={styles.filterTicker}>
          <div className={styles.search}>
            <input type='text' placeholder='$ TICKER' />
            <SearchIcon className={styles.icon} />
          </div>
        </div>
        <div className={styles.Industry}>
          <div className={styles.filterOptionsSubTitle}>
            <ArrowDown className={styles.arrowIcon} />
            Industry
          </div>
          <div className={styles.filterOptionsIndustrySplit}>
            <div className={styles.part}>
              <div
                className={styles.item}
                onClick={() => {
                  if (IndustryFilter.includes('Health Care')) {
                    return;
                  }
                  setIndustryFilter([...IndustryFilter, 'Health Care']);
                }}
              >
                <Heart className={styles.icon} />
                <span>Health Care</span>
              </div>
              <div
                className={styles.item}
                onClick={() => {
                  if (IndustryFilter.includes('Materials')) {
                    return;
                  }
                  setIndustryFilter([...IndustryFilter, 'Materials']);
                }}
              >
                <Mater className={styles.icon} />
                <span>Materials</span>
              </div>
              <div
                className={styles.item}
                onClick={() => {
                  if (IndustryFilter.includes('Energy')) {
                    return;
                  }
                  setIndustryFilter([...IndustryFilter, 'Energy']);
                }}
              >
                <Energy className={styles.icon} />
                <span>Energy</span>
              </div>
              <div
                className={styles.item}
                onClick={() => {
                  if (IndustryFilter.includes('Consumer Discretionary')) {
                    return;
                  }
                  setIndustryFilter([
                    ...IndustryFilter,
                    'Consumer Discretionary',
                  ]);
                }}
              >
                <Consum className={styles.icon} />
                <span>Consumer Discretionary</span>
              </div>
              <div
                className={styles.item}
                onClick={() => {
                  if (IndustryFilter.includes('Real Estate')) {
                    return;
                  }
                  setIndustryFilter([...IndustryFilter, 'Real Estate']);
                }}
              >
                <RealState className={styles.icon} />
                <span>Real Estate</span>
              </div>
            </div>
            <div className={styles.part}>
              <div
                className={styles.item}
                onClick={() => {
                  if (IndustryFilter.includes('IT')) {
                    return;
                  }
                  setIndustryFilter([...IndustryFilter, 'IT']);
                }}
              >
                <IT className={styles.icon} />
                <span>IT</span>
              </div>
              <div
                className={styles.item}
                onClick={() => {
                  if (IndustryFilter.includes('Communication')) {
                    return;
                  }
                  setIndustryFilter([...IndustryFilter, 'Communication']);
                }}
              >
                <Comm className={styles.icon} />
                <span>Communication</span>
              </div>
              <div
                className={styles.item}
                onClick={() => {
                  if (IndustryFilter.includes('Industrials')) {
                    return;
                  }
                  setIndustryFilter([...IndustryFilter, 'Industrials']);
                }}
              >
                <Indust className={styles.icon} />
                <span>Industrials</span>
              </div>
              <div
                className={styles.item}
                onClick={() => {
                  if (IndustryFilter.includes('Utilities')) {
                    return;
                  }

                  setIndustryFilter([...IndustryFilter, 'Utilities']);
                }}
              >
                <Util className={styles.icon} />
                <span>Utilities</span>
              </div>
              <div
                className={styles.item}
                onClick={() => {
                  if (IndustryFilter.includes('Financials')) {
                    return;
                  }
                  setIndustryFilter([...IndustryFilter, 'Financials']);
                }}
              >
                <Finance className={styles.icon} />
                <span>Financials</span>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.dualDiv}>
          <div className={styles.part}>
            <div className={styles.filterOptionsSubTitle}>
              <ArrowDown className={styles.arrowIcon} />
              Market Cap
            </div>
            <div className={styles.listOptions}>
              <FormControl>
                <RadioGroup
                  aria-labelledby='demo-radio-buttons-group-label'
                  defaultValue={selectedMarketCap}
                  value={selectedMarketCap}
                  name='marketCap'
                  onChange={handleMarketCapChange}
                >
                  <FormControlLabel
                    value='micro'
                    control={<BpRadio />}
                    label={<CustomLabel>Micro</CustomLabel>}
                  />
                  <FormControlLabel
                    value='small'
                    control={<BpRadio />}
                    label={<CustomLabel>Small</CustomLabel>}
                  />
                  <FormControlLabel
                    value='large'
                    control={<BpRadio />}
                    label={<CustomLabel>Large</CustomLabel>}
                  />
                </RadioGroup>
              </FormControl>
            </div>
          </div>
          <div className={styles.part}>
            <div className={styles.filterOptionsSubTitle}>
              <ArrowDown className={styles.arrowIcon} />
              Risk Level
            </div>
            <div className={styles.listOptions}>
              <FormControl>
                <RadioGroup
                  aria-labelledby='demo-radio-buttons-group-label'
                  defaultValue={selectedRiskLevel}
                  value={selectedRiskLevel}
                  name='riskLevel'
                  onChange={handleRiskLevelChange}
                >
                  <FormControlLabel
                    value='low'
                    control={<BpRadio />}
                    label={<CustomLabel>Low Risk</CustomLabel>}
                  />
                  <FormControlLabel
                    value='mid'
                    control={<BpRadio />}
                    label={<CustomLabel>Mid Risk</CustomLabel>}
                  />
                  <FormControlLabel
                    value='high'
                    control={<BpRadio />}
                    label={<CustomLabel>High Risk</CustomLabel>}
                  />
                </RadioGroup>
              </FormControl>
            </div>
          </div>
        </div>
        <div className={styles.dualDivSpecial}>
          <div className={styles.part}>
            <div className={styles.filterOptionsSubTitle}>Strategy</div>
            <div className={styles.stockOptions}>
              <Swiper
                mousewheel
                centeredSlides={true}
                direction={'vertical'}
                spaceBetween={3}
                slidesPerView={'auto'}
                initialSlide={selectedStrategy}
                onSlideChange={(swiper) =>
                  setSelectedStrategy(swiper.activeIndex)
                }
                onSwiper={(swiper) => console.log(swiper)}
              >
                <SwiperSlide style={SwiperSlideStyles}>
                  {selectedStrategy === 0 && (
                    <span className={styles.active}>Big Option Buys</span>
                  )}
                  {selectedStrategy !== 0 && (
                    <span className={styles.notActive}>Big Option Buys</span>
                  )}
                </SwiperSlide>
                <SwiperSlide style={SwiperSlideStyles}>
                  {selectedStrategy === 1 && (
                    <span className={styles.active}>Merger Arbitrage</span>
                  )}
                  {selectedStrategy !== 1 && (
                    <span className={styles.notActive}>Merger Arbitrage</span>
                  )}
                </SwiperSlide>
                <SwiperSlide style={SwiperSlideStyles}>
                  {selectedStrategy === 2 && (
                    <span className={styles.active}>Short Reports</span>
                  )}
                  {selectedStrategy !== 2 && (
                    <span className={styles.notActive}>Short Reports</span>
                  )}
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
          <div className={styles.part}>
            <div className={styles.filterOptionsSubTitle}>Assets</div>
            <div className={styles.stockOptions}>
              <Swiper
                mousewheel
                centeredSlides={true}
                direction={'vertical'}
                spaceBetween={3}
                slidesPerView={'auto'}
                onSlideChange={(swiper) => setSelectedAsset(swiper.activeIndex)}
                initialSlide={selectedAsset}
                onSwiper={(swiper) => console.log(swiper)}
              >
                <SwiperSlide style={SwiperSlideStyles}>
                  {selectedAsset === 0 && (
                    <span className={styles.active}>Stocks</span>
                  )}
                  {selectedAsset !== 0 && (
                    <span className={styles.notActive}>Stocks</span>
                  )}
                </SwiperSlide>
                <SwiperSlide style={SwiperSlideStyles}>
                  {selectedAsset === 1 && (
                    <span className={styles.active}>Options</span>
                  )}
                  {selectedAsset !== 1 && (
                    <span className={styles.notActive}>Options</span>
                  )}
                </SwiperSlide>
                <SwiperSlide style={SwiperSlideStyles}>
                  {selectedAsset === 2 && (
                    <span className={styles.active}>Futures</span>
                  )}
                  {selectedAsset !== 2 && (
                    <span className={styles.notActive}>Futures</span>
                  )}
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
      <button className={styles.applyButton} onClick={filterHandler}>
        Apply
      </button>
    </div>
  );
};

export { FilterComponent };

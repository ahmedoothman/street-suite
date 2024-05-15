import React from 'react';
//
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import FormLabel from '@mui/material/FormLabel';
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
const backgroundColor = '#454545';
const CustomLabel = styled(Typography)({
  color: '#fff', // Custom label color
  fontSize: '1.2rem', // Custom font size
  fontWeight: '400', // Custom font weight
});

const BpIcon = styled('span')(({ theme }) => ({
  borderRadius: '50%',
  width: 16,
  height: 16,
  boxShadow:
    theme.palette.mode === 'dark'
      ? '0 0 0 1px rgb(16 22 26 / 40%)'
      : 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
  backgroundColor: backgroundColor,
  backgroundImage: 'none',
  '.Mui-focusVisible &': {
    outline: '2px auto rgba(19,124,189,.6)',
    outlineOffset: 2,
  },
  'input:hover ~ &': {
    backgroundColor: backgroundColor,
  },
  'input:disabled ~ &': {
    boxShadow: 'none',
    background:
      theme.palette.mode === 'dark'
        ? 'rgba(57,75,89,.5)'
        : 'rgba(206,217,224,.5)',
  },
}));

const BpCheckedIcon = styled(BpIcon)({
  backgroundColor: backgroundColor,
  '&::before': {
    display: 'block',
    width: 16,
    height: 16,
    backgroundImage: 'radial-gradient(#53acff,#53acff 28%,transparent 32%)',
    content: '""',
  },
  'input:hover ~ &': {
    backgroundColor: backgroundColor,
  },
});

// Inspired by blueprintjs
function BpRadio(props) {
  return (
    <Radio
      disableRipple
      color='default'
      checkedIcon={<BpCheckedIcon />}
      icon={<BpIcon />}
      {...props}
    />
  );
}
const FilterComponent = () => {
  // state
  return (
    <div className={styles.filterContainer}>
      <h2 className={styles.alertTitle}>Filters</h2>
      <div className={styles.appliedContainer}>
        <div className={styles.appliedFilterHead}>
          <span className={styles.appliedTitle}>Filters Applied</span>
          <span className={styles.clearFilter}>Clear All</span>
        </div>
        <div className={styles.appliedFilter}>
          <span>
            Filter 1 <Close className={styles.icon} />
          </span>
          <span>
            Filter 2 <Close className={styles.icon} />
          </span>
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
              <div className={styles.item}>
                <Heart className={styles.icon} />
                <span>Health Care</span>
              </div>
              <div className={styles.item}>
                <Mater className={styles.icon} />
                <span>Materials</span>
              </div>
              <div className={styles.item}>
                <Energy className={styles.icon} />
                <span>Energy</span>
              </div>
              <div className={styles.item}>
                <Consum className={styles.icon} />
                <span>Consumer Discretionary</span>
              </div>
              <div className={styles.item}>
                <RealState className={styles.icon} />
                <span>Real Estate</span>
              </div>
            </div>
            <div className={styles.part}>
              <div className={styles.item}>
                <IT className={styles.icon} />
                <span>IT</span>
              </div>
              <div className={styles.item}>
                <Comm className={styles.icon} />
                <span>Communication</span>
              </div>
              <div className={styles.item}>
                <Indust className={styles.icon} />
                <span>Industrials</span>
              </div>
              <div className={styles.item}>
                <Util className={styles.icon} />
                <span>Utilities</span>
              </div>
              <div className={styles.item}>
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
                  defaultValue='female'
                  name='radio-buttons-group'
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
            <div className={styles.listOptions}></div>
          </div>
        </div>
        <div className={styles.dualDiv}>
          <div className={styles.part}>
            <div className={styles.filterOptionsSubTitle}>Market Cap</div>
            <div className={styles.stockOptions}></div>
          </div>
          <div className={styles.part}>
            <div className={styles.filterOptionsSubTitle}>Risk Level</div>
            <div className={styles.stockOptions}></div>
          </div>
        </div>
        <button className={styles.applyButton}>Apply</button>
      </div>
    </div>
  );
};

export { FilterComponent };

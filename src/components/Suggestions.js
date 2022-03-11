import React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import styles from "./Suggestions.module.css";

import { IoMdArrowDropup } from "react-icons/io";
import logoImage from "../images/logo.png";
import { Grid } from '@mui/material';




function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      style={{width: "100%"}}
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box style={{padding: "20px 10px", width: "100%"}} sx={{ p: 3 }}>
          <Typography component="div" style={{width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between"}}>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="most popular" {...a11yProps(0)} />
          <Tab label="Most profit" {...a11yProps(1)} />
          <Tab label="lowest profit" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel component="div" className={styles.suggestsContainer} value={value} index={0}>
      <div className={styles.suggest}>
            <div className={styles.headerSuggest}>
                <img className={styles.logoSuggest} src={logoImage} alt="logo" style={{width: "25px"}} />
                <p className={styles.nameSuggest}>Bitcoin</p>
                <p className={styles.titleSuggest}>BTC</p>
            </div>
            <div className={styles.mainSuggest}>
                {/* ...... usd change */}
                <p className={styles.usdSuggest}>USD</p>
                <p className={styles.priceSuggest}>43,180.13</p>
            </div>
            <div className={styles.footerSuggest}>
                <p className={styles.timeSuggest}>24h</p>
                <p className={styles.changesSuggest}>+USD 3242.13 <span><IoMdArrowDropup />15.20%</span></p>
            </div>
        </div>
        <div className={styles.suggest}>
            <div className={styles.headerSuggest}>
                <img className={styles.logoSuggest} src={logoImage} alt="logo" style={{width: "25px"}} />
                <p className={styles.nameSuggest}>Bitcoin</p>
                <p className={styles.titleSuggest}>BTC</p>
            </div>
            <div className={styles.mainSuggest}>
                {/* ...... usd change */}
                <p className={styles.usdSuggest}>USD</p>
                <p className={styles.priceSuggest}>43,180.13</p>
            </div>
            <div className={styles.footerSuggest}>
                <p className={styles.timeSuggest}>24h</p>
                <p className={styles.changesSuggest}>+USD 3242.13 <span><IoMdArrowDropup />15.20%</span></p>
            </div>
        </div>
        <div className={styles.suggest}>
            <div className={styles.headerSuggest}>
                <img className={styles.logoSuggest} src={logoImage} alt="logo" style={{width: "25px"}} />
                <p className={styles.nameSuggest}>Bitcoin</p>
                <p className={styles.titleSuggest}>BTC</p>
            </div>
            <div className={styles.mainSuggest}>
                {/* ...... usd change */}
                <p className={styles.usdSuggest}>USD</p>
                <p className={styles.priceSuggest}>43,180.13</p>
            </div>
            <div className={styles.footerSuggest}>
                <p className={styles.timeSuggest}>24h</p>
                <p className={styles.changesSuggest}>+USD 3242.13 <span><IoMdArrowDropup />15.20%</span></p>
            </div>
        </div>
        <div className={styles.suggest}>
            <div className={styles.headerSuggest}>
                <img className={styles.logoSuggest} src={logoImage} alt="logo" style={{width: "25px"}} />
                <p className={styles.nameSuggest}>Bitcoin</p>
                <p className={styles.titleSuggest}>BTC</p>
            </div>
            <div className={styles.mainSuggest}>
                {/* ...... usd change */}
                <p className={styles.usdSuggest}>USD</p>
                <p className={styles.priceSuggest}>43,180.13</p>
            </div>
            <div className={styles.footerSuggest}>
                <p className={styles.timeSuggest}>24h</p>
                <p className={styles.changesSuggest}>+USD 3242.13 <span><IoMdArrowDropup />15.20%</span></p>
            </div>
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <div className={styles.suggest}>
            <div className={styles.headerSuggest}>
                <img className={styles.logoSuggest} src={logoImage} alt="logo" style={{width: "25px"}} />
                <p className={styles.nameSuggest}>Bitcoin</p>
                <p className={styles.titleSuggest}>BTC</p>
            </div>
            <div className={styles.mainSuggest}>
                {/* ...... usd change */}
                <p className={styles.usdSuggest}>USD</p>
                <p className={styles.priceSuggest}>43,180.13</p>
            </div>
            <div className={styles.footerSuggest}>
                <p className={styles.timeSuggest}>24h</p>
                <p className={styles.changesSuggest}>+USD 3242.13 <span><IoMdArrowDropup />15.20%</span></p>
            </div>
        </div>
        <div className={styles.suggest}>
            <div className={styles.headerSuggest}>
                <img className={styles.logoSuggest} src={logoImage} alt="logo" style={{width: "25px"}} />
                <p className={styles.nameSuggest}>Bitcoin</p>
                <p className={styles.titleSuggest}>BTC</p>
            </div>
            <div className={styles.mainSuggest}>
                {/* ...... usd change */}
                <p className={styles.usdSuggest}>USD</p>
                <p className={styles.priceSuggest}>43,180.13</p>
            </div>
            <div className={styles.footerSuggest}>
                <p className={styles.timeSuggest}>24h</p>
                <p className={styles.changesSuggest}>+USD 3242.13 <span><IoMdArrowDropup />15.20%</span></p>
            </div>
        </div>
        <div className={styles.suggest}>
            <div className={styles.headerSuggest}>
                <img className={styles.logoSuggest} src={logoImage} alt="logo" style={{width: "25px"}} />
                <p className={styles.nameSuggest}>Bitcoin</p>
                <p className={styles.titleSuggest}>BTC</p>
            </div>
            <div className={styles.mainSuggest}>
                {/* ...... usd change */}
                <p className={styles.usdSuggest}>USD</p>
                <p className={styles.priceSuggest}>43,180.13</p>
            </div>
            <div className={styles.footerSuggest}>
                <p className={styles.timeSuggest}>24h</p>
                <p className={styles.changesSuggest}>+USD 3242.13 <span><IoMdArrowDropup />15.20%</span></p>
            </div>
        </div>
        <div className={styles.suggest}>
            <div className={styles.headerSuggest}>
                <img className={styles.logoSuggest} src={logoImage} alt="logo" style={{width: "25px"}} />
                <p className={styles.nameSuggest}>Bitcoin</p>
                <p className={styles.titleSuggest}>BTC</p>
            </div>
            <div className={styles.mainSuggest}>
                {/* ...... usd change */}
                <p className={styles.usdSuggest}>USD</p>
                <p className={styles.priceSuggest}>43,180.13</p>
            </div>
            <div className={styles.footerSuggest}>
                <p className={styles.timeSuggest}>24h</p>
                <p className={styles.changesSuggest}>+USD 3242.13 <span><IoMdArrowDropup />15.20%</span></p>
            </div>
        </div>
      </TabPanel>
      <TabPanel value={value} index={2}>
      <div className={styles.suggest}>
            <div className={styles.headerSuggest}>
                <img className={styles.logoSuggest} src={logoImage} alt="logo" style={{width: "25px"}} />
                <p className={styles.nameSuggest}>Bitcoin</p>
                <p className={styles.titleSuggest}>BTC</p>
            </div>
            <div className={styles.mainSuggest}>
                {/* ...... usd change */}
                <p className={styles.usdSuggest}>USD</p>
                <p className={styles.priceSuggest}>43,180.13</p>
            </div>
            <div className={styles.footerSuggest}>
                <p className={styles.timeSuggest}>24h</p>
                <p className={styles.changesSuggest}>+USD 3242.13 <span><IoMdArrowDropup />15.20%</span></p>
            </div>
        </div>
        <div className={styles.suggest}>
            <div className={styles.headerSuggest}>
                <img className={styles.logoSuggest} src={logoImage} alt="logo" style={{width: "25px"}} />
                <p className={styles.nameSuggest}>Bitcoin</p>
                <p className={styles.titleSuggest}>BTC</p>
            </div>
            <div className={styles.mainSuggest}>
                {/* ...... usd change */}
                <p className={styles.usdSuggest}>USD</p>
                <p className={styles.priceSuggest}>43,180.13</p>
            </div>
            <div className={styles.footerSuggest}>
                <p className={styles.timeSuggest}>24h</p>
                <p className={styles.changesSuggest}>+USD 3242.13 <span><IoMdArrowDropup />15.20%</span></p>
            </div>
        </div>
        <div className={styles.suggest}>
            <div className={styles.headerSuggest}>
                <img className={styles.logoSuggest} src={logoImage} alt="logo" style={{width: "25px"}} />
                <p className={styles.nameSuggest}>Bitcoin</p>
                <p className={styles.titleSuggest}>BTC</p>
            </div>
            <div className={styles.mainSuggest}>
                {/* ...... usd change */}
                <p className={styles.usdSuggest}>USD</p>
                <p className={styles.priceSuggest}>43,180.13</p>
            </div>
            <div className={styles.footerSuggest}>
                <p className={styles.timeSuggest}>24h</p>
                <p className={styles.changesSuggest}>+USD 3242.13 <span><IoMdArrowDropup />15.20%</span></p>
            </div>
        </div>
        <div className={styles.suggest}>
            <div className={styles.headerSuggest}>
                <img className={styles.logoSuggest} src={logoImage} alt="logo" style={{width: "25px"}} />
                <p className={styles.nameSuggest}>Bitcoin</p>
                <p className={styles.titleSuggest}>BTC</p>
            </div>
            <div className={styles.mainSuggest}>
                {/* ...... usd change */}
                <p className={styles.usdSuggest}>USD</p>
                <p className={styles.priceSuggest}>43,180.13</p>
            </div>
            <div className={styles.footerSuggest}>
                <p className={styles.timeSuggest}>24h</p>
                <p className={styles.changesSuggest}>+USD 3242.13 <span><IoMdArrowDropup />15.20%</span></p>
            </div>
        </div>
      </TabPanel>
    </Box>
  );
}



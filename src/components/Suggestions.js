import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import styles from "./Suggestions.module.css";

import { IoMdArrowDropup, IoMdArrowDropdown } from "react-icons/io";


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      style={{ width: "100%" }}
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box style={{ padding: "20px 10px", width: "100%" }} sx={{ p: 3 }}>
          <Typography
            component="div"
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            {children}
          </Typography>
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
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs({ coins }) {
  const [value, setValue] = React.useState(0);

  const [coinss, setCoinss] = useState([]);
  const [suggestsCoin, setSuggestsCoin] = useState([]);
  const [lowestCoins, setLowestCoins] = useState([]);
  const [highestCoins, setHighestCoins] = useState([]);

  useEffect(() => {
    setCoinss(coins);
    setSuggestsCoin(coins.slice(0, 4));
    setLowestCoins(
      coinss.sort((a, b) => a.current_price - b.current_price).slice(0, 4)
    );
    setHighestCoins(
      coinss.sort((a, b) => +b.current_price - +a.current_price).slice(0, 4)
    );
  }, [coins, coinss]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="most popular" {...a11yProps(0)} />
          <Tab label="Most profit" {...a11yProps(1)} />
          <Tab label="lowest profit" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel
        component="div"
        className={styles.suggestsContainer}
        value={value}
        index={0}
      >
        {suggestsCoin.map((coin) => (
          <div className={styles.suggest} key={coin.id}>
            <div className={styles.headerSuggest}>
              <img
                className={styles.logoSuggest}
                src={coin.image}
                alt="logo"
                style={{ width: "25px" }}
              />
              <p className={styles.nameSuggest}>{coin.name}</p>
              <p className={styles.titleSuggest}>{coin.symbol.toUpperCase()}</p>
            </div>
            <div className={styles.mainSuggest}>
              {/* ...... usd change */}
              <p className={styles.usdSuggest}>USD</p>
              <p className={styles.priceSuggest}>{coin.current_price}</p>
            </div>
            <div className={styles.footerSuggest}>
              <p className={styles.timeSuggest}>24h</p>
              <p className={styles.changesSuggest}>
                +USD {coin.price_change_24h.toFixed(2)}{" "}
                <span
                  className={`${
                    coin.price_change_percentage_24h > 0 && styles.redChange
                  } ${
                    coin.price_change_percentage_24h < 0 && styles.greenChange
                  }`}
                >
                  {coin.price_change_percentage_24h > 0 && <IoMdArrowDropdown />}
                  {coin.price_change_percentage_24h < 0 && <IoMdArrowDropup />}
                  {coin.price_change_percentage_24h.toFixed(1)}%
                </span>
              </p>
            </div>
          </div>
        ))}
      </TabPanel>
      <TabPanel value={value} index={1}>
        {highestCoins.map((coin) => (
          <div className={styles.suggest} key={coin.id}>
            <div className={styles.headerSuggest}>
              <img
                className={styles.logoSuggest}
                src={coin.image}
                alt="logo"
                style={{ width: "25px" }}
              />
              <p className={styles.nameSuggest}>{coin.name}</p>
              <p className={styles.titleSuggest}>{coin.symbol.toUpperCase()}</p>
            </div>
            <div className={styles.mainSuggest}>
              {/* ...... usd change */}
              <p className={styles.usdSuggest}>USD</p>
              <p className={styles.priceSuggest}>{coin.current_price}</p>
            </div>
            <div className={styles.footerSuggest}>
              <p className={styles.timeSuggest}>24h</p>
              <p className={styles.changesSuggest}>
                +USD {coin.price_change_24h.toFixed(2)}
                <span 
                  className={`${
                    coin.price_change_percentage_24h > 0 && styles.redChange
                  } ${
                    coin.price_change_percentage_24h < 0 && styles.greenChange
                  }`}
                >
                  {coin.price_change_percentage_24h > 0 && <IoMdArrowDropdown />}
                  {coin.price_change_percentage_24h < 0 && <IoMdArrowDropup />}
                  {coin.price_change_percentage_24h.toFixed(1)}%
                </span>
              </p>
            </div>
          </div>
        ))}
      </TabPanel>
      <TabPanel value={value} index={2}>
        {lowestCoins.map((coin) => (
          <div className={styles.suggest} key={coin.id}>
            <div className={styles.headerSuggest}>
              <img
                className={styles.logoSuggest}
                src={coin.image}
                alt="logo"
                style={{ width: "25px" }}
              />
              <p className={styles.nameSuggest}>{coin.name}</p>
              <p className={styles.titleSuggest}>{coin.symbol.toUpperCase()}</p>
            </div>
            <div className={styles.mainSuggest}>
              {/* ...... usd change */}
              <p className={styles.usdSuggest}>USD</p>
              <p className={styles.priceSuggest}>{coin.current_price}</p>
            </div>
            <div className={styles.footerSuggest}>
              <p className={styles.timeSuggest}>24h</p>
              <p className={styles.changesSuggest}>
                +USD {coin.price_change_24h.toFixed(2)}{" "}
                <span
                  className={`${
                    coin.price_change_percentage_24h > 0 && styles.redChange
                  } ${
                    coin.price_change_percentage_24h < 0 && styles.greenChange
                  }`}
                >
                  {coin.price_change_percentage_24h > 0 && <IoMdArrowDropdown />}
                  {coin.price_change_percentage_24h < 0 && <IoMdArrowDropup />}
                  {coin.price_change_percentage_24h.toFixed(1)}%
                </span>
              </p>
            </div>
          </div>
        ))}
      </TabPanel>
    </Box>
  );
}

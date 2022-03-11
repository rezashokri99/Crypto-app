import React from 'react';
import styles from "./Coin.module.css";
import logoImage from "../images/logo.png";



const Coin = () => {
    return (
        <div className={styles.coinContainer}>
              <p className={styles.coinName}>
                <img className={styles.coinImage} src={logoImage} alt={2} />
                Bitcoin
              </p>
              <p className={styles.coinSymbol}>{("BTC").toUpperCase()}</p>
              <p className={styles.coinCurrentPrice}>$ {("39,138").toLocaleString()}</p>
              <p className={`${styles.coinChangePrice24h} ${0.45 > 0 && styles.greenChangePrice} ${0.45 < 0 && styles.redChangePrice}`}>{(0.45).toFixed(2)}</p>
              <p className={styles.coinHighChange}>$ {("39,138").toLocaleString()}</p>
              <p className={styles.coinLowChange}>$ {("39,138").toLocaleString()}</p>
              <p className={styles.coinMarketCap}>{("742525511822").toLocaleString()}</p>
        </div>
    );
}
 
export default Coin;
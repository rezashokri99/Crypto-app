import React from 'react';
import styles from "./Coin.module.css";



const Coin = (props) => {
    return (
        <div className={styles.coinContainer}>
              <p className={styles.coinName}>
                <img className={styles.coinImage} src={props.image} alt={2} />
                {props.name}
              </p>
              <p className={styles.coinSymbol}>{(props.symbol).toUpperCase()}</p>
              <p className={styles.coinCurrentPrice}>$ {(props.currentPrice).toLocaleString()}</p>
              <p className={`${styles.coinChangePrice24h} ${props.changePrice24h > 0 && styles.greenChangePrice} ${props.changePrice24h < 0 && styles.redChangePrice}`}>{(props.changePrice24h).toFixed(2)}</p>
              <p className={styles.coinHighChange}>$ {(props.changeHigh24h).toLocaleString()}</p>
              <p className={styles.coinLowChange}>$ {(props.changeLow24h).toLocaleString()}</p>
              <p className={styles.coinMarketCap}>{(props.marketCap).toLocaleString()}</p>
              <div className={styles.coinButtons}>
                <a href='#1' className={styles.coinBuyBtn}>Buy</a>
                <a href='#1' className={styles.coinTradeBtn}>Trade</a>
              </div>
        </div>
    );
}
 
export default Coin;
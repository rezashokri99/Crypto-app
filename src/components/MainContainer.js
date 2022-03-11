import React from 'react';
import Coin from "./Coin"
import styles from "./MainContainer.module.css";
import { BiCode } from "react-icons/bi";



const MainContainer = () => {
    return (
        <div>
            <div className={styles.coinsContainer}>
                <div className={styles.thTop}>
                    <p className={styles.coinName}>Token Name <BiCode /></p>
                    <p className={styles.coinSymbol}>Symbol</p>
                    <p className={styles.coinSymbol}>Price <BiCode /></p>
                    <p className={styles.coinCurrentPrice}>24h %</p>
                    <p className={styles.coinCurrentPrice}>High-24h <BiCode /></p>
                    <p className={styles.coinCurrentPrice}>low-24h <BiCode /></p>
                    <p className={styles.coinMarketCap}>Market Cap <BiCode /></p>
                </div>
                <Coin />
                <Coin />
                <Coin />
                <Coin />
                <Coin />
                <Coin />
            </div>
            {/* {
                filteredcoins.length ?
                <div className="coinsContainer">
                  {filteredcoins.map((coin) => <Coin 
                      key={coin.id}
                      id={coin.id}
                      symbol={coin.symbol}
                      image={coin.image}
                      currentPrice={coin.current_price}
                      changePrice24h={coin.price_change_percentage_24h}
                      marketCap={coin.market_cap}
                    />
                  )}
                </div>
                : "hello"
            } */}
        </div>
    );
}
 
export default MainContainer;
import React from 'react';
import Coin from "./Coin"
import styles from "./MainContainer.module.css";
import { BiCode } from "react-icons/bi";
import Loader from "./Loader";



const MainContainer = ({filteredcoins}) => {

    return (
        <div>
            {
                filteredcoins.length > 1 ?
                <div className={styles.coinsContainer}>
                    <div className={styles.thTop}>
                        <p className={styles.coinsName}>Token Name <BiCode /></p>
                        <p className={styles.coinsSymbol}>Symbol</p>
                        <p className={styles.coinsPrice}>Price <BiCode /></p>
                        <p className={styles.coinsCurrentPrice}>24h %</p>
                        <p className={styles.coinHighChange}>High-24h <BiCode /></p>
                        <p className={styles.coinLowChange}>low-24h <BiCode /></p>
                        <p className={styles.coinMarketCap}>Market Cap <BiCode /></p>
                        <p className={styles.coinActions}>Actions</p>
                    </div>
                    {
                        
                        <div className="coinsContainer">

                        {filteredcoins.map((coin) => <Coin
                            key={coin.id}
                            id={coin.id}
                            name={coin.id}
                            symbol={coin.symbol}
                            image={coin.image}
                            currentPrice={coin.current_price}
                            changePrice24h={coin.price_change_percentage_24h}
                            changeLow24h={coin.low_24h}
                            changeHigh24h={coin.high_24h}
                            marketCap={coin.market_cap}
                            />
                        )}
                        </div>
                    }
                </div>  
                    :
                    <Loader />
            }
        </div>
    );
}
 
export default MainContainer;
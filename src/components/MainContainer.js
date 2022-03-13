import React, { useEffect, useState } from 'react';
import Coin from "./Coin"
import styles from "./MainContainer.module.css";
import { BiCode } from "react-icons/bi";
import Loader from "./Loader";
import SearchInput from './SearchInput/SearchInput';
import { ToastContainer } from 'react-toastify';



const MainContainer = ({filteredcoins, setFilteredcoins, search, setSearch}) => {

    let [coins, setCoins] = useState([]);
    let [highestChange24h, setHighestChange24h] = useState([]);
    let [highestPrice, setHighestPrice] = useState([]);
    let [highestPrice24h, setHighestPrice24h] = useState([]);
    let [lowestPrice24h, setLowestPrice24h] = useState([]);
    let [marketCap, setMarketCap] = useState([]);



    useEffect(() => {
        setCoins(filteredcoins);
    },[coins, filteredcoins])

    const HighestChange24hHandler = () => {
        setHighestChange24h(coins.sort((a, b) => b.price_change_percentage_24h - a.price_change_percentage_24h));
        setHighestPrice([]);
        setHighestPrice24h([]);
        setLowestPrice24h([]);
        setMarketCap([]);
    }

    const HighestPricehHandler = () => {
        setHighestPrice(coins.sort((a, b) => b.current_price - a.current_price));
        setHighestChange24h([]);
        setHighestPrice24h([]);
        setLowestPrice24h([]);
        setMarketCap([]);
    }
    const HighestPrice24hHandler = () => {
        setHighestPrice24h(coins.sort((a, b) => b.high_24h - a.high_24h));
        setHighestPrice([]);
        setHighestChange24h([]);
        setLowestPrice24h([]);
        setMarketCap([]);
    }

    const lowestPrice24hHandler = () => {
        setLowestPrice24h(coins.sort((a, b) => a.low_24h - b.low_24h));
        setHighestPrice24h([]);
        setHighestPrice([]);
        setHighestChange24h([]);
        setMarketCap([]);

    }

    const marketCapHandler = () => {
        setMarketCap(coins.sort((a, b) => a.market_cap_rank - b.market_cap_rank))
        setLowestPrice24h([]);
        setHighestPrice24h([]);
        setHighestPrice([]);
        setHighestChange24h([]);
    }




    return (
        <div className={styles.MainContainer}>
            <SearchInput search={search} setSearch={setSearch} />
            {
                filteredcoins ?
                <div className={styles.coinsContainer}>
                    <div className={styles.thTop}>
                        <p className={styles.coinsName}>Token Name</p>
                        <p className={styles.coinsSymbol}>Symbol</p>
                        <p className={styles.coinsPrice}>Price <BiCode onClick={HighestPricehHandler} /></p>
                        <p className={styles.coinsCurrentPrice}>change 24h <BiCode onClick={HighestChange24hHandler} /></p>
                        <p className={styles.coinHighChange}>High-24h <BiCode onClick={HighestPrice24hHandler} /></p>
                        <p className={styles.coinLowChange}>low-24h <BiCode onClick={lowestPrice24hHandler} /></p>
                        <p className={styles.coinMarketCap}>Market Cap <BiCode onClick={marketCapHandler} /></p>
                        <p className={styles.coinActions}>Actions</p>
                    </div>
                    {
                        
                        <div className="coinsContainer">
                        {(highestChange24h.length > 1 ? highestChange24h : highestPrice.length > 1 ? highestPrice : highestPrice24h.length > 1 ? highestPrice24h : lowestPrice24h.length > 1 ? lowestPrice24h : marketCap > 1 ? marketCap : filteredcoins ).map((coin) => <Coin
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
            <ToastContainer />

        </div>
    );
}
 
export default MainContainer;
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styles from "./CoinDetails.module.css";
import Notify from './Notify';
import { Line } from 'react-chartjs-2';
import axios from 'axios';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js'
  import { Chart } from 'react-chartjs-2'
import { ToastContainer } from 'react-toastify';
import { useSelector } from 'react-redux';
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  )

const CoinDetails = () => {
    const [coinss, setCoinss] = useState([]);
    const [coinData, setCoinData] = useState(null);
    // let [data, setData] = useState(null);
    // let [options, setoptions] = useState(null);
    
    const coinPrice = [];
    const coinTimestamp = [];
    let data = [];
    let options = [];
    
    const { id } = useParams();
    const coinsApi = useSelector(state => state.coins);

    const selectedCoins = coinsApi && coinsApi.find((coin) => coin.id === id);
    
    
    const buyHandler = (e) => {
        e.preventDefault();
        Notify(`${selectedCoins.id} purchase was successful.`, "success");
    }
    
    
    // const coinsApi = useContext(apiContext);

    useEffect(() => {
        
        axios.get(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=30&interval=daily`)
        .then((response) => setCoinData(response.data));
    }, [])

    

    if (coinData) { 
    
        for (let i = 0; i < coinData.prices.length; i++) {
            coinPrice.push(coinData.prices[i][1]);
            coinTimestamp.push(new Date(coinData.prices[i][0]).toLocaleDateString());
        }
        
        // const DATA_COUNT = 7;
        // const NUMBER_CFG = {count: DATA_COUNT, min: -100, max: 100};

        // const labels = Utils.months({count: 7});
        // data = {
        // labels: coinTimestamp,
        // datasets: [
        //     {
        //     label: 'Dataset 1',
        //     data: coinPrice,
        //     borderColor: "red",
        //     backgroundColor: "red",
            // },
            // {
            // label: 'Dataset 2',
            // data: Utils.numbers(NUMBER_CFG),
            // borderColor: Utils.CHART_COLORS.blue,
            // backgroundColor: Utils.transparentize(Utils.CHART_COLORS.blue, 0.5),
            // }
        // ]
        // };


        //  data = {
        //     labels: coinTimestamp,
        //     datasets: [
        //         {
        //             label: "Price in USD",
        //             data: coinPrice,
        //             fill: false,
        //             backgroundColor: "#0071bd",
        //             borderColor: "#0071bd"
        //         }
        //     ]
        // }

        data = {
            labels: coinTimestamp,
            datasets: [{
              label: `${id} Chart`,
              backgroundColor: "#7cb5ec",
              borderColor: "#7cb5ec",
              data: coinPrice,
              fill: false,
            }]
        };
        

        // options = {
        //     scales: {
        //         yAxes: [
        //             {
        //                 ticks: {
        //                     beginAtZero: true
        //                 }
        //             }
        //         ]
        //     }
        // }
    }
    const navigate = useNavigate();
   
    const backToHomeHandler = () => {
        navigate(-1);
    }


    return (
        data && coinData ? <div className={styles.coinContainer}>
        
        <div className={styles.coinContent}>
            <div className={styles.coinChart}>
            <Line
                data={data}
                />

            </div>

            <div className={styles.coinInfo}>
                <div className={styles.coinHeader}>
                    <p className={styles.coinNameContainer}>
                        <span className={styles.coinName}>{selectedCoins.id}</span>
                        <span className={styles.coinSymbol}>{(selectedCoins.symbol).toUpperCase()}</span>
                    </p>
                    <img src={selectedCoins.image} alt={selectedCoins.id} className={styles.coinLogo} />
                </div>

                <div className={styles.coinMainContainer}>
                        <div className={styles.coinPrice}>
                            <span>
                                Bitcoin Price
                            </span>
                            <span>
                                $ {(selectedCoins.current_price).toLocaleString()}
                            </span>    
                        </div>
                        <div className={styles.marketCap}>
                            <span>
                                Market Cap
                            </span>
                            <span>
                                $ {(selectedCoins.market_cap).toLocaleString()}
                            </span>    
                        </div>
                        <div>
                            <span>
                                change percentage 24h
                            </span>
                            <span className={`${selectedCoins.price_change_percentage_24h > 0 && styles.greenChangePrice} ${selectedCoins.price_change_percentage_24h < 0 && styles.redChangePrice}`}>
                                {selectedCoins.price_change_percentage_24h} %
                            </span>    
                        </div>
                        <div className={styles.marketCapRank}>
                            <span>
                                Market Cap Rank
                            </span>
                            <span>
                                #{selectedCoins.market_cap_rank}
                            </span>  
                        </div>
                        <div className={styles.coinChanges24h}>
                            <span>
                                24h Low / 24h High
                            </span>
                            <span>
                                $ {(selectedCoins.low_24h).toLocaleString()} / $ {(selectedCoins.high_24h).toLocaleString()}
                            </span>
                        </div>
                </div>
                <ToastContainer />


                <div className={styles.coinFooter}>
                    <a href='#1' className={styles.coinBuyBtn} onClick={buyHandler}>Buy</a>
                    <a href='#1' className={styles.coinTradeBtn}>Trade</a>
                </div>
            </div>

        </div>
        <div className={styles.buttonContainer}>
            <a href='#4' onClick={backToHomeHandler}>Back To Home</a>
        </div>

    </div> :
    ""
    );


}
 
export default React.memo(CoinDetails);
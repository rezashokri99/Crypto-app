import React from 'react';
import styles from "./Header.module.css";
import Navbar from './Navbar';


const Header = () => {
    return (
        <div className={styles.headerContainer}>
            <Navbar />
            <div className={styles.titleContainer}>
                <p className={styles.title}>Today's Cryptocurrency Prices by <span>NEFA</span> </p>
                <p className={styles.cryptoMarketTitle}>the global crypto market cap is <span>$1.84T</span> </p>
            </div>
        </div>
    );
}
 
export default Header;
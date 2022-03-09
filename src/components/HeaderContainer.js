import React from 'react';
import Header from './Header';
import styles from "./HeaderContainer.module.css"; 
import Suggestions from "./Suggestions";



const HeaderContainer = () => {
    return (
        <div className={styles.headerContainer}>
            <Header />
            <div className={styles.suggestions}>
                <Suggestions />
            </div>
        </div>
    );
}
 
export default HeaderContainer;
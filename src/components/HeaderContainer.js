import React from 'react';
import Header from './Header';
import styles from "./HeaderContainer.module.css"; 
import Suggestions from "./Suggestions";



const HeaderContainer = ({coins}) => {
    return (
        <div className={styles.headerContainer}>
            <Header />
            <div className={styles.suggestions}>
                <Suggestions coins={coins} />
            </div>
        </div>
    );
}
 
export default HeaderContainer;
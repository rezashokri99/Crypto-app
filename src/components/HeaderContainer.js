import React from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import Header from './Header';
import styles from "./HeaderContainer.module.css"; 
import Suggestions from "./Suggestions";



const HeaderContainer = (props) => {

    const pathLocation = useLocation().pathname;
    

    return (
        <div className={styles.headerContainer}>
            <Header />
            {
                pathLocation.includes("/coin/") ? "" : <div className={styles.suggestions}>
                <Suggestions {...props} />
            </div>
            }
            
        </div>
    );
}
 
export default HeaderContainer;
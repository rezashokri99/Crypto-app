import React, { useRef } from 'react';
import styles from "./Navbar.module.css";
import logoImage from "../images/logo.png";
import { Link } from 'react-router-dom';


const Navbar = () => {


    const detailsRef = useRef();

    const blurHandler = () => {
        if(detailsRef.current.open) {
            detailsRef.current.open = false;
        }
    }


    return (
        <div className={styles.navbarContainer}>
            
            <div className={styles.menu}>
                <div className={styles.navbarLogo}>
                    <img src={logoImage} alt="logo" />
                </div>
                <ul className={styles.listMenu}>
                    <li><Link to={"/"}>Cryptocuurendy</Link></li>
                    <li><a href='#2'>Exchanges</a></li>
                    <li><a href='#3'>Watchlist</a></li>
                    <li><a href='#4'>NFT</a></li>
                    <li><a href='#5'>Portfolio</a></li>
                    <li>
                        
                        <details ref={detailsRef} className={styles.customSelect} onBlur={blurHandler}>
                            <summary className={styles.radios}>
                                <input type="radio" name="item" id="default" title="Products" checked={true} readOnly/>
                                <input type="radio" name="item" id="account" title="account" />
                                <input type="radio" name="item" id="calendar" title="calendar" />
                                <input type="radio" name="item" id="chat" title="chat" />
                            </summary>
                            <ul className={styles.list}>
                                <li>
                                    <label htmlFor="account">account</label>
                                </li>
                                <li>
                                    <label htmlFor="calendar">calendar</label>
                                </li>
                                <li>
                                    <label htmlFor="chat">chat</label>
                                </li>
                            </ul>
                        </details>    
                        
                    </li>
                </ul>
            </div>
            <div className={styles.loginButtons}>
                <a href='#3' className={styles.loginBtn}>Log In</a>
                <a href='#3' className={styles.signUpBtn}>Sign Up</a>
            </div>
        </div>
    );
}
 
export default Navbar;
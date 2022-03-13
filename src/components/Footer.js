import React from 'react';
import styles from "./Footer.module.css";
import logoImage from "../images/logo.png";
import { HiArrowNarrowRight } from "react-icons/hi";



const Footer = () => {
    return (
        <div className={styles.footerContainer}>
            <div className={styles.footerContent}>
                <div className={styles.footerLogo}>
                    <img src={logoImage} alt="logo" style={{width: "70px"}}/>
                </div>
                <div className={styles.FooterInfoOne}>
                    <p>Buy Crypto</p>   
                    <p>Exchanges</p>   
                    <p>Warchlist</p>   
                    <p>Portfolio</p>   
                    <p>NFT</p>   
                </div>
                <div className={styles.FooterInfoTwo}>
                    <p>Products</p>    
                    <p>About Us</p>    
                    <p>Careers</p>    
                    <p>Blog</p>    
                    <p>Security</p>    
                </div>
                <div className={styles.FooterInfoThere}>
                    <p>Help Center</p>
                    <p>Contact Us</p>
                    <p>System</p>
                    <p>Area of Avalibility</p>
                    <p>Privacy Policy</p>
                </div>
                <div className={styles.FooterInfoFour}>
                    <p>Newsletter</p>
                    <p>Never miss anything crypto when you're on the go</p>
                    <div className={styles.sendEmailContainer}>
                        <input placeholder='Enter Your email' />
                        <a href='#1' ><HiArrowNarrowRight /></a>
                    </div>
                </div>
                
            </div>
            <p className={styles.footerText}>Copyright 2022 NEFA LLC. All rights reseved</p>
        </div>
    );
}
 
export default Footer;
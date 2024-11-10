import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContent}>
                <div className={styles.contactInfo}>
                    <p className={styles.phoneNumber}>+7952347 78 87</p>
                    <p className={styles.email}>SOZIDAI@MAIL.RU</p>
                </div>
                <div className={styles.brandInfo}>
                    <h2 className={styles.brandName}>sozidai</h2>
                    <p className={styles.tagline}>Modular design. Composition</p>
                    <p className={styles.copyright}>© 2024 All rights reserved</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
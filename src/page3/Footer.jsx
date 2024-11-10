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
                    <div className={styles.copyrightInfo}>
                        <p>Modular design. Composition</p>
                        <p>&copy; 2024 All rights reserved</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
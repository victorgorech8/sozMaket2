import React from 'react';
import styles from './PersonalCabinet.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContact}>
                <p className={styles.footerPhone}>+7952347 78 87</p>
                <p className={styles.footerEmail}>SOZIDAI@MAIL.RU</p>
            </div>
            <div className={styles.footerLogo}>
                <h2 className={styles.footerLogoText}>sozidai</h2>
                <div className={styles.footerCopyright}>
                    <p className={styles.copyrightText}>Modular design. Composition</p>
                    <p className={styles.copyrightYear}>© 2024 All rights reserved</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
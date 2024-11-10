import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.contactInfo}>
                <p className={styles.phone}>+7952347 78 87</p>
                <p className={styles.email}>SOZIDAI@MAIL.RU</p>
            </div>
            <div className={styles.branding}>
                <h2 className={styles.logo}>sozidai</h2>
                <div className={styles.copyright}>
                    <p>Modular design. Composition</p>
                    <p>© 2024 All rights reserved</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
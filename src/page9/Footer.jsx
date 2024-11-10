import React from 'react';
import styles from './Footer.module.css';

function Footer() {
    return (
        <footer className={styles.footer}>
            <p className={styles.footerText}>Modular design. Composition</p>
            <p className={styles.footerCopyright}>© 2024 All rights reserved</p>
        </footer>
    );
}

export default Footer;
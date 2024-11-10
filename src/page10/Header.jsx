import React from 'react';
import React from 'react';
import styles from './PersonalCabinet.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.headerContent}>
                <h1 className={styles.logo}>sozidai</h1>
                <nav className={styles.navLinks}>
                    <a href="#" className={styles.navLink}>КАРТИНЫ</a>
                    <a href="#" className={styles.navLink}>ХУДОЖНИКИ</a>
                    <a href="#" className={styles.navLink}>О КОМПАНИИ</a>
                    <a href="#" className={styles.navLink}>АУКЦИОН</a>
                </nav>
                <div className={styles.userLinks}>
                    <a href="#" className={styles.navLink}>ИЗБРАННОЕ</a>
                    <a href="#" className={styles.navLink}>ЛИЧНЫЙ КАБИНЕТ</a>
                </div>
            </div>
            <div className={styles.headerDivider}></div>
        </header>
    );
};

export default Header;
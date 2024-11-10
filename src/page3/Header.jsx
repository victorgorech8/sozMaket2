import React from 'react';
import styles from './Header.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
            <h1 className={styles.logo}>sozidai</h1>
            <nav className={styles.navigation}>
                <ul className={styles.navList}>
                    <li><a href="#paintings" className={styles.navLink}>КАРТИНЫ</a></li>
                    <li><a href="#artists" className={styles.navLink}>ХУДОЖНИКИ</a></li>
                    <li><a href="#about" className={styles.navLink}>О КОМПАНИИ</a></li>
                    <li><a href="#auction" className={styles.navLink}>АУКЦИОН</a></li>
                </ul>
            </nav>
            <div className={styles.userActions}>
                <a href="#favorites" className={styles.actionLink}>ИЗБРАННОЕ</a>
                <a href="#account" className={styles.actionLink}>ЛИЧНЫЙ КАБИНЕТ</a>
            </div>
        </header>
    );
};

export default Header;
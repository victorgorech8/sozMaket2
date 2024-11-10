import React from 'react';
import styles from './Header.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.headerContent}>
                <h1 className={styles.logo}>sozidai</h1>
                <nav className={styles.mainNav}>
                    <ul>
                        <li><a href="#paintings">КАРТИНЫ</a></li>
                        <li><a href="#artists">ХУДОЖНИКИ</a></li>
                        <li><a href="#about">О КОМПАНИИ</a></li>
                        <li><a href="#auction">АУКЦИОН</a></li>
                    </ul>
                </nav>
                <nav className={styles.userNav}>
                    <ul>
                        <li><a href="#favorites">ИЗБРАННОЕ</a></li>
                        <li><a href="#account">ЛИЧНЫЙ КАБИНЕТ</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
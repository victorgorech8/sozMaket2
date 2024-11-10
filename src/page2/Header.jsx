import React from 'react';
import styles from './Header.module.css';
import SearchBar from './SearchBar';
import UserActions from './UserActions';

const Header = () => {
    const navItems = ['КАРТИНЫ', 'ХУДОЖНИКИ', 'О КОМПАНИИ', 'АУКЦИОН'];

    return (
        <header className={styles.header}>
            <h1 className={styles.logo}>лого</h1>
            <nav className={styles.navigation}>
                {navItems.map((item, index) => (
                    <a key={index} href="#" className={styles.navItem}>{item}</a>
                ))}
            </nav>
            <SearchBar />
            <UserActions />
        </header>
    );
};

export default Header;
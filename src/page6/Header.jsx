import React from 'react';
import styles from './Header.module.css';

const Header = () => {
    const navItems = [
        { name: 'КАРТИНЫ', className: styles.navItem },
        { name: 'ХУДОЖНИКИ', className: styles.navItem },
        { name: 'О КОМПАНИИ', className: styles.navItem },
        { name: 'АУКЦИОН', className: styles.navItem },
        { name: 'ИЗБРАННОЕ', className: styles.userAction },
        { name: 'ЛИЧНЫЙ КАБИНЕТ', className: styles.userAction },
    ];

    return (
        <header className={styles.header}>
            <div className={styles.headerContent}>
                <h1 className={styles.logo}>sozidai</h1>
                <nav className={styles.navigation}>
                    {navItems.map((item, index) => (
                        <a key={index} href="#" className={item.className}>
                            {item.name}
                        </a>
                    ))}
                </nav>
            </div>
        </header>
    );
};

export default Header;
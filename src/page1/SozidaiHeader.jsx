import React from 'react';
import styles from './SozidaiHeader.module.css';

const SozidaiHeader = () => {
    const navItems = [
        { name: 'КАРТИНЫ', className: styles.navItem },
        { name: 'ХУДОЖНИКИ', className: styles.navItem },
        { name: 'О КОМПАНИИ', className: styles.navItem },
        { name: 'АУКЦИОН', className: styles.navItem },
    ];

    const userItems = [
        { name: 'ИЗБРАННОЕ', className: styles.userItem },
        { name: 'ЛИЧНЫЙ КАБИНЕТ', className: styles.userItem },
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
                <div className={styles.userActions}>
                    {userItems.map((item, index) => (
                        <a key={index} href="#" className={item.className}>
                            {item.name}
                        </a>
                    ))}
                </div>
            </div>
        </header>
    );
};

export default SozidaiHeader;
import React from "react";
import styles from "./Header.module.css";

function Header() {
    const navItems = ["КАРТИНЫ", "ХУДОЖНИКИ", "О КОМПАНИИ", "АУКЦИОН"];
    const userActions = ["ИЗБРАННОЕ", "ЛИЧНЫЙ КАБИНЕТ"];

    return (
        <header className={styles.header}>
            <div className={styles.headerContent}>
                <h1 className={styles.logo}>sozidai</h1>
                <nav className={styles.mainNav}>
                    <ul>
                        {navItems.map((item, index) => (
                            <li key={index}>
                                <a href="#" className={styles.navLink}>
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
                <div className={styles.userActions}>
                    {userActions.map((action, index) => (
                        <a key={index} href="#" className={styles.actionLink}>
                            {action}
                        </a>
                    ))}
                </div>
            </div>
        </header>
    );
}

export default Header;
import React from 'react';
import styles from './NuanceAndIdentity.module.css';
import Header from './Header';
import Settings from './Settings';
import Footer from './Footer';

const NuanceAndIdentity = () => {
    return (
        <div className={styles.nuanceAndIdentity}>
            <Header />
            <main className={styles.mainContent}>
                <Settings />
            </main>
            <Footer />
        </div>
    );
};

export default NuanceAndIdentity;
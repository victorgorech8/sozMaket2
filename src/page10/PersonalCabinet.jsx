import React from 'react';
import styles from './PersonalCabinet.module.css';
import Header from './Header';
import ProfileSection from './ProfileSection';
import GallerySection from './GallerySection';
import SubscriptionSection from './SubscriptionSection';
import BonusSection from './BonusSection';
import Footer from './Footer';

const PersonalCabinet = () => {
    return (
        <div className={styles.container}>
            <Header />
            <main className={styles.mainContent}>
                <div className={styles.titleBar}>
                    <h1 className={styles.pageTitle}>ЛИЧНЫЙ КАБИНЕТ</h1>
                    <div className={styles.settingsWrapper}>
                        <span className={styles.settingsText}>настройки</span>
                        <div className={styles.hamburgerIcon}>
                            <div className={styles.hamburgerLine}></div>
                            <div className={styles.hamburgerLine}></div>
                            <div className={styles.hamburgerLine}></div>
                        </div>
                    </div>
                </div>
                <ProfileSection />
                <button className={styles.auctionButton}>аукцион</button>
                <GallerySection />
                <SubscriptionSection />
                <BonusSection />
            </main>
            <Footer />
        </div>
    );
};

export default PersonalCabinet;
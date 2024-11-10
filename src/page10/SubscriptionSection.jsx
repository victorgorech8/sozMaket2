import React from 'react';
import styles from './PersonalCabinet.module.css';

const SubscriptionSection = () => {
    return (
        <section className={styles.subscriptionSection}>
            <h2>ПОДПИСКА</h2>
            <div className={styles.subscriptionContent}>
                <div className={styles.subscriptionPlan}>
                    <div className={styles.planHeader}>
                        <span className={styles.planName}>макси</span>
                        <span className={styles.planPrice}>500р/мес</span>
                    </div>
                    <ul className={styles.planFeatures}>
                        <li>что входит в подписку</li>
                        <li>что входит в подписку</li>
                        <li>что входит в подписку</li>
                    </ul>
                    <div className={styles.planValidity}>доступна до 21.09.24</div>
                </div>
            </div>
        </section>
    );
};

export default SubscriptionSection;
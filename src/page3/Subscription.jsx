import React from 'react';
import styles from './Subscription.module.css';

const SubscriptionPlan = ({ title, price, features }) => (
    <div className={styles.subscriptionPlan}>
        <div className={styles.planHeader}>
            <h3 className={styles.planTitle}>{title}</h3>
            <p className={styles.planPrice}>{price}</p>
        </div>
        <ul className={styles.planFeatures}>
            {features.map((feature, index) => (
                <li key={index} className={styles.featureItem}>{feature}</li>
            ))}
        </ul>
        <button className={styles.subscribeButton}>подписаться</button>
    </div>
);

const Subscription = () => {
    const plans = [
        {
            title: 'стандарт',
            price: '99р/мес',
            features: [
                'что входит в подписку',
                'что входит в подписку',
                'что входит в подписку'
            ]
        },
        {
            title: 'средний',
            price: '300р/мес',
            features: [
                'что входит в подписку',
                'что входит в подписку',
                'что входит в подписку'
            ]
        },
        {
            title: 'макси',
            price: '500р/мес',
            features: [
                'что входит в подписку',
                'что входит в подписку',
                'что входит в подписку'
            ]
        }
    ];

    return (
        <section className={styles.subscriptionSection}>
            <h2 className={styles.sectionTitle}>ПОДПИСКА</h2>
            <div className={styles.plansContainer}>
                {plans.map((plan, index) => (
                    <SubscriptionPlan key={index} {...plan} />
                ))}
            </div>
        </section>
    );
};

export default Subscription;
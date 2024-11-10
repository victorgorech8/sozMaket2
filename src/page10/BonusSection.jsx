import React from 'react';
import styles from './PersonalCabinet.module.css';

const BonusSection = () => {
    return (
        <section className={styles.bonusSection}>
            <h2>БОНУСЫ</h2>
            <div className={styles.bonusContent}>
                <div className={styles.bonusGrid}>
                    {[1, 2, 3].map((index) => (
                        <div key={index} className={styles.bonusCard}>
                            <h3 className={styles.bonusTitle}>скидка в худ магазин</h3>
                            <div className={styles.bonusDetails}>
                                <span className={styles.bonusPercentage}>10%</span>
                                <p className={styles.bonusCode}>кодовое слово &lt;кисть 24&gt;</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BonusSection;
import React from 'react';
import styles from './Settings.module.css';

const Settings = () => {
    const settingsOptions = [
        'МОЯ ЛИЧНАЯ ИНФОРМАЦИЯ',
        'ИНФОРМАЦИЯ АДРЕСА',
        'МОЯ ПОДПИСКА',
        'МОИ ЗАКАЗЫ И ОТЗЫВЫ',
        'ИЗБРАННОЕ',
        'КОНТАКТЫ СО СЛУЖБОЙ ПОДДЕРЖКИ'
    ];

    return (
        <section className={styles.settingsSection}>
            <h2 className={styles.settingsTitle}>настройки</h2>
            <ul className={styles.settingsList}>
                {settingsOptions.map((option, index) => (
                    <li key={index} className={styles.settingsItem}>{option}</li>
                ))}
            </ul>
        </section>
    );
};

export default Settings;
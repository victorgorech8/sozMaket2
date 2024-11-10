import React from 'react';
import styles from './PersonalCabinet.module.css';

const ProfileSection = () => {
    return (
        <section className={styles.profileSection}>
            <div className={styles.profileContent}>
                <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/433b409907d27e7c6bf1fbeee482e725f8ffee6ebaab615a117fc882f4e72e6c?placeholderIfAbsent=true&apiKey=4115a1a389194939a31d761b1865954f" alt="Profile" className={styles.profileImage} />
                <div className={styles.profileInfo}>
                    <h2 className={styles.profileName}>Анна Аверина</h2>
                    <p className={styles.profileDetails}>
                        никнейм: Анна <br />
                        Город: Новосибирск <br />
                        жанр: флюид <br />
                        Образование: НГПУ <br />
                        Контакты: anna@mail.ru
                    </p>
                </div>
            </div>
        </section>
    );
};

export default ProfileSection;
import React from 'react';
import styles from './ArtistProfile.module.css';

const ArtistProfile = () => {
    return (
        <section className={styles.artistProfile}>
            <div className={styles.profileContent}>
                <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/66ca0f695934e390bcf5af40bf53fc170e88ce4fc530b858c7724f38efd34428?placeholderIfAbsent=true&apiKey=4115a1a389194939a31d761b1865954f" alt="Artist portrait" className={styles.artistImage} />
                <div className={styles.artistInfo}>
                    <h2 className={styles.sectionTitle}>о художнике:</h2>
                    <ul className={styles.artistDetails}>
                        <li>никнейм: Анна</li>
                        <li>Город: Новосибирск</li>
                        <li>жанр: флюид</li>
                        <li>Образование: НГПУ</li>
                        <li>Контакты: anna@mail.ru</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default ArtistProfile;
import React from 'react';
import styles from './ArtistProfile.module.css';

const ArtistProfile = ({ imageUrl, artistInfo }) => {
    return (
        <section className={styles.artistProfile}>
            <div className={styles.profileImage}>
                <img src={imageUrl} alt="Artist profile" className={styles.image} />
            </div>
            <div className={styles.profileInfo}>
                <h2 className={styles.infoTitle}>о художнике:</h2>
                <p className={styles.infoDetails}>
                    никнейм: {artistInfo.nickname}<br />
                    Город: {artistInfo.city}<br />
                    жанр: {artistInfo.genre}<br />
                    Образование: {artistInfo.education}<br />
                    Контакты: {artistInfo.contact}
                </p>
            </div>
        </section>
    );
};

export default ArtistProfile;
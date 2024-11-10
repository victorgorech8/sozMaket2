import React from 'react';
import styles from './ArtworkCard.module.css';

const ArtworkCard = ({ imageUrl, title, artistName, price }) => {
    return (
        <article className={styles.artworkCard}>
            <div className={styles.imageContainer}>
                <img src={imageUrl} alt={title} className={styles.artworkImage} />
                <p className={styles.artworkDescription}>{title}</p>
            </div>
            <h3 className={styles.artistName}>{artistName}</h3>
            {price && (
                <p className={styles.artworkPrice}>
                    <span className={styles.priceAmount}>цена {price}</span>р
                </p>
            )}
        </article>
    );
};

export default ArtworkCard;
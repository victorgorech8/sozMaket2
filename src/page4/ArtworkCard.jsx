import React from 'react';
import styles from './ArtworkCard.module.css';

const ArtworkCard = ({ image, title, artist, price }) => {
    return (
        <article className={styles.artworkCard}>
            <img src={image} alt={title || "Artwork"} className={styles.artworkImage} />
            {title && <p className={styles.artworkTitle}>{title}</p>}
            {artist && <p className={styles.artistName}>{artist}</p>}
            {price && <p className={styles.artworkPrice}>цена {price}р</p>}
        </article>
    );
};

export default ArtworkCard;
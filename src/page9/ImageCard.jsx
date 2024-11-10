import React from 'react';
import styles from './ImageCard.module.css';

function ImageCard({ imageSrc, title, price }) {
    return (
        <article className={styles.card}>
            <div className={styles.imageWrapper}>
                <img src={imageSrc} alt="" className={styles.cardImage} />
                <p className={styles.imageOverlay}>балалалал лалала чьртаа оа рва ара оа мл</p>
            </div>
            <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{title}</h3>
                <p className={styles.cardPrice}>
                    <span className={styles.priceAmount}>цена {price}</span>р
                </p>
            </div>
        </article>
    );
}

export default ImageCard;
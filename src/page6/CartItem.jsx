import React from 'react';
import styles from './CartItem.module.css';

const CartItem = ({ image, title, artist, price, size }) => {
    return (
        <article className={styles.cartItem}>
            <img src={image} alt={`${title} by ${artist}`} className={styles.itemImage} />
            <div className={styles.itemDetails}>
                <div className={styles.itemInfo}>
                    <h3 className={styles.itemTitle}>{title}</h3>
                    <p className={styles.itemArtist}>{artist}</p>
                </div>
                <div className={styles.itemPricing}>
                    <p className={styles.itemPrice}>{price}</p>
                    <button className={styles.removeButton} aria-label="Remove item">X</button>
                </div>
            </div>
            <p className={styles.itemSize}>{size}</p>
            <button className={styles.contactButton}>связаться</button>
        </article>
    );
};

export default CartItem;
import React from 'react';
import ArtworkCard from './ArtworkCard';
import styles from './ArtworkGallery.module.css';

const ArtworkGallery = ({ artworks }) => {
    return (
        <section className={styles.artworkGallery}>
            <h2 className={styles.galleryTitle}>картины художника</h2>
            <div className={styles.artworkGrid}>
                {artworks.map((artwork, index) => (
                    <ArtworkCard
                        key={index}
                        imageUrl={artwork.imageUrl}
                        title={artwork.title}
                        artistName={artwork.artistName}
                        price={artwork.price}
                    />
                ))}
            </div>
        </section>
    );
};

export default ArtworkGallery;
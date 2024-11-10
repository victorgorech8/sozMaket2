import React from 'react';
import styles from './ArtistSection.module.css';

const ArtistSection = ({ artist, images }) => {
    return (
        <section className={styles.artistSection}>
            <div className={styles.artistInfo}>
                <img src={artist.image} alt={artist.name} className={styles.artistImage} />
                <h2 className={styles.artistName}>{artist.name}</h2>
            </div>
            <div className={styles.artworkGallery}>
                {images.map((image, index) => (
                    <img key={index} src={image} alt={`Artwork ${index + 1} by ${artist.name}`} className={styles.artworkImage} />
                ))}
                <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/2417865afc5890a5b867016264d0efb30fa49e07c44054181a3ae134b4b0d0ec?placeholderIfAbsent=true&apiKey=4115a1a389194939a31d761b1865954f" alt="" className={styles.decorativeImage} />
            </div>
        </section>
    );
};

export default ArtistSection;
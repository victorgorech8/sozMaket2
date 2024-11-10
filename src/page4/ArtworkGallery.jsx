import React from 'react';
import ArtworkCard from './ArtworkCard';
import styles from './ArtworkGallery.module.css';

const artworks = [
    {
        id: 1,
        image: "https://cdn.builder.io/api/v1/image/assets/TEMP/9d9c310ac3043c266c03f0e9d60fd58024b809f33a7b354bad49106963407c10?placeholderIfAbsent=true&apiKey=4115a1a389194939a31d761b1865954f",
        title: "балалалал лалала чьртаа оа рва ара оа мл",
        artist: "Анна Аверина"
    },
    {
        id: 2,
        image: "https://cdn.builder.io/api/v1/image/assets/TEMP/9f4340611b2292cc29ded5b94cb267b671cbcbb04c99464398fde2cf9d2c99c5?placeholderIfAbsent=true&apiKey=4115a1a389194939a31d761b1865954f",
        title: "балалалал лалала чьртаа оа рва ара оа мл",
        artist: "Анна Аверина"
    },
    {
        id: 3,
        image: "https://cdn.builder.io/api/v1/image/assets/TEMP/091bfe908bca6c11d3c554b6f13c63af68e3dea96bdfec5bdbd53d573c4ab702?placeholderIfAbsent=true&apiKey=4115a1a389194939a31d761b1865954f",
        title: "балалалал лалала чьртаа оа рва ара оа мл",
        artist: "Анна Аверина"
    },
    {
        id: 4,
        image: "https://cdn.builder.io/api/v1/image/assets/TEMP/d131fa76-1272-402d-b238-22bbf793fd11?placeholderIfAbsent=true&apiKey=4115a1a389194939a31d761b1865954f",
        price: 15000
    },
    {
        id: 5,
        image: "https://cdn.builder.io/api/v1/image/assets/TEMP/92d32455477ed24a242ece52aeba62aac1650d907341fe52e5b4b43fbe4b3dff?placeholderIfAbsent=true&apiKey=4115a1a389194939a31d761b1865954f",
        title: "балалалал лалала чьртаа оа рва ара оа мл",
        artist: "Анна Аверина"
    },
    {
        id: 6,
        image: "https://cdn.builder.io/api/v1/image/assets/TEMP/73b076f90444169014abf905123b226ce469feabbb21976be94dac312cd3280e?placeholderIfAbsent=true&apiKey=4115a1a389194939a31d761b1865954f"
    }
];

const ArtworkGallery = () => {
    return (
        <section className={styles.artworkGallery}>
            <h2 className={styles.galleryTitle}>картины художника</h2>
            <div className={styles.artworkGrid}>
                {artworks.map((artwork) => (
                    <ArtworkCard key={artwork.id} {...artwork} />
                ))}
            </div>
        </section>
    );
};

export default ArtworkGallery;
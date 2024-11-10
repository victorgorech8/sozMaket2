import React from 'react';
import styles from './OtherArtworks.module.css';

const artworks = [
    { id: 1, src: "https://cdn.builder.io/api/v1/image/assets/TEMP/2af07fc77ed3907dd03d9cd2024f8a4df691a1afb1532c83b9a2c3b35dfb46ee?placeholderIfAbsent=true&apiKey=4115a1a389194939a31d761b1865954f", alt: "Другая картина художника 1" },
    { id: 2, src: "https://cdn.builder.io/api/v1/image/assets/TEMP/835ebfe5e63c002d3f6b4c1a304a9eca15eaef74af2a93644a47d7023f24f35e?placeholderIfAbsent=true&apiKey=4115a1a389194939a31d761b1865954f", alt: "Другая картина художника 2" },
    { id: 3, src: "https://cdn.builder.io/api/v1/image/assets/TEMP/64cf2c7fd763db8607f85c67f6501843cd25925e7123ceb28f0c28ac57108ae6?placeholderIfAbsent=true&apiKey=4115a1a389194939a31d761b1865954f", alt: "Другая картина художника 3" },
    { id: 4, src: "https://cdn.builder.io/api/v1/image/assets/TEMP/5cb8ac583977964cdfd5b1753fb022098371afae46efc9b5b0eb0345634aa1c7?placeholderIfAbsent=true&apiKey=4115a1a389194939a31d761b1865954f", alt: "Другая картина художника 4" },
    { id: 5, src: "https://cdn.builder.io/api/v1/image/assets/TEMP/77b5742cf072b576c85f3436de3c01c72b8703e1449938f61b8e6d438f0041c5?placeholderIfAbsent=true&apiKey=4115a1a389194939a31d761b1865954f", alt: "Другая картина художника 5" },
    { id: 6, src: "https://cdn.builder.io/api/v1/image/assets/TEMP/75e7df75f0645a4cde70d66ec697e557ea3df36488369099030434137cc7d906?placeholderIfAbsent=true&apiKey=4115a1a389194939a31d761b1865954f", alt: "Другая картина художника 6" },
];

function OtherArtworks() {
    return (
        <section className={styles.otherArtworks}>
            <h2 className={styles.sectionTitle}>другие картины художника</h2>
            <div className={styles.artworkGrid}>
                {artworks.map((artwork) => (
                    <div key={artwork.id} className={styles.artworkItem}>
                        <img src={artwork.src} alt={artwork.alt} className={styles.artworkImage} />
                    </div>
                ))}
            </div>
        </section>
    );
}

export default OtherArtworks;
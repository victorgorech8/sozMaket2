import React from 'react';
import styles from './PersonalCabinet.module.css';

const GallerySection = () => {
    return (
        <section className={styles.gallerySection}>
            <div className={styles.galleryItem}>
                <div className={styles.galleryImage}></div>
            </div>
            <div className={styles.galleryItem}>
                <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/432a695aad3b5fc271ed2bff574b4afde291f59759c3c848e012f3ab4e50167d?placeholderIfAbsent=true&apiKey=4115a1a389194939a31d761b1865954f" alt="Gallery Item" className={styles.galleryImage} />
            </div>
            <div className={styles.galleryItem}>
                <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/43eb7725a04709cf0b29d1f8d8135495e27109437c8edf907f9152d20f4408db?placeholderIfAbsent=true&apiKey=4115a1a389194939a31d761b1865954f" alt="Gallery Item" className={styles.galleryImage} />
            </div>
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/2417865afc5890a5b867016264d0efb30fa49e07c44054181a3ae134b4b0d0ec?placeholderIfAbsent=true&apiKey=4115a1a389194939a31d761b1865954f" alt="Gallery Item" className={styles.galleryImage} />
        </section>
    );
};

export default GallerySection;
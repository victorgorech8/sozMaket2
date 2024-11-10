import React from 'react';
import styles from './ImageGallery.module.css';

const ImageGallery = () => {
    return (
        <section className={styles.imageGallery}>
            <div className={styles.imageWrapper}>
                <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/433b409907d27e7c6bf1fbeee482e725f8ffee6ebaab615a117fc882f4e72e6c?placeholderIfAbsent=true&apiKey=4115a1a389194939a31d761b1865954f" alt="Gallery image 1" className={styles.galleryImage} />
            </div>
            <div className={styles.imageWrapper}>
                <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/ea5a8268-42b6-4030-ac74-4b0db01028ea?placeholderIfAbsent=true&apiKey=4115a1a389194939a31d761b1865954f" alt="Gallery image 2" className={styles.galleryImage} />
            </div>
            <div className={styles.imageWrapper}>
                <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/5f4544bd-0956-47b4-bb53-0dacb0f876cc?placeholderIfAbsent=true&apiKey=4115a1a389194939a31d761b1865954f" alt="Gallery image 3" className={styles.galleryImage} />
            </div>
        </section>
    );
};

export default ImageGallery;
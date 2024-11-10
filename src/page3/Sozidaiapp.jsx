import React from 'react';
import Header from './Header';
import Description from './Description';
import ImageGallery from './ImageGallery';
import Reviews from './Reviews';
import Subscription from './Subscription';
import Footer from './Footer';
import styles from './SozidaiApp.module.css';

const SozidaiApp = () => {
    return (
        <div className={styles.sozidaiApp}>
            <Header />
            <main className={styles.mainContent}>
                <Description />
                <ImageGallery />
                <Reviews />
                <Subscription />
                <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/b162fb8d0a30a52d692ddd0148617957cabb515e1adea4c17c86c906e0e16725?placeholderIfAbsent=true&apiKey=4115a1a389194939a31d761b1865954f" alt="Decorative image" className={styles.decorativeImage} />
            </main>
            <Footer />
        </div>
    );
};

export default SozidaiApp;
import React from 'react';
import Header from './Header';
import ArtistProfile from './ArtistProfile';
import ArtworkGallery from './ArtworkGallery';
import Footer from './Footer';
import styles from './SozidaiPage.module.css';

const SozidaiPage = () => {
    return (
        <div className={styles.pageContainer}>
            <Header />
            <main className={styles.mainContent}>
                <ArtistProfile />
                <ArtworkGallery />
            </main>
            <Footer />
        </div>
    );
};

export default SozidaiPage;
import React from 'react';
import Header from './Header';
import ArtworkDetails from './ArtworkDetails';
import OtherArtworks from './OtherArtworks';
import Footer from './Footer';
import styles from './OceanArtwork.module.css';

function OceanArtwork() {
    return (
        <div className={styles.artworkPage}>
            <Header />
            <main className={styles.mainContent}>
                <ArtworkDetails />
                <OtherArtworks />
            </main>
            <Footer />
        </div>
    );
}

export default OceanArtwork;
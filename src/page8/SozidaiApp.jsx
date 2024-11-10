import React from 'react';
import Header from './Header';
import ArtistSection from './ArtistSection';
import Footer from './Footer';
import styles from './SozidaiApp.module.css';

const artistsData = [
    {
        name: "Анна Аверина",
        image: "https://cdn.builder.io/api/v1/image/assets/TEMP/754a5663cbfa4bc44fd1ad99e474bdb677f9752e6145b7ddbdaf981d0b11aadc?placeholderIfAbsent=true&apiKey=4115a1a389194939a31d761b1865954f",
        artworks: ["https://cdn.builder.io/api/v1/image/assets/TEMP/3b2d99632d202d9159fa1366d06bd03a244ad61b0bd721dc2c1e5dc9d10609e2?placeholderIfAbsent=true&apiKey=4115a1a389194939a31d761b1865954f", "https://cdn.builder.io/api/v1/image/assets/TEMP/837565993e6a719645cafd3d5f4cd4f589a9915e87014272f02abd9f03b124d8?placeholderIfAbsent=true&apiKey=4115a1a389194939a31d761b1865954f", "https://cdn.builder.io/api/v1/image/assets/TEMP/8481e4ffb084f66e462cbf28fbcc1da52d8d9983ab6108cded7aa929070aa92e?placeholderIfAbsent=true&apiKey=4115a1a389194939a31d761b1865954f"]
    },
    {
        name: "Анна Аверина",
        image: "https://cdn.builder.io/api/v1/image/assets/TEMP/7ba6c7765e22cbeede6e1d3446959c2e66d216048c3346665e4af60511592b69?placeholderIfAbsent=true&apiKey=4115a1a389194939a31d761b1865954f",
        artworks: ["https://cdn.builder.io/api/v1/image/assets/TEMP/3b2d99632d202d9159fa1366d06bd03a244ad61b0bd721dc2c1e5dc9d10609e2?placeholderIfAbsent=true&apiKey=4115a1a389194939a31d761b1865954f", "https://cdn.builder.io/api/v1/image/assets/TEMP/2f8ffbfceaf2c61b14a41d1b6a2e14ce7e2ea7d861165d49ad733e3cabdf73a1?placeholderIfAbsent=true&apiKey=4115a1a389194939a31d761b1865954f", "https://cdn.builder.io/api/v1/image/assets/TEMP/663a7ce10397d253ee795795d8dba3234f32a7765adfca233f62e09200e31fbd?placeholderIfAbsent=true&apiKey=4115a1a389194939a31d761b1865954f"]
    },
    {
        name: "Анна Аверина",
        image: "https://cdn.builder.io/api/v1/image/assets/TEMP/3db8e44d8542671478b3b7435670e0e30acf3fdb2c2b24d4298f8f6c6ea1e657?placeholderIfAbsent=true&apiKey=4115a1a389194939a31d761b1865954f",
        artworks: ["https://cdn.builder.io/api/v1/image/assets/TEMP/a00a1d40a8bb126e73e215e19a8037edd83681836cbcce2357773e2e3839409f?placeholderIfAbsent=true&apiKey=4115a1a389194939a31d761b1865954f", "https://cdn.builder.io/api/v1/image/assets/TEMP/837565993e6a719645cafd3d5f4cd4f589a9915e87014272f02abd9f03b124d8?placeholderIfAbsent=true&apiKey=4115a1a389194939a31d761b1865954f", "https://cdn.builder.io/api/v1/image/assets/TEMP/8481e4ffb084f66e462cbf28fbcc1da52d8d9983ab6108cded7aa929070aa92e?placeholderIfAbsent=true&apiKey=4115a1a389194939a31d761b1865954f"]
    },
    {
        name: "Анна Аверина",
        image: "https://cdn.builder.io/api/v1/image/assets/TEMP/8bad590b31fc4c27396670151bdf2a916ba22a20914f82a4318a27b21f11df7f?placeholderIfAbsent=true&apiKey=4115a1a389194939a31d761b1865954f",
        artworks: ["https://cdn.builder.io/api/v1/image/assets/TEMP/a00a1d40a8bb126e73e215e19a8037edd83681836cbcce2357773e2e3839409f?placeholderIfAbsent=true&apiKey=4115a1a389194939a31d761b1865954f", "https://cdn.builder.io/api/v1/image/assets/TEMP/2f8ffbfceaf2c61b14a41d1b6a2e14ce7e2ea7d861165d49ad733e3cabdf73a1?placeholderIfAbsent=true&apiKey=4115a1a389194939a31d761b1865954f", "https://cdn.builder.io/api/v1/image/assets/TEMP/b8a29d7783d038736fea0749629b74c01b4f58b2a0d0068ba2b29438d1bde501?placeholderIfAbsent=true&apiKey=4115a1a389194939a31d761b1865954f"]
    }
];

const SozidaiApp = () => {
    return (
        <div className={styles.app}>
            <Header />
            <main className={styles.mainContent}>
                <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/0fc16b81df87e79a28cb0aa4b1ffe3738dd74eba7524993798589044e6a8e245?placeholderIfAbsent=true&apiKey=4115a1a389194939a31d761b1865954f" alt="Decorative banner" className={styles.bannerImage} />
                <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/51e01ee3dc33ea304d1f613afc9800e0a7f148afe991b1d9a31386fc4fdc5f48?placeholderIfAbsent=true&apiKey=4115a1a389194939a31d761b1865954f" alt="Featured artwork" className={styles.featuredImage} />
                {artistsData.map((artist, index) => (
                    <ArtistSection key={index} artist={artist} images={artist.artworks} />
                ))}
            </main>
            <Footer />
        </div>
    );
};

export default SozidaiApp;
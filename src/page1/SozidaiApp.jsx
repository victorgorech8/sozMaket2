import React from 'react';
import SozidaiHeader from './SozidaiHeader';
import ArtistProfile from './ArtistProfile';
import ArtworkGallery from './ArtworkGallery';
import Footer from './Footer';
import styles from './SozidaiApp.module.css';

const SozidaiApp = () => {
    const artistInfo = {
        nickname: 'Анна',
        city: 'Новосибирск',
        genre: 'флюид',
        education: 'НГПУ',
        contact: 'anna@mail.ru'
    };

    const artworks = [
        { imageUrl: 'https://cdn.builder.io/api/v1/image/assets/TEMP/9d9c310ac3043c266c03f0e9d60fd58024b809f33a7b354bad49106963407c10?placeholderIfAbsent=true&apiKey=4115a1a389194939a31d761b1865954f', title: 'балалалал лалала чьртаа оа рва ара оа мл', artistName: 'Анна Аверина' },
        { imageUrl: 'https://cdn.builder.io/api/v1/image/assets/TEMP/9f4340611b2292cc29ded5b94cb267b671cbcbb04c99464398fde2cf9d2c99c5?placeholderIfAbsent=true&apiKey=4115a1a389194939a31d761b1865954f', title: 'балалалал лалала чьртаа оа рва ара оа мл', artistName: 'Анна Аверина' },
        { imageUrl: 'https://cdn.builder.io/api/v1/image/assets/TEMP/091bfe908bca6c11d3c554b6f13c63af68e3dea96bdfec5bdbd53d573c4ab702?placeholderIfAbsent=true&apiKey=4115a1a389194939a31d761b1865954f', title: 'балалалал лалала чьртаа оа рва ара оа мл', artistName: 'Анна Аверина' },
        { imageUrl: 'https://cdn.builder.io/api/v1/image/assets/TEMP/71541e84-fc8c-4ad8-94b1-df7edaf59bec?placeholderIfAbsent=true&apiKey=4115a1a389194939a31d761b1865954f', title: 'балалалал лалала чьртаа оа рва ара оа мл', artistName: 'Анна Аверина', price: '15 000' },
        { imageUrl: 'https://cdn.builder.io/api/v1/image/assets/TEMP/92d32455477ed24a242ece52aeba62aac1650d907341fe52e5b4b43fbe4b3dff?placeholderIfAbsent=true&apiKey=4115a1a389194939a31d761b1865954f', title: 'балалалал лалала чьртаа оа рва ара оа мл', artistName: 'Анна Аверина' },
        { imageUrl: 'https://cdn.builder.io/api/v1/image/assets/TEMP/73b076f90444169014abf905123b226ce469feabbb21976be94dac312cd3280e?placeholderIfAbsent=true&apiKey=4115a1a389194939a31d761b1865954f', title: 'балалалал лалала чьртаа оа рва ара оа мл', artistName: 'Анна Аверина' },
    ];

    return (
        <div className={styles.sozidaiApp}>
            <SozidaiHeader />
            <main className={styles.mainContent}>
                <ArtistProfile imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/66ca0f695934e390bcf5af40bf53fc170e88ce4fc530b858c7724f38efd34428?placeholderIfAbsent=true&apiKey=4115a1a389194939a31d761b1865954f" artistInfo={artistInfo} />
                <ArtworkGallery artworks={artworks} />
            </main>
            <Footer />
        </div>
    );
};

export default SozidaiApp;
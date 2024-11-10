import React from 'react';
import styles from './SozidaiPage.module.css';
import ImageCard from './ImageCard';
import SubscribeForm from './SubscribeForm';
import Footer from './Footer';

const cardData = [
    { imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/3c796647fa848fc9a1ff9742933e599f319fbedc14b5a225f3ccf57fbfed0a02?placeholderIfAbsent=true&apiKey=4115a1a389194939a31d761b1865954f", title: "Анна Аверина", price: 15000 },
    { imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/f7ede681633b3e38d730323045ae8bd3c06d45485cc0ae2543a18214b90a9589?placeholderIfAbsent=true&apiKey=4115a1a389194939a31d761b1865954f", title: "Анна Аверина", price: 15000 },
    { imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/4f111cac790b7ee9149863fa148e28940accedec5266af2fd91cdbd6e7863eeb?placeholderIfAbsent=true&apiKey=4115a1a389194939a31d761b1865954f", title: "Анна Аверина", price: 15000 },
    { imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/92e45d250f35fed6743178d4a23368e352c1aca05c92d3538f286b9d8d54410f?placeholderIfAbsent=true&apiKey=4115a1a389194939a31d761b1865954f", title: "Анна Аверина", price: 15000 },
    { imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/b49a42ee7c5a8077ba69c12d3553402ec1eb8051e9b408071290931acd979483?placeholderIfAbsent=true&apiKey=4115a1a389194939a31d761b1865954f", title: "Анна Аверина", price: 15000 },
];

function SozidaiPage() {
    return (
        <main className={styles.pageContainer}>
            <section className={styles.cardGrid}>
                {cardData.map((card, index) => (
                    <ImageCard key={index} {...card} />
                ))}
                <div className={styles.fullWidthImage}>
                    <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/0e4f6bc2e0fe3ad75c744adebd13d9105f42e207ce407d78d3dd729aa9b3ffa1?placeholderIfAbsent=true&apiKey=4115a1a389194939a31d761b1865954f" alt="" className={styles.wideImage} />
                </div>
                <div className={styles.fullWidthImage}>
                    <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/fb6af16b1b2dce22d2a2190c3ed0879400c95f2ab384000d2594f96d17e0001c?placeholderIfAbsent=true&apiKey=4115a1a389194939a31d761b1865954f" alt="" className={styles.wideImage} />
                </div>
                <div className={styles.fullWidthImage}>
                    <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/df70ad9dd40490230f0e67126c2dc4f40e52b52d7daba63cbc3c17f3210352eb?placeholderIfAbsent=true&apiKey=4115a1a389194939a31d761b1865954f" alt="" className={styles.wideImage} />
                </div>
                <div className={styles.fullWidthImage}>
                    <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/750ba23d2427d75f1f2bac0569d47bdda8df82270be1c0f60030300ff622e375?placeholderIfAbsent=true&apiKey=4115a1a389194939a31d761b1865954f" alt="" className={styles.wideImage} />
                </div>
            </section>
            <section className={styles.subscribeSection}>
                <h2 className={styles.sectionTitle}>sozidai</h2>
                <SubscribeForm />
                <Footer />
            </section>
        </main>
    );
}

export default SozidaiPage;
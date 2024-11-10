import React from "react";
import styles from "./AuctionContent.module.css";

function AuctionContent() {
    return (
        <section className={styles.auctionContent}>
            <h2 className={styles.auctionTitle}>аукцион</h2>
            <div className={styles.imageGallery}>
                <div className={styles.mainImage}>
                    <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/45178f1a3eb31ec9f74fa7a2c7e11cc4e5360dd370e80b99857a7b6e763bbf88?placeholderIfAbsent=true&apiKey=4115a1a389194939a31d761b1865954f" alt="Main auction item" className={styles.largeImage} />
                </div>
                <div className={styles.sideImage}>
                    <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/c9e8a4eea75f19a2c0f01267b265cd8d0f5eddd0bb759dc79cbb5f1ae82e1de6?placeholderIfAbsent=true&apiKey=4115a1a389194939a31d761b1865954f" alt="Secondary auction item" className={styles.smallImage} />
                </div>
            </div>
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/2d88d3c7fec8458200299a1e0c65aab95090580afb21463d84840a8406cd63bc?placeholderIfAbsent=true&apiKey=4115a1a389194939a31d761b1865954f" alt="Auction details" className={styles.detailsImage} />
            <div className={styles.itemDetails}>
                <p>Категория: Живопись</p>
                <p>Жанр: Пейзажи</p>
                <p>Материал: Холст</p>
                <p>Оформление: Неоформленная</p>
                <p>Холст 20х20 см</p>
            </div>
        </section>
    );
}

export default AuctionContent;
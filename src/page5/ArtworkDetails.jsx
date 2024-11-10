import React from 'react';
import styles from './ArtworkDetails.module.css';

function ArtworkDetails() {
    return (
        <section className={styles.artworkDetails}>
            <div className={styles.thumbnails}>
                <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/6a76459a1f1b06faa25728bebe71fb309cc52eee166bee24d4d10e65be22ef98?placeholderIfAbsent=true&apiKey=4115a1a389194939a31d761b1865954f" alt="" className={styles.thumbnail} />
                <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/1b14e75354d9578a402768d8ab6bca21cb12166b41e37bb545e36199ae590c0e?placeholderIfAbsent=true&apiKey=4115a1a389194939a31d761b1865954f" alt="" className={styles.thumbnail} />
                <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/2af07fc77ed3907dd03d9cd2024f8a4df691a1afb1532c83b9a2c3b35dfb46ee?placeholderIfAbsent=true&apiKey=4115a1a389194939a31d761b1865954f" alt="" className={styles.thumbnail} />
            </div>
            <div className={styles.mainImageContainer}>
                <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/6a76459a1f1b06faa25728bebe71fb309cc52eee166bee24d4d10e65be22ef98?placeholderIfAbsent=true&apiKey=4115a1a389194939a31d761b1865954f" alt="Океан - картина Анны Авериной" className={styles.mainImage} />
                <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/1b14e75354d9578a402768d8ab6bca21cb12166b41e37bb545e36199ae590c0e?placeholderIfAbsent=true&apiKey=4115a1a389194939a31d761b1865954f" alt="" className={styles.watermark} />
            </div>
            <div className={styles.artworkInfo}>
                <h2 className={styles.artworkTitle}>ОКЕАН</h2>
                <h3 className={styles.artistName}>Анна Аверина</h3>
                <p className={styles.artworkDescription}>
                    спесвепс н6 аккононгн нанон аа гнаон шнпнр пе н лнггп н гп гн н нг
                    гнд пеп бонр нррррроьманр пп гно пг
                    макроеаепаепа нплмчвпапорпсар рпиапргшорпиапнг рррго рнн рпми нпи гнравапроти нррп р нрроллорп
                </p>
                <div className={styles.priceSection}>
                    <hr className={styles.priceDivider} />
                    <div className={styles.priceActions}>
                        <span className={styles.price}>15 000 р</span>
                        <button className={styles.contactButton}>связаться</button>
                    </div>
                </div>
            </div>
            <p className={styles.viewCount}><span className={styles.viewLabel}>просмотры</span>: 15620</p>
            <div className={styles.additionalInfo}>
                <h4 className={styles.infoTitle}>информация о работе:</h4>
                <p className={styles.infoDescription}>
                    спесвепс н6 аккононгн нанон аа гнаон шнпнр лнггп н гп гнрипри н нгормр
                    гнд пеп бонр нррррроьманр пп гно пг
                    макроеаепаепа нплмчвпапорпсар рпиапргшорпиапнг рррго рнн рпми нпи гнравапроти нррп р нрроллорп
                </p>
            </div>
        </section>
    );
}

export default ArtworkDetails;
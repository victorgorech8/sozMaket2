import React from "react";
import Header from "./Header";
import AuctionContent from "./AuctionContent";
import Footer from "./Footer";
import styles from "./AuctionPage.module.css";

function AuctionPage() {
    return (
        <div className={styles.auctionPage}>
            <Header />
            <main className={styles.mainContent}>
                <AuctionContent />
            </main>
            <Footer />
        </div>
    );
}

export default AuctionPage;
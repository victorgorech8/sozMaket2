import React from 'react';
import styles from './Reviews.module.css';

const Reviews = () => {
    const reviewSections = [
        { id: 1, title: 'отзывы:' },
        { id: 2, title: 'отзывы:' },
        { id: 3, title: 'отзывы:' }
    ];

    return (
        <section className={styles.reviewsSection}>
            {reviewSections.map((review) => (
                <div key={review.id} className={styles.reviewColumn}>
                    <h3 className={styles.reviewTitle}>{review.title}</h3>
                </div>
            ))}
        </section>
    );
};

export default Reviews;
import React from 'react';
import styles from './SubscribeForm.module.css';

function SubscribeForm() {
    return (
        <form className={styles.subscribeForm}>
            <label htmlFor="emailInput" className={styles.visuallyHidden}>Enter your email</label>
            <input
                type="email"
                id="emailInput"
                className={styles.emailInput}
                placeholder="E-MAIL"
                aria-label="Enter your email"
            />
            <button type="submit" className={styles.subscribeButton}>SUBSCRIBE</button>
        </form>
    );
}

export default SubscribeForm;
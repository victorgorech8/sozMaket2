import React from 'react';
import styles from './UserActions.module.css';

const UserActions = () => {
    return (
        <div className={styles.userActions}>
            <button className={styles.signInButton}>SIGN IN</button>
            <button className={styles.userProfileButton} aria-label="User profile">
                <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/43942cdafa32c0a0653beefa13b1f689b6c9352c9710110bb58b86da96aea8de?placeholderIfAbsent=true&apiKey=4115a1a389194939a31d761b1865954f" alt="" className={styles.userIcon} />
            </button>
        </div>
    );
};

export default UserActions;
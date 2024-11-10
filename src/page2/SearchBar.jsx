import React from 'react';
import styles from './SearchBar.module.css';

const SearchBar = () => {
    return (
        <form className={styles.searchContainer}>
            <label htmlFor="searchInput" className="visually-hidden">Search</label>
            <input
                type="search"
                id="searchInput"
                className={styles.searchInput}
                placeholder="search"
                aria-label="Search"
            />
            <button type="submit" className={styles.searchButton} aria-label="Submit search">
                <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/fbda08deadca77921a9159aba7c7b7205c2aa694263e5a3bcda86faab589e76f?placeholderIfAbsent=true&apiKey=4115a1a389194939a31d761b1865954f" alt="" className={styles.searchIcon} />
            </button>
        </form>
    );
};

export default SearchBar;
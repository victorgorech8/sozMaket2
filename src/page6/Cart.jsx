import React from 'react';
import Header from './Header';
import CartItem from './CartItem';
import Footer from './Footer';
import styles from './Cart.module.css';

const Cart = () => {
    const cartItems = [
        {
            image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/6abd5448e10c948d75fe19e0f3502ecfffbe9488d2c944b8fdb3759ab092a92b?placeholderIfAbsent=true&apiKey=4115a1a389194939a31d761b1865954f',
            title: 'ОКЕАН',
            artist: 'Анна Аверина',
            price: '15 000 р',
            size: 'Размер 100х80'
        },
        {
            image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/2c43595b5a6d797ee705ce9a5720220ee426a2ea0ffc1332000e24ef0d01f093?placeholderIfAbsent=true&apiKey=4115a1a389194939a31d761b1865954f',
            title: 'ПЕНА',
            artist: 'Анна Аверина',
            price: '6 000 р',
            size: 'Размер 50х50'
        }
    ];

    return (
        <div className={styles.cartPage}>
            <Header />
            <main className={styles.cartContent}>
                <h2 className={styles.cartTitle}>корзина</h2>
                {cartItems.map((item, index) => (
                    <CartItem key={index} {...item} />
                ))}
            </main>
            <Footer />
        </div>
    );
};

export default Cart;
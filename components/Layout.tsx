import React from 'react';
import Navbar from './navbar/Navbar';
import Header from './header/Header';
import styles from './layout.module.css';
export default function Layout(props: any) {
    return (
        <div className={styles.main}>
            <div className={styles.nav}>
                <Navbar />
            </div>

            <div className={styles.body}>
                <div className={styles.header}>
                    <Header />
                </div>
                <div className={styles.content}>{props.children}</div>
            </div>
        </div>
    );
}

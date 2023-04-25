import React from 'react';
import styles from './Header.module.css'
import LOGO from './logo.png'

export const Header = () => {
    return (
        <div className={styles.headerContainer}>
            <div className={styles.headerLogoWrap}>
                <img className={styles.headerImg} src={LOGO} alt={'logo'}/>
            </div>
            <div className={styles.headerNavWrap}>
                <nav className={styles.header}>
                    <ul className={styles.navList}>
                        <li className={styles.navItem}>
                            <a className={styles.navLink} href="">
                               Main
                            </a></li>
                        <li className={styles.navItem}>
                            <a className={styles.navLink} href="">
                                Skills
                            </a></li>
                        <li className={styles.navItem}>
                            <a className={styles.navLink} href="">
                                Works
                            </a></li>
                        <li className={styles.navItem}>
                            <a className={styles.navLink} href="">
                                Contacts
                            </a></li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};


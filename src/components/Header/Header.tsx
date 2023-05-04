import React from 'react';
import styles from './Header.module.css'
import LOGO from './logo.png'
import {Box, IconButton, Switch} from "@mui/material";


type SwitcherType ={
    themeSwitcher: ()=>void
}


export const Header = (props: SwitcherType) => {
    return (
        <header className={styles.headerContainer}>
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
                        <li>
                            <Switch onClick={()=>props.themeSwitcher()}  defaultChecked />
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};


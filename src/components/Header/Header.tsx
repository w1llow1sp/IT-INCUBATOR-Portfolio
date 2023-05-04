import React, {useEffect, useState} from 'react';
import styles from './Header.module.css'
import LOGO from './logo.png'
import {NavLink} from "react-bootstrap";
import {Switch} from "@mui/material";



type HeaderPropsType = {
    /*theme: string;*/
    toggleTheme: () => void;
};

export const Header = (props:  HeaderPropsType) => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', onScroll);

        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const onUpdateActiveLink = (value: string) => {
        setActiveLink(value);
    };


    return (
        <header className={styles.headerContainer}>
            <div className={styles.headerLogoWrap}>
                <img className={styles.headerImg} src={LOGO} alt={'logo'}/>
            </div>
            <div className={styles.headerNavWrap}>
                <nav className={styles.header}>
                    <ul className={styles.navList}>
                        <li className={styles.navItem}>
                            <NavLink
                                className={activeLink === 'home'
                                    ? styles.ActiveNavLink
                                    : styles.navLink}
                                onClick={() => onUpdateActiveLink('home')}
                                href="#home">
                                Main
                            </NavLink></li>
                        <li className={styles.navItem}>
                            <NavLink className={activeLink === 'skills'
                                ? styles.ActiveNavLink
                                : styles.navLink}
                                     onClick={() => onUpdateActiveLink('skills')}
                                     href="#skills">
                                Skills
                            </NavLink></li>
                        <li className={styles.navItem}>
                            <NavLink className={activeLink === 'works'
                                ? styles.ActiveNavLink
                                : styles.navLink}
                                     onClick={() => onUpdateActiveLink('works')}
                                     href="#works">
                                Works
                            </NavLink></li>
                        <li className={styles.navItem}>
                            <NavLink className={activeLink === 'contact'
                                ? styles.ActiveNavLink
                                : styles.navLink}
                                     onClick={() => onUpdateActiveLink('contact')}
                                     href="#contact">
                                Contacts
                            </NavLink></li>
                        <li>
                            <Switch onClick={props.toggleTheme}/>
                            {/*<Switch  value={props.theme} onChange={props.toggleTheme}/>*/}
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};


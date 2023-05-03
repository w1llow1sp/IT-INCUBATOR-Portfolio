import React from 'react';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import GitHubIcon from '@mui/icons-material/GitHub';
import TelegramIcon from '@mui/icons-material/Telegram';
import styles from './Footer.module.css'
import {grey} from "@mui/material/colors";
import {IconButton} from "@mui/material";

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.icons}>
                <IconButton>
                    <a href={'mailto:mari.74.front@gmail.com'} target={'_blank'}>
                    <AlternateEmailIcon
                        fontSize={"large"}
                        sx={{color: grey[100]}}/>
                    </a>
                </IconButton>
                <IconButton>
                    <a href={'https://github.com/w1llow1sp'} target={'_blank'}>
                    <GitHubIcon
                        fontSize={"large"}
                        sx={{color: grey[100]}}/>
                    </a>
                </IconButton>
                <IconButton>
                    <a href={'https://t.me/AimlessPrayer'} target={'_blank'}>
                    <TelegramIcon
                        fontSize={"large"}
                        sx={{color: grey[100]}}/>
                    </a>
                </IconButton>
            </div>
            <div className={styles.some}></div>
        </footer>
    );
};



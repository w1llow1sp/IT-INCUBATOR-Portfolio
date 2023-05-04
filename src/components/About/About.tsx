import React, {useEffect, useState} from 'react';
import styles from './About.module.css'
/*import Image from './1.jpg'*/
import Image from './2.png'

import {AboutText} from "./AboutText/AboutText";
import {ArrowRightCircle} from "react-bootstrap-icons";
import {Button, IconButton} from "@mui/material";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import {blueGrey, grey} from "@mui/material/colors";
import GitHubIcon from "@mui/icons-material/GitHub";
import TelegramIcon from "@mui/icons-material/Telegram";
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';

export const About = () => {
    return (
        <section className={styles.about}>
            <div className={'container'}>
                <div className={styles.aboutWrapper}>
                    {/*Image block*/}
                    <div className={styles.imageBlock}>
                        <img className={styles.image} src={Image} alt={'photo'}/>
                    </div>
                    {/*Block with information*/}
                    <div className={styles.textBlock}>
                        <h3 className={styles.hello}>Hello I'm</h3>
                        <h2 className={styles.myName}>Mariya Mokeeva</h2>
                        <div className={styles.motionText}>
                            <AboutText/>
                        </div>
                        <div className={styles.linkBlock}>
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
                        <div className={styles.blockDescr}>
                            <p className={styles.description}>
                                Hello! I'm Maria. Frontend developer from Magnitogorsk, Russia. I'm experienced in UI development using React / Redux /TypeScript.
                            </p>

                        </div>
                        <div className={styles.blockButton}>
                            <Button variant={'outlined'}
                                    className={styles.button}
                                    startIcon={<ArrowCircleDownIcon fontSize={"small"}/>}
                                    href={'#'}
                                    size={"small"}
                            sx={{color: grey[100]}}>
                                Download CV
                            </Button>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

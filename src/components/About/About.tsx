import React from 'react';
import styles from './About.module.css'
import Image from './Picsart.png'
import {AboutText} from "./AboutText/AboutText";
import { IconButton} from "@mui/material";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import {grey} from "@mui/material/colors";
import GitHubIcon from "@mui/icons-material/GitHub";
import TelegramIcon from "@mui/icons-material/Telegram";
import {Card} from "../../ui-components/Card/Card";
import {motion} from 'framer-motion'
import {Button} from "../../ui-components/Button/Button";

export const About = () => {
    return (
        <Card>
            <motion.section
                initial={{opacity: 0, scale: 0.5}}
                animate={{opacity: 1, scale: 1}}
                transition={{duration: 2.5}}

                className={styles.about}>
                <div
                    id={'home'}
                    className={'container'}>
                    <div className={styles.aboutWrapper}>
                        {/*Image block*/}
                        <div className={styles.imageBlock}>
                            <motion.img
                                whileHover={{scale: 1.1}}
                                className={styles.image}
                                src={Image} alt={'photo'}/>
                        </div>
                        {/*Block with information*/}
                        <motion.div
                            initial={{opacity: 0, y: '-50%'}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 2.5}}
                            className={styles.textBlock}>
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
                                    Hello! I'm Maria. Frontend developer from Magnitogorsk, Russia. I'm
                                    experienced in UI development using React / Redux /TypeScript.
                                </p>

                            </div>
                            <div className={styles.blockButton}>

                                <Button
                                    color={'button'}
                                    callBack={() => {}}>
                                    Download SV
                                </Button>
                                <Button color={'button'}
                                        callBack={() => {
                                        }}
                                        href="https://magnitogorsk.hh.ru/applicant/resumes/view?resume=c2cfc745ff0b9f7ff20039ed1f774974436537">
                                    Hire Me
                                </Button>
                            </div>

                        </motion.div>

                    </div>

                </div>
            </motion.section>
        </Card>

    );
};

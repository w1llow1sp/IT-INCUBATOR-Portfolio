import React, {useEffect, useState} from 'react';
import styles from './About.module.css'
/*import Image from './1.jpg'*/
import Image from './2.jpg'

import {AboutText} from "./AboutText/AboutText";
import {ArrowRightCircle} from "react-bootstrap-icons";

export const About = () => {
    return (
        <section className={styles.about}>
            <div className={'container'}>
                <AboutText/>
                <div className={styles.aboutWrapper}>
                    <div>
                        <p className={styles.description}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Accusamus atque autem distinctio doloremque ea eligendi facere, illo molestias nemo non odit officia perferendis,
                            quibusdam reiciendis repellat, repellendus sapiente tempore temporibus!
                        </p>

                    </div>
                    <div className={styles.aboutImage}>
                        <img className={styles.image} src={Image} alt={'photo'}/>
                    </div>
                </div>
                <button className={styles.button}>
                    Let's connect{' '}
                    <ArrowRightCircle size={25} className={styles.SVG}/>
                </button>
            </div>
        </section>
    );
};

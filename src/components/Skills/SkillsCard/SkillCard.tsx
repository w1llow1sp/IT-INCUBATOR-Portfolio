import React from 'react';
import styles from './SkillCard.module.css'
import {motion} from'framer-motion'

type SkillType = {
    id:number
    name: string
    descr: string
    img: string

}

export const SkillsCard = (props:SkillType) => {

    return (
        <section

            className={styles.card} key={props.id}>
            <div>
                <motion.img
                    whileHover={{ scale: 1.1 }}
                    src={props.img} alt={'any card'} className={styles.img}/>
            </div>
            <div>
                <div className={styles.skill}>{props.name}</div>
                <div>
                    <p className={styles.descr}>{props.descr}</p>
                </div>
            </div>
        </section>
    );
};



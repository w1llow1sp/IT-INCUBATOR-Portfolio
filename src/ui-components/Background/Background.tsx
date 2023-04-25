import React from 'react';
import styles from './Background.module.css'

type Background = {
    children:any
}
const Background = (props:Background) => {
    return (
        <section className={styles.wrapper}>
            <div className={styles.stars} ></div>
            <div className={styles.stars2} ></div>
            <div className={styles.stars3} ></div>
            <>
                {props.children}
            </>
        </section>
    );
};

export default Background;

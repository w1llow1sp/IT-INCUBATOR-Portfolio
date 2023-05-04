import React from 'react';
import styles from './CardForWorks.module.css';

export const CardForWorks = (props: any) => {
    return (

        <div className={styles.card}>
            <div className={styles.content}>
            {props.children}
            </div>
        </div>
    );
};



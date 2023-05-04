import React from 'react';
import styles from './Card.module.css';

export const Card = (props: any) => {
    return (

        <div className={styles.card}>
            <div className={styles.content}>
            {props.children}
            </div>
        </div>
    );
};



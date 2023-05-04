import React from 'react';
import styles from './Button.module.scss';

type ButtonProps = {
    color: string;
    callBack?: () => void;
    children: React.ReactNode;
    href?: string;
};

export const Button = (props: ButtonProps) => {
    const className = `${styles.button} ${styles[`button_${props.color}`]}`;
    const handleClick = () => {
        if (props.href) {
            window.open(props.href, '_blank');
        } else if (props.callBack) {
            props.callBack();
        }
    };
    return (
        <button className={className} onClick={handleClick}>
            {props.children}
        </button>
    );
};


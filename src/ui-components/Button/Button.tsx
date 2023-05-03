import React from 'react';
import styles from './Button.module.scss'

type ButtonProps = {
    //id:string
    color: string
    callBack: () => void
    children : string
    disabledFunction?: () => boolean
    disabled?:boolean
    showFunction?:()=>boolean
}

export type BtnNameTypes = '+' | '-' | 'Reset'

export  const Button = (props:ButtonProps) => {
    const className= `${styles.button} ${styles[`button_${props.color}`]}`
    return (
        <button  className={className} onClick={props.callBack} disabled={props.disabled} >{props.children}</button>
    );
};

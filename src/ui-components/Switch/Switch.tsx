import React from 'react';
import styles from './Switcher.module.css'; // импортируем стили из CSS-модуля

type SwitchPropsType = {
    value: string;
    onChange: () => void;
};

export const Switch = ({ value, onChange }: SwitchPropsType) => {
    const handleClick = () => {
        onChange();
    };

    return (
        <div className={styles.switcher}>
            <input
                type="checkbox"
                className={styles.switcherCheckbox}
                checked={value === 'dark'}
                onChange={handleClick}
            />
            <label className={styles.switcherLabel}></label>

        </div>
    );
};
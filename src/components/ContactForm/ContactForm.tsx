import React from 'react';
import styles  from './ContactForm.module.css'

export const ContactForm = () => {
    return (

        <section>
            <div className={'container'}>
                <div className={'section-form'}>
                    <h2 className={styles.contactHeader}>Contact me</h2>
                    <form className={styles.form}>
                        <input type="text" className={styles.inputText} placeholder='Your name'/>
                        <input type="email"className={styles.inputEmail} placeholder='Your email address'/>
                        <input  type='text'
                                placeholder='Your message' className={styles.textarea}/>
                        <button className={styles.button}>Send it</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

//react-particle-animation

import React from 'react';
import styles  from './ContactForm.module.css'
import {Card} from "../../ui-components/Card/Card";
import {Button} from "../../ui-components/Button/Button";

export const ContactForm = () => {
    return (
        <Card>
        <section>
            <div
                id={'contact'}
                className={'container'}>
                <div className={'section-form'}>
                    <h2 className={styles.contactHeader}>Contact me</h2>
                    <form className={styles.form}>
                        <input type="text" className={styles.inputText} placeholder='Your name'/>
                        <input type="email"className={styles.inputEmail} placeholder='Your email address'/>
                        <input  type='text'
                                placeholder='Your message' className={styles.textarea}/>
                        <Button
                            color={'button'}
                            callBack={() => {}}>
                           Send
                        </Button>
                    </form>
                </div>
            </div>
        </section>
        </Card>
    );
};

//react-particle-animation

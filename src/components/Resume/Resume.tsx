import React from 'react';
import styles from './Resume.module.css'
import {Button} from "../../ui-components/Button/Button";

export const Resume = () => {
    return (
        <section>
            <div className={'container'}>
                <div className={styles.resume}>
                    <h2 className={styles.header}>Considering remote work options</h2>
                            <Button color={'button'}
                                    callBack={() => {
                                    }}
                                    href="https://magnitogorsk.hh.ru/applicant/resumes/view?resume=c2cfc745ff0b9f7ff20039ed1f774974436537">
                            Hire Me
                            </Button>
                </div>

            </div>
        </section>
    );
};

export default Resume;

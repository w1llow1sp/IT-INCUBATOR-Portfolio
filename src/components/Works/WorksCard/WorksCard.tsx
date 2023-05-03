import React from 'react';
import styles from './WorkCard.module.css'
import {Col} from "react-bootstrap";

type WorkCardProps = {
    id: number
    name: string
    link: string
    decription: string
    image: string
}

export const WorkCard = (props: WorkCardProps) => {
    return (
        <Col xs={12} sm={6} md={6} lg={6} xl={6}>
            <div className={styles.card}>
                <h4 className={styles.header}>{props.name}</h4>
                <div className={styles.projImgbx}>
                    <button className={styles.button}>
                        <a href={props.link} target={'_blank'}>
                            Show</a>
                    </button>
                    <img src={props.image} alt={'project image'}/>
                </div>
                <p className={styles.decr}>{props.decription}</p>

            </div>
        </Col>
    );
};

export default WorkCard;

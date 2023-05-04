import React from 'react';
import './WorkCard.scss'
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
            <div className="project">
                <div className="thumbnail-inner">
                    <div className="thumbnail"
                         style={{ backgroundImage: `url(${props.image})` }}> </div>
                    <div className="bg-blr-image image"> </div>
                </div>
                <div className="content">
                    <div className="inner">
                        <p>{props.decription}</p>
                        <h4>
                            <a href={props.link} target="_blank">{props.name}</a>
                        </h4>

                    </div>
                </div>
            </div>

        </Col>

/*        <Col xs={12} sm={6} md={6} lg={6} xl={6}>
            <div className={styles.card}>

                <div className={styles.projImgbx} style={{backgroundImage:`url(${props.image})`, backgroundSize:"cover"}}>



                    <p className={styles.decr}>{props.name}</p>
                    <button className={styles.button}>
                        <a href={props.link} target={'_blank'}>
                            Show</a>
                    </button>
                    <p className={styles.decr}>{props.decription}</p>
                </div>


            </div>
        </Col>*/
    );
};

export default WorkCard;

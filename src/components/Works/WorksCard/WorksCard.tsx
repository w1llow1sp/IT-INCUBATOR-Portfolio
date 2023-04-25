import React from 'react';
import styles from './WorkCard.module.css'
import {Col} from "react-bootstrap";

type WorkCardProps ={
    id: number
    name: string
    link:string
    decription: string
    image: string
}

 export const WorkCard = (props:WorkCardProps) => {
    function onClick (){
        document.location=props.link
     }
    return (
        <Col size={12} sm={6} md={4}>
            <img src={props.image} alt={'project image'}/>
            <div>
                <h1>{props.name}</h1>
                <p>{props.decription}</p>
            </div>
            <button><a href={props.link} target={'_blank'}>Show</a></button>
        </Col>
    );
};

export default WorkCard;

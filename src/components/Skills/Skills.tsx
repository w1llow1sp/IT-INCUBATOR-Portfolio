import React from 'react';
import { SkillsCard } from './SkillsCard/SkillCard';
import {store} from "../../store/data";

import styles from './Skills.module.css'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";




export const Skills = () => {

    let STORE = store.skillsSection
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            partialVisibilityGutter: 30 // this is needed to tell the amount of px that should be visible.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            partialVisibilityGutter: 20 // this is needed to tell the amount of px that should be visible.
        },
        mobile: {
            breakpoint: { max: 464, min: 360 },
            items: 1,
            partialVisibilityGutter: 30 // this is needed to tell the amount of px that should be visible.
        }
    }

    return (
        <section className={styles.skills}>
            <div className={'container'}>
                <div className={styles.wrap}>
                   <h2 className={styles.header}>Skills</h2>
                 <Carousel
                     containerClass={'carousel-container'}
                     itemClass={'carousel-item'}
                     partialVisible={true}
                     keyBoardControl={true}
                        responsive={responsive}
                        arrows
                    >
                     {STORE.map((skill) => (
                         <SkillsCard
                             key={skill.id}
                             id={skill.id}
                             name={skill.name}
                             descr={skill.decription}
                             img={skill.image}/>
                     ))}
                   </Carousel>
                </div>
            </div>
        </section>
    );
};

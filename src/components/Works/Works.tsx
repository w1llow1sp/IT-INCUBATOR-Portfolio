import React from 'react';
import styles from './Works.module.css'
import {store} from "../../store/data";
import WorkCard from "./WorksCard/WorksCard";
import {CardForWorks} from "../../ui-components/Card/CardForWorks";
export const Works = () => {
    let STORE = store.worksSection

    return (
        <CardForWorks>
            <section className={styles.works}>
                <div className={'container'}>
                    <h2 className={styles.header}>
                        Works
                    </h2>
                    <p className={styles.decr}>
                        Lorem Ipsum is simply dummy text of the
                        printing and typesetting industry. Lorem
                        Ipsum has been the industry's standard
                        dummy text ever since the 1500s, when an
                        unknown printer took a galley of type
                        and scrambled it to make a type specimen
                        book.
                    </p>
                    <div className={styles.cardsWrapper}>

                        {
                            STORE.map((work) =>
                                (<WorkCard
                                        key={work.id}
                                        id={work.id}
                                        name={work.name}
                                        link={work.link}
                                        decription={work.decription}
                                        image={work.image}
                                    />
                                )
                            )
                        }

                    </div>
                </div>
            </section>
        </CardForWorks>

    )}





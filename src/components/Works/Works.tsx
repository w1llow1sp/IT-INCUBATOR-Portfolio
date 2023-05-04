import React from 'react';
import styles from './Works.module.css'

import PARALAX from '../../images/works/paralax.png'
import PHOTO from '../../images/works/Photo.png'
import RECEPTS from '../../images/works/Recepts.png'
import SHOWCASE from '../../images/works/ShowCase.png'
import MOVIE from '../../images/works/Movie.png'
import COSTS from '../../images/works/Costs.png'
import COUNTER from '../../images/works/Counter.png'
import BATMAN from '../../images/works/Batman.png'


import WorkCard from "./WorksCard/WorksCard";
import {CardForWorks} from "../../ui-components/Card/CardForWorks";
export const Works = () => {
    let STORE =  [
        {
            id: 1,
            name: "HTML-Paralax",
            link: 'https://w1llow1sp.github.io/ParalaxHtml/',
            decription: "Beauty simple app with paralax effect",
            image: PARALAX
        },
        {
            id: 2,
            name: "Photographer",
            link: 'https://w1llow1sp.github.io/react-photographer-multipage-portfolio/',
            decription: "Photographer portfolio with unusual cursor ",
            image: PHOTO
        },
        {
            id: 3,
            name: "Recipes",
            link: 'https://w1llow1sp.github.io/react--recipes/',
            decription: "Simple react app with recipes",
            image: RECEPTS
        },
        {
            id: 4,
            name: "ShowCase",
            link: 'https://w1llow1sp.github.io/react-showcase/',
            decription: "Showcase with card inspired by fortnite",
            image: SHOWCASE
        },
        {
            id: 5,
            name: "Movie",
            link: 'https://w1llow1sp.github.io/React-Movie/',
            decription: "Find you movie in this react app",
            image: MOVIE
        },
        {
            id: 6,
            name: "Coast Calculator",
            link: 'https://w1llow1sp.github.io/ReactCostAccounting/',
            decription: "Calculate you coasts in this app",
            image: COSTS
        },
        {
            id: 7,
            name: "Counter",
            link: 'https://w1llow1sp.github.io/IT-INCUBATOR-advanced-counter/',
            decription: "Just counter in old-console style",
            image: COUNTER
        },
        {
            id: 8,
            name: "Batman",
            link: 'https://w1llow1sp.github.io/Batman/index.html',
            decription: "A small site dedicated to the release of a new movie",
            image: BATMAN
        },
    ]

    return (
        <CardForWorks>
            <section
                id={'works'}
                className={styles.works}>
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





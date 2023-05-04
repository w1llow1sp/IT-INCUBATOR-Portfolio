import React from 'react';
import { SkillsCard } from './SkillsCard/SkillCard';
import HTML from '../../images/skills/html.png'
import CSS from '../../images/skills/css.png'
import JS from '../../images/skills/js.png'
import REACT from '../../images/skills/react.png'
import NEXT from '../../images/skills/next.png'
import TS from'../../images/skills/ts.png'
import POSTMAN from'../../images/skills/postman.png'
import GIT from'../../images/skills/git.png'
import FIGMA from '../../images/skills/figma.png'
import JEST from '../../images/skills/jest.png'


import styles from './Skills.module.css'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";



export const Skills = () => {

    const STORE = [
        {
        id: 1,
        name: "HTML",
        decription: "Knowledge of basic tags, understanding of document semantics and structure, working with forms, tables, media elements and audio/video",
        image: HTML
    },
        {
            id: 2,
            name: "CSS",
            decription: "Knowledge of basic properties and values, the ability to create responsive layouts, work with element positioning, knowledge of the principles of cascade and inheritance, work with CSS preprocessors (for example, SASS), work with Tailwind and Material-UI",
            image: CSS

        },
        {
            id: 3,
            name: "JavaScript",
            decription: "Knowledge of basic language concepts, working with DOM and events, using AJAX and JSON, working with ES6 and new language features, knowledge of basic design patterns and principles of SOLID, KISS, DRY, using uuid",
            image: JS
        },
        {
            id: 4,
            name: "React",
            decription: "Knowledge of the component lifecycle, working with props and state, working with JSX, using context and refs, working with Redux and React Router, using framer-motion, knowing Storybook principles, working with styled-components and React-redux",
            image: REACT
        },
        {
            id: 5,
            name: "NextJS",
            decription: "Knowledge of the basics of working with server rendering, static generation, working with API",
            image: NEXT
        },
        {
            id: 6,
            name: "Typescript",
            decription: "Knowledge of the basic concepts of the language, code typing, the use of generics, working with interfaces and data types",
            image: TS
        },
        {
            id: 7,
            name: "Postman",
            decription: "API testing, working with requests and responses",
            image: POSTMAN
        },
        {
            id: 8,
            name: "Git и GitHub",
            decription: "Knowledge of the basics of version control, working with branches and commits, working with GitHub and pull requests",
            image: GIT
        },
        {
            id: 9,
            name: "Figma",
            decription: "Работа с дизайн-макетами, создание макетов и компонентов, работа с отступами и цветами",
            image: FIGMA
        },
        {
            id: 10,
            name: "Unit-test",
            decription: "Working with design layouts, creating layouts and components, working with indents and colors",
            image: JEST
        }]


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

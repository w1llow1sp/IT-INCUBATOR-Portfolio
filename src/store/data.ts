import src from "*.jpg";


type WorksType = {
    id: number
    name: string
    link: string
    decription: string
    image: string
}
type SkillType = {
    id: number
    name: string
    decription: string
    image: string

}

export type StoreType = {
    skillsSection: Array<SkillType>
    worksSection: Array<WorksType>
}

export const store: StoreType = {
    skillsSection: [
        {
            id: 1,
            name: "HTML",
            decription: "Knowledge of basic tags, understanding of document semantics and structure, working with forms, tables, media elements and audio/video",
            image: '/skills/html.png'
        },
        {
            id: 2,
            name: "CSS",
            decription: "Knowledge of basic properties and values, the ability to create responsive layouts, work with element positioning, knowledge of the principles of cascade and inheritance, work with CSS preprocessors (for example, SASS), work with Tailwind and Material-UI",
            image: "/skills/css.png"

        },
        {
            id: 3,
            name: "JavaScript",
            decription: "Knowledge of basic language concepts, working with DOM and events, using AJAX and JSON, working with ES6 and new language features, knowledge of basic design patterns and principles of SOLID, KISS, DRY, using uuid",
            image: "/skills/js.png"
        },
        {
            id: 4,
            name: "React",
            decription: "Knowledge of the component lifecycle, working with props and state, working with JSX, using context and refs, working with Redux and React Router, using framer-motion, knowing Storybook principles, working with styled-components and React-redux",
            image: "/skills/react.png"
        },
        {
            id: 5,
            name: "NextJS",
            decription: "Knowledge of the basics of working with server rendering, static generation, working with API",
            image: "/skills/next.png"
        },
        {
            id: 6,
            name: "Typescript",
            decription: "Knowledge of the basic concepts of the language, code typing, the use of generics, working with interfaces and data types",
            image: "/skills/ts.png"
        },
        {
            id: 7,
            name: "Postman",
            decription: "API testing, working with requests and responses",
            image: "/skills/postman.png"
        },
        {
            id: 8,
            name: "Git и GitHub",
            decription: "Knowledge of the basics of version control, working with branches and commits, working with GitHub and pull requests",
            image: "/skills/git.png"
        },
        {
            id: 9,
            name: "Figma",
            decription: "Работа с дизайн-макетами, создание макетов и компонентов, работа с отступами и цветами",
            image: "/skills/figma.png"
        },
        {
            id: 10,
            name: "Unit-test",
            decription: "Working with design layouts, creating layouts and components, working with indents and colors",
            image: "/skills/jest.png"
        }
    ],
    worksSection: [
        {
            id: 1,
            name: "HTML-Paralax",
            link: 'https://w1llow1sp.github.io/ParalaxHtml/',
            decription: "Beauty simple app with paralax effect",
            image: "/works/paralax.png"
            /* image: '/skills/html.png'*/
        },
        {
            id: 2,
            name: "Photographer",
            link: 'https://w1llow1sp.github.io/react-photographer-multipage-portfolio/',
            decription: "Photographer portfolio with unusual cursor ",
            image: '/works/Photo.png'
        },
        {
            id: 3,
            name: "Recipes",
            link: 'https://w1llow1sp.github.io/react--recipes/',
            decription: "Simple react app with recipes",
            image: '/works/Recepts.png'
        },
        {
            id: 4,
            name: "ShowCase",
            link: 'https://w1llow1sp.github.io/react-showcase/',
            decription: "Showcase with card inspired by fortnite",
            image: '/works/ShowCase.png'
        },
        {
            id: 5,
            name: "Movie",
            link: 'https://w1llow1sp.github.io/React-Movie/',
            decription: "Find you movie in this react app",
            image: '/works/Movie.png'
        },
        {
            id: 6,
            name: "Coast Calculator",
            link: 'https://w1llow1sp.github.io/ReactCostAccounting/',
            decription: "Calculate you coasts in this app",
            image: '/works/Costs.png'
        },
        {
            id: 7,
            name: "Counter",
            link: 'https://w1llow1sp.github.io/IT-INCUBATOR-advanced-counter/',
            decription: "Just counter in old-console style",
            image: '/works/Counter.png'
        },
        {
            id: 8,
            name: "Batman",
            link: 'https://w1llow1sp.github.io/Batman/index.html',
            decription: "A small site dedicated to the release of a new movie",
            image: '/works/Batman.png'
        },
    ]
}



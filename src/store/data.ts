import src from "*.jpg";

type SkillType = {
  id:number
  name: string
  decription: string
  image: string

}

export type StoreType= {
  skillsSection:Array<SkillType>
}




   export const store:StoreType = {
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
      ]
    }



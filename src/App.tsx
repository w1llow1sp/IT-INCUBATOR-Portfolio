import React, {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import {Header} from "./components/Header/Header";
import {About} from "./components/About/About";
import {Skills} from "./components/Skills/Skills";
import {Works} from "./components/Works/Works";
import Resume from "./components/Resume/Resume";
import {ContactForm} from "./components/ContactForm/ContactForm";
import {Footer} from "./components/Footer/Footer";
import useLocalStorage from "use-local-storage";
import './index.css'

function App() {
    const [theme,setTheme] = useLocalStorage<string>('theme','light')

    const switchTheme = () => {
        const newTheme = theme === 'light' ? 'dark' :'light';
        setTheme(newTheme)
    }
    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };




    return (
        <div className="App" data-theme={theme}>
            <main className={'main'}>
                {/*<Background>*/}
                    <Header   toggleTheme={switchTheme}/>
                {/*<Header  theme={theme} toggleTheme={toggleTheme}/>*/}
                    <About/>
                    <Skills/>
                    <Works/>
                    <Resume/>
                    <ContactForm/>
                    <Footer/>
                {/*</Background>*/}
            </main>
        </div>
    );
}

export default App;

import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Header} from "./components/Header/Header";
import {About} from "./components/About/About";
import Background from "./ui-components/Background/Background";

function App() {
  return (
    <div className="App">
      <main className={'main'}>
          <Background>
          <Header/>
          <About/>
          </Background>
      </main>
    </div>
  );
}

export default App;

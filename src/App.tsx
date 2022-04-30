import React from 'react';
import './App.css';
import {Header} from './components/Header/Header'
import {AboutMe} from './components/AboutMe/AboutMe';
import {Skills} from './components/Skills/Skills';
import {Projects} from './components/Projects/Projects';

export const App = () => {
    return (
        <div className="App">
            <Header/>
            <AboutMe/>
            <Skills/>
            <Projects/>

        </div>
    );
};

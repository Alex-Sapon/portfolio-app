import React from 'react';
import './App.css';
import {Header} from './components/Header/Header';
import {Greetings} from './components/Greetings/Greetings';
import {Skills} from './components/Skills/Skills';
import {Projects} from './components/Projects/Projects';
import {ContactForm} from './components/ContactForm/ContactForm';
import {Footer} from './components/Footer/Footer';
import {About} from './components/About/About';
import mainStyles from './common/styles/General.module.css';

export const App = () => {
    return (
        <div className="App">
            <Header/>
            <main className={`${mainStyles.mainBGColor}`}>
                <Greetings/>
                <About/>
                <Skills/>
                <Projects/>
                <ContactForm/>
            </main>
            <Footer/>
        </div>
    );
};

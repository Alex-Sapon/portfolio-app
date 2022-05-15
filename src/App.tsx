import React, {useState} from 'react';
import {Header} from './components/Header/Header';
import {Greetings} from './components/Greetings/Greetings';
import {Skills} from './components/Skills/Skills';
import {Projects} from './components/Projects/Projects';
import {ContactForm} from './components/ContactForm/ContactForm';
import {Footer} from './components/Footer/Footer';
import {About} from './components/About/About';
import styled, {ThemeProvider} from 'styled-components';

const Container = styled.div`
  background-color: ${props => props.theme.body};
  color: ${props => props.theme.title};
  transition: all 0.4s ease;
`;

export const Wrapper = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 15px;
`;

const lightTheme = {
    body: '#F7FAFC',
    title: '#2d3748',
}

const darkTheme = {
    body: '#2d3748',
    title: '#F7FAFC',
}

export const App = () => {
    const [theme, setTheme] = useState<'light' | 'dark'>('light');
    const isDarkTheme = theme === 'dark';

    const toggleTheme = () => {
        setTheme(isDarkTheme ? 'light' : 'dark');
    };

    return (
        <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
            <Container>
                <Header toggleTheme={toggleTheme} isDarkTheme={isDarkTheme}/>
                <Wrapper>
                    <Greetings/>
                    <About/>
                    <Skills/>
                    <Projects/>
                    <ContactForm/>
                    <Footer/>
                </Wrapper>
            </Container>
        </ThemeProvider>
    );
};

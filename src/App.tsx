import {useEffect, useState} from 'react';
import {Header} from './features/header/Header';
import {Greetings} from './features/greetings/Greetings';
import {Skills} from './features/skills/Skills';
import {ContactForm} from './features/contact-form/ContactForm';
import {Footer} from './features/footer/Footer';
import {Projects} from './features/projects/Projects';
import {About} from './features/about/About';
import styled, {ThemeProvider} from 'styled-components';
import {loadState, saveState, ThemeType} from './utils/local-storage';

export const App = () => {
    const [theme, setTheme] = useState<ThemeType | undefined>(loadState());
    const isDarkTheme = theme === 'dark';

    useEffect(() => {
        setTheme(loadState());
    }, [theme]);

    const toggleTheme = () => {
        setTheme(saveState(isDarkTheme ? 'light' : 'dark'));
    };

    return (
        <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
            <Container>
                <Header toggleTheme={toggleTheme} isDarkTheme={isDarkTheme}/>
                <MainWrapper>
                    <Greetings/>
                    <About/>
                    <Skills/>
                    <Projects/>
                    <ContactForm/>
                    <Footer/>
                </MainWrapper>
            </Container>
        </ThemeProvider>
    );
};


const Container = styled.div`
  background-color: ${props => props.theme.body};
  color: ${props => props.theme.title};
  transition: all 0.4s ease;
`;

export const MainWrapper = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 15px;
`;

const lightTheme = {
    header: '#F7FAFC',
    body: '#F7FAFC',
    title: '#2d3748',
}

const darkTheme = {
    header: 'red',
    body: '#2d3748',
    title: '#F7FAFC',
}

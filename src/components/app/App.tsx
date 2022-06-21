import {Header} from '../../features/header/Header';
import {Greetings} from '../../features/greetings/Greetings';
import {Skills} from '../../features/skills/Skills';
import {ContactForm} from '../../features/contact-form/ContactForm';
import {Footer} from '../../features/footer/Footer';
import {Projects} from '../../features/projects/Projects';
import {About} from '../../features/about/About';
import styled, {ThemeProvider} from 'styled-components';
import {useDispatch, useSelector} from 'react-redux';

import {AppActions} from '../app/app-actions'
import {RootStateType} from '../app/store'

export const selectTheme = (state: RootStateType) => state.app.theme;

export const App = () => {
    const dispatch = useDispatch();

    const theme = useSelector(selectTheme);

    const toggleTheme = () => {
        dispatch(AppActions.setTheme(theme === 'dark' ? 'light' : 'dark'));
    };

    const isDarkTheme = theme === 'dark';

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


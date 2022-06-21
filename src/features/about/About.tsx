import {university, career} from '../../data/data';
import styled from 'styled-components';
import {Title} from '../../components/title/Title';
import {Subtitle} from '../../components/subtitle/Subtitle';
import { MainWrapper } from '../../components/app/App';
import {Skill} from './skill/Skill';

export const About = () => {
    return (
        <Container>
            <Title title='About me'/>
            <Subtitle subtitle='Education'/>
            <ListWrapper style={{marginBottom: '30px'}}>
                {university.map((item, i) => <Skill key={i} {...item}/>)}
            </ListWrapper>
            <Subtitle subtitle='Career'/>
            <ListWrapper>
                {career.map((item, i) => <Skill key={i} {...item}/>)}
            </ListWrapper>
        </Container>
    )
};

const Container = styled.div`
    padding-bottom: 50px;
    display: flex;
    flex-direction: column;
`;

const ListWrapper = styled.div`
    display: grid;
    gap: 20px;
`;
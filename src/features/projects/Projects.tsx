import {Project} from './Project/Project';
import mainStyles from '../../common/styles/General.module.css';
import { projects } from '../../data/data';
import {Title} from '../../components/title/Title';
import styled from 'styled-components';


export const Projects = () => {
    return (
        <Wrapper className={mainStyles.main_container}>
            <Title title='Projects'/>
            <ProjectsList>
                {projects.map(item => <Project key={item?.id} {...item}/>)}
            </ProjectsList>
        </Wrapper>
    )
};

const Wrapper = styled.div`
    padding-bottom: 50px;
    display: flex;
    flex-direction: column;
`;

const ProjectsList = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: auto;
    gap: 30px;
    color: #2d3748;

    @media (max-width: 991.98px) {
        grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
    }

    @media (max-width: 767.98px) {
    }
    
    @media (max-width: 479.98px) {}
`;
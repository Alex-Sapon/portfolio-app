import styled from 'styled-components';
import { Subtitle } from '../../../components/subtitle/Subtitle';
import styles from './Project.module.css';

type ProjectType = {
    id?: number
    title?: string
    alt?: string
    logo?: string
}

export const Project = ({title, alt, logo}: ProjectType) => {
  return (
      <Wrapper>
          <Image src={logo} alt={alt}/>
          <Description>
              <Title>{title}</Title>
              <Text>This is an Ecommerce furniture site.</Text>
          </Description>
      </Wrapper>
  )
};

const Wrapper = styled.section`
    border: 1px solid #EDF2F7;
    border-radius: 5px;
    background-color: #FFFFFF;
`;

const Image = styled.img.attrs({})`
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    display: block;
    width: 100%;
    height: 250px;
    object-fit: cover;
    margin-bottom: 15px;
    background-color: lightslategrey;
`;

const Description = styled.div`
    padding: 15px;
`;

const Title = styled.h3`
    margin-bottom: 10px;    
`;

const Text = styled.p`

`;



import BG from '../../../common/images/bg.png';
import styled from 'styled-components';

type SkillType = {
    title: string
    alt: string
    role: string
    skills: string[]
    period: string
    logo: string
}

export const Skill = (props: SkillType) => {
    const {title, alt, role, skills, period, logo} = props;

    return (
        <Container>
            <Image/>
            <Description>
                <Title>{title}</Title>
                <Subtitle>{role}</Subtitle>
                <SkillList>
                    {skills.map(skill => <SkillStyled key={skill}>{skill}</SkillStyled>)}
                </SkillList>
            </Description>
            <Period>{period}</Period>
        </Container>
    )
};

const Container = styled.div`
  padding: 10px;
  border: solid 1px lightslategrey;
  border-radius: 4px;
  background-color: #fff;
  color: #2d3748;
  display: grid;
  grid-template-columns: 60px 1fr 120px;
  gap: 15px;

  @media (max-width: 991.98px) {
  }

  @media (max-width: 767.98px) {
    padding: 10px 10px 0px 10px;
  }

  @media (max-width: 479.98px) {
    padding: 10px 10px 10px 10px;
    grid-template-columns: 1fr;
  }
`;

const Image = styled.img.attrs({
    src: BG,
    alt: 'Image',
})`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  object-fit: cover;
`;

const Description = styled.div`
  padding: 5px;
`;

const Title = styled.h4`
  margin-bottom: 10px;
`;

const Subtitle = styled.p`
  margin-bottom: 10px;
`;

const SkillList = styled.div`
  display: flex;
  flex-wrap: wrap
`;

const SkillStyled = styled.span`
  background-color: #9AB8BA;
  padding: 3px 8px;
  border-radius: 3px;
  margin-right: 7px;

  @media (max-width: 767.98px) {
    margin-bottom: 10px;
  }
`;

const Period = styled.div`
  text-align: center;
  padding: 5px;
  @media (max-width: 479.98px) {
    text-align: left;
  }
`;
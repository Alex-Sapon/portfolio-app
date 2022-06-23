import {FC, useState} from 'react';
import {NavLink} from 'react-router-dom';
import Avatar from '../../common/images/avatar.png';
import Sun from '../../common/images/sun.svg';
import Moon from '../../common/images/moon.svg';
import styled from 'styled-components';

type HeaderType = {
    toggleTheme: () => void
    isDarkTheme: boolean
}

export const Header: FC<HeaderType> = ({toggleTheme, isDarkTheme}) => {
    const [isToggled, setIsToggled] = useState(isDarkTheme);

    const onToggle = () => {
        setIsToggled(!isDarkTheme);
        toggleTheme();
    };

    return (
        <Container>
            <Wrapper>
                <NavGroup>
                    <NavList>
                        <NavItem><Link to="/"><AvatarItem/></Link></NavItem>
                        <NavItem><Link to="About-me">About me</Link></NavItem>
                        <NavItem><Link to="Skills">Skills</Link></NavItem>
                        <NavItem><Link to="Projects">Projects</Link></NavItem>
                        <NavItem><Link to="Contacts">Contacts</Link></NavItem>
                    </NavList>
                    <WrapperIcon onClick={onToggle}>
                        <Image src={isToggled ? Sun : Moon} alt="Theme"/>
                    </WrapperIcon>
                </NavGroup>
            </Wrapper>
        </Container>
    )
};

const Container = styled.header`
  background-color: ${props => props.theme.body};
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  position: fixed;
  width: 100%;
  z-index: 5;
  font-family: var(--family);
`;

const Wrapper = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 15px;
`;

const NavGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: var(--family);
`;

const NavList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  font-size: 18px;
  width: 400px;
  font-family: var(--family);

  @media (max-width: 767.98px) {
    width: auto;
  }
`;

const NavItem = styled.li`
  text-decoration: none;
  color: inherit;
  font-family: var(--family);
`;

const Link = styled(NavLink)`
  text-decoration: none;
  color: inherit;
  font-family: var(--family);
`;

const WrapperIcon = styled.div`
  width: 40px;
  height: 40px;
  cursor: pointer;
`;

const Image = styled.img.attrs({})`
  width: 100%;
  object-fit: cover;
`;

const AvatarItem = styled.img.attrs({
    src: Avatar,
    alt: 'Home',
})`
  width: 30px;
  height: 30px;
`;


// @media (max-width: 991.98px) {}

// @media (max-width: 767.98px) {
//     .header_nav li:not(:first-child) {
//         display: none;
//         width: 400px;
//     }
//     .header_nav {
//         width: auto;
//     }
// }

// @media (max-width: 479.98px) {}
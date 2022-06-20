import {FC, useState} from 'react';
import {NavLink} from 'react-router-dom';
import Avatar from '../../common/images/avatar.png';
import Sun from '../../common/images/sun.svg';
import Moon from '../../common/images/moon.svg';
import {MainWrapper} from '../../App';
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
            <MainWrapper>
                <Wrapper>
                    <NavList>
                        <NavItem><NavLink to="/"><AvatarItem /></NavLink></NavItem>
                        <NavItem><NavLink to="/">About me</NavLink></NavItem>
                        <NavItem><NavLink to="/">Skills</NavLink></NavItem>
                        <NavItem><NavLink to="/">Projects</NavLink></NavItem>
                        <NavItem><NavLink to="/">Contacts</NavLink></NavItem>
                    </NavList>
                    <WrapperIcon onClick={onToggle}>
                        <Image src={isToggled ? Sun : Moon} alt="Theme"/>
                    </WrapperIcon>
                </Wrapper>
            </MainWrapper>
        </Container>
    )
};

const Container = styled.header`
    background-color: ${props => props.theme.body};
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),0 4px 6px -2px rgba(0, 0, 0, 0.05);
    position: fixed;
    width: 100%;
    z-index: 5;
`;

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const NavList = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    font-size: 18px;
    width: 400px;
    @media (max-width: 767.98px) {
        width: auto;
    }
`;

const NavItem = styled.li`
    text-decoration: none;
    color: inherit;
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
    alt: "Home",
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
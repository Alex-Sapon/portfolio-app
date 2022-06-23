import GitHubLogo from '../../common/images/github.svg';
import LinkedInLogo from '../../common/images/linkedin.svg';
import InstagramLogo from '../../common/images/instagram.svg';
import TelegramLogo from '../../common/images/telegram.svg';
import styled from 'styled-components';

export const Footer = () => {
    return (
        <footer>
            <Container>
                <Copy>© 2022 Aleksandr Saponchik</Copy>
                <NavList>
                    <li><a target="_blank" href="https://github.com/Alex-Sapon">
                        <Image src={GitHubLogo} alt="HitHub"/></a>
                    </li>
                    <li><a target="_blank" href="https://www.linkedin.com/in/aliaksandr-saponchik-610570221/">
                        <Image src={LinkedInLogo} alt="LinkedIn"/></a>
                    </li>
                    <li><a target="_blank" href="https://www.instagram.com/sasha_saponchik/?hl=ru">
                        <Image src={InstagramLogo} alt="Instagram"/></a>
                    </li>
                    <li><a target="_blank" href="https://t.me/Aleksandr_Saponchik">
                        <Image src={TelegramLogo} alt="Telegram"/></a>
                    </li>
                </NavList>
            </Container>
        </footer>
    )
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: 30px 15px;
  
  @media (max-width: 991.98px) {}
  @media (max-width: 767.98px) {}
  @media (max-width: 479.98px) {
    flex-direction: column-reverse;
    justify-content: center;
  }
`;

const Copy = styled.p`
  font-size: 18px;
  color: inherit;
`;

const NavList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;

  li:not(:last-child) {
    margin-right: 20px;
  }

  @media (max-width: 479.98px) {
    margin-bottom: 15px;
  }
`;

const Image = styled.img`
  width: 35px;
  height: 35px;
`;
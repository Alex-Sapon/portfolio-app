import mainStyles from '../../common/styles/General.module.css';
import styles from './Footer.module.css';
import GitHubLogo from '../../common/images/github.svg';
import LinkedInLogo from '../../common/images/linkedin.svg';
import InstagramLogo from '../../common/images/instagram.svg';
import TelegramLogo from '../../common/images/telegram.svg';

export const Footer = () => {
    return (
        <footer>
            <div className={`${styles.footer_container} ${mainStyles.main_container}`}>
                <p className={styles.footer_copy}>© 2022 Aleksandr Saponchik</p>
                <ul className={styles.footer_nav}>
                    <li><a href=""><img src={GitHubLogo} alt="HitHub"/></a></li>
                    <li><a href=""><img src={LinkedInLogo} alt="LinkedIn"/></a></li>
                    <li><a href=""><img src={InstagramLogo} alt="Instagram"/></a></li>
                    <li><a href=""><img src={TelegramLogo} alt="Telegram"/></a></li>
                </ul>
            </div>
        </footer>
    )
}
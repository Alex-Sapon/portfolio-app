import styles from './Header.module.css';
import {FC, useState} from 'react';
import {NavLink} from 'react-router-dom';
import Avatar from '../../common/images/avatar.png';
import Sun from '../../common/images/sun.svg';
import Moon from '../../common/images/moon.svg';
import {Wrapper} from '../../App';

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
        <header className={styles.header_container}>
            <Wrapper className={styles.header_wrapper}>
                <nav>
                    <ul className={styles.header_nav}>
                        <li><NavLink to="/"><img src={Avatar} alt="Home"/></NavLink></li>
                        <li><NavLink to="/">About me</NavLink></li>
                        <li><NavLink to="/">Skills</NavLink></li>
                        <li><NavLink to="/">Projects</NavLink></li>
                        <li><NavLink to="/">Contacts</NavLink></li>
                    </ul>
                </nav>
                <div className={styles.header_theme} onClick={onToggle}>
                    <img src={isToggled ? Sun : Moon} alt="Theme"/>
                </div>
            </Wrapper>
        </header>
    )
};
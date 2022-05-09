import {NavLink} from 'react-router-dom';
import styles from './Navigation.module.css';
import Avatar from '../../common/images/avatar.png';
import mainStyles from '../../common/styles/General.module.css';
import Moon from '../../common/images/moon.svg';
import Sun from '../../common/images/sun.svg';
import {useState} from 'react';

export const Navigation = () => {
    const [theme, setTheme] = useState(true);
    return (
        <div className={`${styles.nav_container} ${mainStyles.main_container}`}>
            <nav>
                <ul className={styles.nav_list}>
                    <li><NavLink to="/"><img src={Avatar} alt="Home"/></NavLink></li>
                    <li><NavLink to="/">About me</NavLink></li>
                    <li><NavLink to="/">Skills</NavLink></li>
                    <li><NavLink to="/">Projects</NavLink></li>
                    <li><NavLink to="/">Contacts</NavLink></li>
                </ul>
            </nav>
            <div className={styles.nav_theme} onClick={() => setTheme(!theme)}>
                <img src={theme ? Moon : Sun} alt="Theme"/>
            </div>
        </div> 
    )
};



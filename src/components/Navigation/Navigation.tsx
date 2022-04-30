import {NavLink} from 'react-router-dom';
import styles from './Navigation.module.css'
import mainStyles from '../../common/styles/General.module.css';

export const Navigation = () => {
    return (
        <nav className={mainStyles.container}>
            <ul className={styles.nav_list}>
                <li><NavLink to="/"><img src="" alt="Home"/></NavLink></li>
                <li><NavLink to="/">Skills</NavLink></li>
                <li><NavLink to="/">Projects</NavLink></li>
                <li><NavLink to="/">Contacts</NavLink></li>
            </ul>
        </nav>
    )
}
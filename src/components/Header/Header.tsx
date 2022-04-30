import styles from './Header.module.css';
import {Navigation} from '../Navigation/Navigation';

export const Header = () => {
    return (
        <header className={styles.header_container}>
            <Navigation/>
        </header>
    )
}
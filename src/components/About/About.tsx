import mainStyles from '../../common/styles/General.module.css';
import styles from './About.module.css';
import {Item} from './Item/Item';

export const About = () => {
    return (
        <div className={`${styles.about_container} ${mainStyles.main_container}`}>
            <h2 className={styles.about_title}>About me</h2>
            <div className={styles.about_items}>
                {[...Array(6)].map((item, i) => <Item key={i}/>)}
            </div>
        </div>
    )
};
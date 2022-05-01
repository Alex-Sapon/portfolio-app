import {Project} from './Project/Project';
import mainStyles from '../../common/styles/General.module.css';
import styles from './Projects.module.css';

export const Projects = () => {
    const projects = ['Social network', 'Todo list', 'Counter', 'Ecommerce']

    return (
        <div className={`${styles.projects_wrapper} ${mainStyles.mainBGColor}`}>
            <div className={`${mainStyles.main_container}`}>
                <h2 className={styles.projects_title}>Projects</h2>
                <div className={styles.projects_items}>
                    {projects.map((item, i) => <Project key={i} item={item}/>)}
                </div>
            </div>
        </div>
    )
}
import {Skill} from './Skill/Skill';
import mainStyles from '../../common/styles/General.module.css'
import styles from './Skills.module.css'

export const Skills = () => {
    const item = {
        name: ['HTML', 'CSS', 'JavaScript', 'React', 'TypeScript', 'Redux']
    }
    return (
        <div className={`${mainStyles.mainBGColor} ${styles.skills_wrapper}`}>
            <div className={`${mainStyles.main_container}`}>
                <h2 className={styles.skills_title}>Skills</h2>
                <div className={styles.skills_items}>
                    {item.name.map((skill, i) => <Skill key={i} skill={skill}/>)}
                </div>
            </div>
        </div>
    )
}
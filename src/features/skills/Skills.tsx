import {Skill} from './Skill/Skill';
import styles from './Skills.module.css';
import HTMLIcon from '../../common/images/html.svg';
import CSSIcon from '../../common/images/css.svg';
import JSIcon from '../../common/images/js.svg';
import ReactIcon from '../../common/images/react.svg';
import TSIcon from '../../common/images/ts.svg';
import ReduxIcon from '../../common/images/redux.svg';

export type SkillType = {
    title: string
    img: string
}

export const Skills = () => {
    const item: SkillType[] = [
        {title: 'HTML', img: HTMLIcon},
        {title: 'CSS', img: CSSIcon},
        {title: 'JavaScript', img: JSIcon},
        {title: 'React', img: ReactIcon},
        {title: 'TypeScript', img: TSIcon},
        {title: 'Redux', img: ReduxIcon},
    ]

    return (
        <div>
            <div className={styles.skills_wrapper}>
                <h2 className={styles.skills_title}>Skills</h2>
                <div className={styles.skills_items}>
                    {item.map((skill, i) => <Skill key={i} skill={skill}/>)}
                </div>
            </div>
        </div>
    )
}
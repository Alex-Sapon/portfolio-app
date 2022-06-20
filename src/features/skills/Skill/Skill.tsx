import styles from './Skill.module.css';
import {SkillType} from '../Skills';

type SkillPropsType = {
    skill: SkillType
}

export const Skill = ({skill}: SkillPropsType) => {
  return (
      <div className={styles.skill_wrapper}>
          <img src={skill.img} alt=""/>
          <h3 className={styles.skill_title}>{skill.title}</h3>
          <p>This is an Ecommerce furniture site. It provides a single platform to multiple vendors where they can put their products on sale.</p>
      </div>
  )
}
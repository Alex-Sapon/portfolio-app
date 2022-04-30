import styles from './Skill.module.css';

type SkillType = {
    skill: string
}

export const Skill = ({skill}: SkillType) => {
  return (
      <div className={styles.skill_wrapper}>
          <img src="" alt=""/>
          <h3 className={styles.skill_title}>{skill}</h3>
          <p>This is an Ecommerce furniture site. It provides a single platform to multiple vendors where they can put their products on sale.</p>
      </div>
  )
}
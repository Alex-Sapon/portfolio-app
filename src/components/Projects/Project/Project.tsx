import styles from './Project.module.css';
import ProjectBG from '../../../common/images/bg.png'

type ProjectType = {
    item: string
}

export const Project = ({item}: ProjectType) => {
  return (
      <div className={styles.project_wrapper}>
          <img src={ProjectBG} alt="Project"/>
          <div className={styles.project_description}>
              <h3 className={styles.project_title}>{item}</h3>
              <p>This is an Ecommerce furniture site.</p>
          </div>
      </div>
  )
}



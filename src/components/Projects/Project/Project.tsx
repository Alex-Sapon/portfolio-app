import styles from './Project.module.css';
import bg from '../../common/images/bg.png';

type ProjectType = {
    item: string
}

export const Project = ({item}: ProjectType) => {
  return (
      <div className={styles.project_wrapper}>
          <img src={'https://itvdn.blob.core.windows.net/specialities-covers/react-developer-645951e3-60aa-413c-89be-4c5162cf2dd2.png'} alt="Project"/>
          <div className={styles.project_description}>
              <h3 className={styles.project_title}>{item}</h3>
              <p>This is an Ecommerce furniture site.</p>
          </div>
      </div>
  )
}
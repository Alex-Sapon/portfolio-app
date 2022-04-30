import styles from './AboutMe.module.css';
import mainStyles from '../../common/styles/General.module.css';

export const AboutMe = () => {
  return (
      <div className={`${mainStyles.mainBGColor}`}>
          <div className={`${styles.aboutMe_wrapper} ${mainStyles.container}`}>
              <div className={styles.aboutMe_avatar}>
                  <img src="" alt="Avatar"/>
              </div>
              <div>
                  <span>Hey!</span>
                  <h1>My name is Sasha</h1>
                  <p>I'm a Front-end Developer. Here you can see my projects and learn more about me.</p>
              </div>
          </div>
      </div>
  )
}
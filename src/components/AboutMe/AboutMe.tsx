import mainStyles from '../../common/styles/General.module.css';
import styles from './AboutMe.module.css';
import Avatar from '../../common/images/avatar.png'

export const AboutMe = () => {
    return (
        <div className={`${mainStyles.mainBGColor}`}>
            <div className={`${styles.about_me_container} ${mainStyles.main_container}`}>
                <img className={styles.about_me_avatar} src={Avatar} alt="Avatar"/>
                <div className={styles.about_me_description}>
                    <span>Hey! 👋</span>
                    <div className={styles.about_me_divider}></div>
                    <h1>My name is Sasha</h1>
                    <p>I'm a Front-end Developer. Here you can see my projects and learn more about me.</p>
                </div>
            </div>
        </div>
    )
}
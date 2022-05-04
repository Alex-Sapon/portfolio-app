import mainStyles from '../../common/styles/General.module.css';
import styles from './Greetings.module.css';
import Avatar from '../../common/images/avatar.png';

export const Greetings = () => {
    return (
        <div className={mainStyles.mainBGColor}>
            <div className={`${styles.greetings_container} ${mainStyles.main_container}`}>
                <img className={styles.greetings_avatar} src={Avatar} alt="Avatar"/>
                <div className={styles.greetings_description}>
                    <span>Hey! 👋</span>
                    <h1>My name is Aleksandr</h1>
                    <p>I'm a Front-end Developer. Here you can see my projects and learn more about me.</p>
                </div>
            </div>
        </div>
    )
}
import mainStyles from '../../common/styles/General.module.css';
import styles from './ContactForm.module.css';

export const ContactForm = () => {
    return (
        <div className={`${mainStyles.mainBGColor}`}>
            <div className={`${styles.contact_form_container} ${mainStyles.main_container}`}>
                <h2 className={styles.contact_form_title}>Get in touch with me</h2>
                <form className={styles.contact_form} action="">
                    <input type="text"/>
                    <input type="text"/>
                    <textarea name="" id="" cols={30} rows={10}></textarea>
                    <button>Submit</button>
                </form>
            </div>
        </div>
    )
}
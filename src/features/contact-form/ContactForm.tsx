import mainStyles from '../../common/styles/General.module.css';
import { Title } from '../../components/title/Title';
import styles from './ContactForm.module.css';

export const ContactForm = () => {
    return (
        <div>
            <div className={`${styles.contact_form_container} ${mainStyles.main_container}`}>
                <Title title='Get in touch with me'/>
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
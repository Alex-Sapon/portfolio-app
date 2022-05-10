import styles from './Item.module.css';
import BG from '../../../common/images/bg.png'

export const Item = () => {
    return (
        <div className={styles.item_container}>
            <div className={styles.item_image}>
                <img src={BG} alt=""/>
            </div>
            <div className={styles.item_description}>
                <h4 className={styles.item_title}>National University of Computer and Emerging Sciences</h4>
                <p className={styles.item_subtitle}>Bachelor's Degree in Computer Science</p>
                <div className={styles.item_skill}>
                    <span>economist-manager</span>
                </div>
            </div>
            <div className={styles.item_year}>2012 - 2017</div>
        </div>
    )
}
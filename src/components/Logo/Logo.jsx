import styles from './Logo.module.css';
import placeholder from '../../assets/placeholder-logo.svg'

function Logo() {
    return (
        <div className={styles.logoContainer}>
            <img src={placeholder} alt="Logo" className={styles.logo} />
        </div>
    )
}

export default Logo;
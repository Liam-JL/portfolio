import styles from './Logo.module.css';
import placeholder from '../../assets/placeholder-logo.svg'

function Logo() {
    return (
        <img src={placeholder} alt="Logo" className={styles.logo} />
    )
}

export default Logo;
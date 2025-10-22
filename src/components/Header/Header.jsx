import styles from './Header.module.css';


function Header() {
    return (
        <header className={styles.header}>
            <div className={`${styles.block}, ${styles.logoBlock}`}>
                
            </div>
            <div className={`${styles.block}, ${styles.navBlock}`}>

            </div>
            <div className={`${styles.block}, ${styles.ctaBlock}`}>

            </div>
        </header>
    )
}

export default Header;
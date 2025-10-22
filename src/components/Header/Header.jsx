import styles from './Header.module.css';
import Logo from '../Logo/Logo';


function Header() {
    return (
        <header className={styles.header}>
            <div className={`${styles.block}`}>
                <Logo />
            </div>

            <div className={`${styles.block}`}>
                
            </div>
            
            <div className={`${styles.block}`}>
                
            </div>



        </header>
    )
}

export default Header;
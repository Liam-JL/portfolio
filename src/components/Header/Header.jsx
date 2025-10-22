import styles from './Header.module.css';
import Logo from '../Logo/Logo';
import Button from '../Button/Button';
import { MdMenuOpen } from "react-icons/md";


function Header() {
    return (
        <header className={styles.header}>
            <div className={`${styles.block} ${styles.logoBlock}`}>
                <Logo />
            </div>

            <div className={`${styles.block} ${styles.navBlock}`}>
                {/* Nav to be implemented in future version */}
            </div>
            
            <div className={`${styles.block} ${styles.ctaBlock}`}>
                <Button variant='primary' size='lg'><p>Email Me</p></Button>
            </div>

            <div className={`${styles.block} ${styles.openSideMenuBlock}`}>
                <MdMenuOpen  className={styles.menuIcon}/>
            </div>
        </header>
    )
}

export default Header;
import styles from './Hero.module.css';
import Button from '../Button/Button';
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

function Hero() {
  
  return (
    <section className={styles.hero}>
      <div className={`${styles.block} ${styles.contentsBlock}`}>
        <h1 className={styles.nameHeading}>Liam Lirson</h1>
        <h2 className={styles.title}>Junior Web Developer</h2>
        <span className={styles.profileLinksContainer}>
          <Button variant='primary' size='square'>
            <FaGithub  className={styles.buttonIcon}/>
          </Button>
          <Button variant='primary' size='square'>
            <FaLinkedinIn className={styles.buttonIcon}/>
          </Button>
        </span>
      </div>
      <div className={`${styles.block} ${styles.imageBlock}`}>

      </div>
    </section>
  )
}

export default Hero

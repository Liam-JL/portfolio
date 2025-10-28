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
          <a href="https://github.com/Liam-JL" target="_blank" rel="noopener noreferrer">
            <Button variant='primary' size='square'>
              <FaGithub />
            </Button>
          </a>
          <a href="https://www.linkedin.com/in/liam-lirson" target="_blank" rel="noopener noreferrer">
            <Button variant='primary' size='square'>
              <FaLinkedinIn />
            </Button>
          </a>
        </span>
      </div>
      <div className={`${styles.block} ${styles.imageBlock}`}>
        <div className={styles.imageContainer}>
          <img src="images/heroplaceholder.png" alt="" className={styles.heroImage}/>
        </div>
      </div>
    </section>
  )
}

export default Hero

import styles from './Hero.module.css';
import Button from '../Button/Button';
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import placeholderImage from '../../assets/placeholder.png';

function Hero() {
  
  return (
    <section className={styles.hero}>
      <div className={`${styles.block} ${styles.contentsBlock}`}>
        <h1 className={styles.nameHeading}>Liam Lirson</h1>
        <h2 className={styles.title}>Junior Web Developer</h2>
        <span className={styles.profileLinksContainer}>
          <Button variant='primary' size='square'>
            <FaGithub />
          </Button>
          <Button variant='primary' size='square'>
            <FaLinkedinIn />
          </Button>
        </span>
      </div>
      <div className={`${styles.block} ${styles.imageBlock}`}>
        <img src={placeholderImage} alt="" className={styles.heroImage}/>
      </div>
    </section>
  )
}

export default Hero

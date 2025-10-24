import styles from './Contents.module.css';

function Contents() {
  
  return (
    <main className={styles.contentContainer}>
      <div className={styles.content}>
        <section className={`${styles.block} ${styles.stackBlock}`}>
          <h3 className={`${styles.blockHeader} ${styles.stackHeader}`}>Stack</h3>
          <ul className={styles.stackList}>

          </ul>
        </section>
        <section className={`${styles.block} ${styles.projectsBlock}`}>
          <h3 className={`${styles.blockHeader} ${styles.projectsHeader}`}>Projects</h3>
          <ul className={styles.projectsList}>

          </ul>
        </section>
      </div>
    </main>
  )
}

export default Contents

import styles from './Contents.module.css';
import StackTile from '../StackTile/StackTile';
import ProjectCard from '../ProjectCard/ProjectCard';
import stackData from '../../data/stack.json'
import projectData from '../../data/projects.json'

function Contents() {
  return (
    <main className={styles.contentContainer}>
      <div className={styles.content}>
        <StackBlock />
        <ProjectsBlock />
      </div>
    </main>
  )
};

export function StackBlock() {
  return (
    <section className={`${styles.block} ${styles.stackBlock}`}>
      <h3 className={`${styles.blockHeader} ${styles.stackHeader}`}>Stack</h3>
      <ul className={styles.stackList}>
        {stackData.stack.map((tech, index) => (
          <li key={index} className={styles.tileContainer}>
            <StackTile name={tech.name} image={tech.image} />
          </li>
        ))}
      </ul>
    </section>
  )
};

export function ProjectsBlock() {
  return (
    <section className={`${styles.block} ${styles.projectsBlock}`}>
      <h3 className={`${styles.blockHeader} ${styles.projectsHeader}`}>Projects</h3>
      <ul className={styles.projectsList}>
        {projectData.projects.map((project, index) => (
          <li key={index} className={styles.cardContainer}>
            <ProjectCard project={project}/>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Contents

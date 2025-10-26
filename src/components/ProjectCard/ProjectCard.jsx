import styles from './ProjectCard.module.css';
import Button from '../Button/Button';

function ProjectCard({ project }) {
    return (
        <article className={styles.card}>
            <header className={styles.cardHeader} style={{ "--bg-url": `url(/images/${project.screenshot})` }}>
                <h4 className={styles.title}>{project.title}</h4>
            </header>
            <section className={styles.contents}>
                <p className={styles.description}>{project.description}</p>
                <div className={styles.buttonLinks}>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Button variant="primary" size="md"><span>Code</span></Button>
                    </a>
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                        <Button variant="secondary" size="md"><span>Live</span></Button>
                    </a>
                </div>
            </section>
        </article>
    )
}

export default ProjectCard;
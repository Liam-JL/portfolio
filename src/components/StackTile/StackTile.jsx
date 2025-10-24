import styles from './StackTile.module.css';

function StackTile({ name, image }) {
    return (
        <div className={styles.tile}>
            <div className={`${styles.container} ${styles.imageContainer}`}>
                <img src={image} alt="" className={styles.image} />
            </div>
            <div className={`${styles.container} ${styles.nameContainer}`}>
                <span className={styles.name}>
                    {name}
                </span>
            </div>
        </div>
    )
}

export default StackTile;
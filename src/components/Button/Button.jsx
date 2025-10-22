import styles from './Button.module.css'

function Button ( { variant = "primary", size = "md", children, ...props } ) {

    const className = `${styles.btn} ${styles[`btn--${variant}`]} ${styles[`btn--${size}`]}`;

    return (

        <button className={className} {...props}>
            {children}
        </button>
    )
}

export default Button;
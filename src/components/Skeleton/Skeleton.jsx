import styles from './Skeleton.module.css';

const Skeleton = (props) => {
    const {
        count = 1,
        type = 'banner',
    } = props;

    return (
        <>
        {count > 1 ? (
            <ul className={styles.list}>
                {[...Array(count)].map((_, index) => (
                    <li key={index} className={styles[type]}></li>
                ))}
            </ul>
        ) : (
            <div className={styles[type]}></div>
        )  }
        </>
    );
}

export default Skeleton;
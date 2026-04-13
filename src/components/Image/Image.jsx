import clsx from 'clsx';
import styles from './Image.module.css';

const Image = (props) => {
    const {
        src,
        className,
    } = props;

    return (
        <div className={clsx(styles.wrapper, className)}>
            {src ? <img src={src} alt='' className={styles.image} /> : null}
        </div>
    );
}

export default Image;
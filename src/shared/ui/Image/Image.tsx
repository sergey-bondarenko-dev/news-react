import clsx from 'clsx';
import styles from './Image.module.css';

interface Props {
    src: string,
    className?: string,
}

const Image = (props: Props) => {
    const {
        src,
        className,
    } = props;

    return (
        <div className={clsx(styles.wrapper, className)}>
            {src && src !== 'None' ? <img src={src} alt='' className={styles.image} /> : null}
        </div>
    );
}

export default Image;

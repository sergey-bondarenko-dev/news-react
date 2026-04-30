import clsx from 'clsx';
import styles from './Skeleton.module.css';
import { DirectionType, SkeletonType } from '@/shared/interfaces';

interface Props {
    count: number,
    type: SkeletonType,
    direction: DirectionType,
}

const Skeleton = (props: Props) => {
    const {
        count = 1,
        type = 'banner',
        direction = 'column',
    } = props;

    return (
        <>
        {count > 1 ? (
            <ul className={clsx(styles.list, styles[direction])}>
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

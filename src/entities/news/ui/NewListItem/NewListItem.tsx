import { INews } from '@/shared/interfaces';
import { formatTimeAgo } from '@/shared/date';
import { Image } from '@/shared/ui';
import styles from './NewListItem.module.css';

interface Props {
    item: INews,
}

const NewListItem = (props: Props) => {
    const {
        item,
        ...rest
    } = props;

    return (
        <li className={styles.item} {...rest}>
            <Image src={item.image} className={styles.image} />
            <div className={styles.body}>
                <h3 className={styles.title}>
                    {item.title}
                </h3>
                <p className={styles.extra}>
                    {formatTimeAgo(item.published)} by {item.author}
                </p>
            </div>
        </li>
    );
}

export default NewListItem;

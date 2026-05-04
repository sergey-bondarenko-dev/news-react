import { INews } from '@/shared/interfaces';
import { formatTimeAgo } from '@/shared/date';
import { Image } from '@/shared/ui';
import styles from './NewListItem.module.css';
import { Link } from 'react-router-dom';
import { routes } from '@/shared/config';

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
                    <Link to={routes.newsDetails.to(item.id)}>
                        {item.title}
                    </Link>
                </h3>
                <p className={styles.extra}>
                    {formatTimeAgo(item.published)} by {item.author}
                </p>
            </div>
        </li>
    );
}

export default NewListItem;

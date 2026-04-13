import { formatTimeAgo } from '../../helpers/formatTimeAgo';
import Image from '../Image';
import styles from './NewListItem.module.css';

const NewListItem = (props) => {
    const {
        item,
        ...rest
    } = props;

    console.log(item);
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
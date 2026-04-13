import NewListItem from '../NewListItem/NewListItem';
import styles from './NewList.module.css';

const NewList = (props) => {
    const {
        items,
    } = props;

    return (
        <ul className={styles.list}>
            {items.map((item) => (
                <NewListItem item={item} key={item.id} />
            ))}
        </ul>
    );
}

export default NewList;
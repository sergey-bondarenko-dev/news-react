import { withSkeleton } from '../../helpers/hoc';
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

const NewListWithSkeleton = withSkeleton(NewList, 'item', 10);

export default NewListWithSkeleton;
import { INews } from '@/shared/interfaces';
import { withSkeleton } from '@/shared/hocs';
import NewListItem from '../NewListItem/NewListItem';
import styles from './NewList.module.css';

interface Props {
    items: INews[],
}

const NewList = (props: Props) => {
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

const NewListWithSkeleton = withSkeleton<Props>(NewList, 'item', 10);

export default NewListWithSkeleton;

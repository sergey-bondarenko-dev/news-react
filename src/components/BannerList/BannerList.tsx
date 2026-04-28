import NewsBanner from '../NewsBanner';
import { withSkeleton } from '../../helpers/hoc';
import styles from './BannerList.module.css';
import { INews } from '@/interfaces';

interface Props {
    banners?: INews[];
}

const BannerList = (props: Props) => {
    const {
        banners,
    } = props;

    return (
        <ul className={styles.list}>
            {banners?.map((banner) => (
                <li key={banner.id} className={styles.listItem}>
                    <NewsBanner item={banner} />
                </li>
            ))}
        </ul>
    );
}

const BannerListWithSkeleton = withSkeleton<Props>(
    BannerList, 
    'banner', 
    6,
    'row',
);

export default BannerListWithSkeleton;

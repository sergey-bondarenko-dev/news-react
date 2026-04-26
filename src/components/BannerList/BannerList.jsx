import NewsBanner from '../NewsBanner';
import { withSkeleton } from '../../helpers/hoc';
import styles from './BannerList.module.css';

const BannerList = (props) => {
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

const BannerListWithSkeleton = withSkeleton(
    BannerList, 
    'banner', 
    6,
    'row',
);

export default BannerListWithSkeleton;
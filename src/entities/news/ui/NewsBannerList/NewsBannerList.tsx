import NewsBanner from '../NewsBanner';
import { withSkeleton } from '@/shared/hocs';
import { INews } from '@/shared/interfaces';
import styles from './NewsBannerList.module.css';

interface Props {
    banners?: INews[];
}

const NewsBannerList = (props: Props) => {
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
    NewsBannerList, 
    'banner', 
    6,
    'row',
);

export default BannerListWithSkeleton;

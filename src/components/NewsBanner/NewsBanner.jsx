import { formatTimeAgo } from '../../helpers/formatTimeAgo';
import Image from '../Image';
import { withSkeleton } from '../../helpers/hoc';
import styles from './NewsBanner.module.css';

const NewsBanner = (props) => {
  const {
    item = {},
  } = props;
  
  return (
      <div className={styles.root}>
        <Image src={item.image} />
        <h2 className={styles.title}>{item.title}</h2>
        <p className={styles.extra}>
          {formatTimeAgo(item.published)} by {item.author}
        </p>
      </div>
  );
}

const NewsBannerWithSkeleton = withSkeleton(NewsBanner, 'banner');

export default NewsBannerWithSkeleton;
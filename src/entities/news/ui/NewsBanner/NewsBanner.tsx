import { INews } from '@/shared/interfaces';
import { formatTimeAgo } from '@/shared/date';
import { Image } from '@/shared/ui';
import styles from './NewsBanner.module.css';

interface Props {
    item: INews;
}

const NewsBanner = (props: Props) => {
  const {
    item,
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

export default NewsBanner;

import { INews } from '@/shared/interfaces';
import { formatTimeAgo } from '@/shared/date';
import { Image } from '@/shared/ui';
import styles from './NewsBanner.module.css';
import { Link } from 'react-router-dom';
import { routes } from '@/shared/config';

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
        <Link to={routes.newsDetails.to(item.id)} className={styles.title}>{item.title}</Link>
        <p className={styles.extra}>
          {formatTimeAgo(item.published)} by {item.author}
        </p>
      </div>
  );
}

export default NewsBanner;

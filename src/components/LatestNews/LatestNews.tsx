import BannerList from '../BannerList';
import styles from './LatestNews.module.css';
import { useGetLatestNewsQuery } from '@/store/services/newsApi';

const LatestNews = () => {

    const { data, isLoading } = useGetLatestNewsQuery(null);
    const news = data?.news;

    return (
        <section className={styles.section}>
            <BannerList banners={news} isLoading={isLoading} />
        </section>
    );
}

export default LatestNews;

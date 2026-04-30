import { NewsBannerList } from '@/entities/news';
import { useGetLatestNewsQuery } from '@/entities/news';
import styles from './LatestNews.module.css';

const LatestNews = () => {

    const { data, isLoading } = useGetLatestNewsQuery(null);
    const news = data?.news;

    return (
        <section className={styles.section}>
            <NewsBannerList banners={news} isLoading={isLoading} />
        </section>
    );
}

export default LatestNews;

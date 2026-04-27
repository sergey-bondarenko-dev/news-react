import { newsApi } from '../../api/newsApi';
import { useFetch } from '../../hooks/useFetch';
import BannerList from '../BannerList';
import styles from './LatestNews.module.css';

const LatestNews = () => {

    const { data: dataNews, isLoading } = useFetch(newsApi.getLatestNews);
    const news = dataNews?.news;

    return (
        <section className={styles.section}>
            <BannerList banners={news} isLoading={isLoading} />
        </section>
    );
}

export default LatestNews;

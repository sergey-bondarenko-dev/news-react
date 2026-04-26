import BannerList from '../BannerList';
import styles from './LatestNews.module.css';

const LatestNews = (props) => {
    const {
        banners,
        isLoading,
    } = props;

    return (
        <section className={styles.section}>
            <BannerList banners={banners} isLoading={isLoading} />
        </section>
    );
}

export default LatestNews;
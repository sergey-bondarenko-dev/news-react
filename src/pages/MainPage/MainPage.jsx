import { useEffect, useState } from 'react';
import NewsBanner from '../../components/NewsBanner';
import styles from './MainPage.module.css';
import { newsApi } from '../../api/newsApi';
import NewList from '../../components/NewList/NewList';
import Skeleton from '../../components/Skeleton';

const MainPage = () => {
    const [news, setNews] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const loadNews = async () => {
            try {
                setIsLoading(true);

                const response = await newsApi.getAll();
                if (response.news) {
                    setNews(response.news);
                }
            } finally {
                setIsLoading(false);
            }
        }

        loadNews();
    }, [])

    return (
        <main className={styles.root}>
            {isLoading && (
                <>
                    <Skeleton type="banner" />
                    <Skeleton type="item" count={10} />
                </>
            )}

            {(news.length > 0 && !isLoading ) && (
                <>
                    <NewsBanner item={news[0]} />
                    <NewList items={news} />
                </>
            )}
        </main>
    );
}

export default MainPage;
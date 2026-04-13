import { useEffect, useState } from 'react';
import NewsBanner from '../../components/NewsBanner';
import styles from './MainPage.module.css';
import { newsApi } from '../../api/newsApi';
import NewList from '../../components/NewList/NewList';

const MainPage = () => {
    const [news, setNews] = useState([]);

    useEffect(() => {
        const loadNews = async () => {
            const response = await newsApi.getAll();
            if (response.news) {
                setNews(response.news);
            }
        }

        loadNews();
    }, [])

    return (
        <main className={styles.root}>
            {news.length > 0 && (
                <>
                    <NewsBanner item={news[0]} />
                    <NewList items={news} />
                </>
            )}
        </main>
    );
}

export default MainPage;
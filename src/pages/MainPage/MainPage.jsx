import { useMemo } from 'react';
import styles from './MainPage.module.css';
import { newsApi } from '../../api/newsApi';
import LatestNews from '../../components/LatestNews';
import { useDebounce } from '../../hooks/useDebounce';
import { useFetch } from '../../hooks/useFetch';
import { useFilters } from '../../hooks/useFilters';
import NewsByFilter from '../../components/NewsByFilter/NewsByFilter';

const MainPage = () => {
    const { filters, changeFilter } = useFilters();
    const debouncedKeywords = useDebounce(filters.keywords, 1000);

    const newsParams = useMemo(() => {
        return {
            pageNumber: filters.pageNumber,
            pageSize: filters.pageSize,
            category: filters.category,
            keywords: debouncedKeywords,
        };
    }, [
        filters.pageNumber,
        filters.pageSize,
        filters.category,
        debouncedKeywords,
    ]);

    const { data: dataNews, isLoading } = useFetch(newsApi.getAll, newsParams);

    const news = dataNews?.news;

    return (
        <main className={styles.root}>
            <LatestNews isLoading={isLoading} banners={news?.length > 0 && news} />
            <NewsByFilter
                filters={filters}
                changeFilter={changeFilter}
                news={news}
                isLoading={isLoading}
            />
        </main>
    );
}

export default MainPage;
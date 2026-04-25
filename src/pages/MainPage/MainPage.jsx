import { useMemo } from 'react';
import NewsBanner from '../../components/NewsBanner';
import styles from './MainPage.module.css';
import { newsApi } from '../../api/newsApi';
import NewList from '../../components/NewList/NewList';
import Pagination from '../../components/Pagination/Pagination';
import Categories from '../../components/Categories/Categories';
import Search from '../../components/Search/Search';
import { useDebounce } from '../../hooks/useDebounce';
import { PAGE_SIZE, TOTAL_PAGES } from '../../constants';
import { useFetch } from '../../hooks/useFetch';
import { useFilters } from '../../hooks/useFilters';

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

    const { data: dataCategories } = useFetch(newsApi.getCategories);

    const news = dataNews?.news;
    const categories = dataCategories?.categories;

    const currentPage = filters.pageNumber;

    const handleNextPageClick = () => {
        if (currentPage < TOTAL_PAGES) {
            changeFilter('pageNumber', currentPage + 1);
        }
    }

    const handlePrevPageClick = () => {
        if (currentPage > 1) {
            changeFilter('pageNumber', currentPage - 1);
        }
    }

    const handlePageClick = (pageNumber) => {
        changeFilter('pageNumber', pageNumber);
    }

    return (
        <main className={styles.root}>
            {categories && (
                <Categories 
                    categories={categories}
                    selectedCategory={filters.category}
                    setSelectedCategory={(category) => changeFilter('category', category)}
                />
            )}

            <Search 
                keywords={filters.keywords} 
                setKeywords={(keywords) => changeFilter('keywords', keywords)} 
            />
            <NewsBanner isLoading={isLoading} item={news?.length > 0 ? news[0] : null} />

            {(news?.length > 0) && (
                <Pagination dataNews
                    totalPages={TOTAL_PAGES}
                    handleNextPageClick={handleNextPageClick}
                    handlePrevPageClick={handlePrevPageClick}
                    handlePageClick={handlePageClick}
                    currentPage={currentPage}
                />
            )}

            <NewList isLoading={isLoading} items={news?.length > 0 ? news : []} />

            {(news?.length > 0) && (
                <Pagination 
                    totalPages={TOTAL_PAGES}
                    handleNextPageClick={handleNextPageClick}
                    handlePrevPageClick={handlePrevPageClick}
                    handlePageClick={handlePageClick}
                    currentPage={currentPage}
                />
            )}
        </main>
    );
}

export default MainPage;
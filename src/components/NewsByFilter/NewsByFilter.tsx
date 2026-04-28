import { TOTAL_PAGES } from '../../constants';
import NewsFilters from '../NewsFilters/NewsFilters';
import NewList from '../NewList/NewList';
import styles from './NewsByFilter.module.css';
import { useFilters } from '../../hooks/useFilters';
import { useDebounce } from '../../hooks/useDebounce';
import { useMemo } from 'react';
import { useFetch } from '../../hooks/useFetch';
import { newsApi } from '../../api/newsApi';
import PaginationWrapper from '../PaginationWrapper/PaginationWrapper';
import { NewsApiResponse, ParamsType } from '@/interfaces';

const NewsByFilter = () => {
    const { filters, changeFilter } = useFilters();
    const debouncedKeywords = useDebounce(filters.keywords, 1000);


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

    const handlePageClick = (pageNumber: number) => {
        changeFilter('pageNumber', pageNumber);
    }

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

    const { data: dataNews, isLoading } = useFetch<NewsApiResponse, ParamsType>(newsApi.getAll, newsParams);
    const news = dataNews?.news;
    

    return (
        <section className={styles.section}>
            <NewsFilters 
                filters={filters}
                changeFilter={changeFilter}
            />

            <PaginationWrapper
                totalPages={TOTAL_PAGES}
                handleNextPageClick={handleNextPageClick}
                handlePrevPageClick={handlePrevPageClick}
                handlePageClick={handlePageClick}
                currentPage={currentPage}
                top={true}
                bottom={true}
            >
                <NewList isLoading={isLoading} items={news && news.length && news.length > 0 ? news : []} />
            </PaginationWrapper>
        </section>
    );
}

export default NewsByFilter;

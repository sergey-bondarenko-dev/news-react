import { NewList} from '@/entities/news';
import { useDebounce } from '@/shared/timing';
import { PaginationWrapper } from '@/shared/ui';
import { useGetNewsQuery } from '@/entities/news';
import { useAppDispatch, useAppSelector } from '@/shared/store';
import { setFilters } from '@/entities/news';
import styles from './NewsByFilter.module.css';
import NewsFilters from '../NewsFilters';
import { TOTAL_PAGES } from '../../model/constants';

const NewsByFilter = () => {
    const filters = useAppSelector((state) => state.news.filters);
    const dispatch = useAppDispatch();
    const debouncedKeywords = useDebounce(filters.keywords, 1000);

    const currentPage = filters.pageNumber;

    const handleNextPageClick = () => {
        if (currentPage < TOTAL_PAGES) {
            dispatch(setFilters({ key: 'pageNumber', value: currentPage + 1 }));
        }
    }

    const handlePrevPageClick = () => {
        if (currentPage > 1) {
            dispatch(setFilters({ key: 'pageNumber', value: currentPage - 1 }));
        }
    }

    const handlePageClick = (pageNumber: number) => {
        dispatch(setFilters({ key: 'pageNumber', value: pageNumber }));
    }

    const { data, isLoading } = useGetNewsQuery({
        pageNumber: filters.pageNumber,
        pageSize: filters.pageSize,
        category: filters.category,
        keywords: debouncedKeywords,
    });
    const news = data?.news;
    
    return (
        <section className={styles.section}>
            <NewsFilters />

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

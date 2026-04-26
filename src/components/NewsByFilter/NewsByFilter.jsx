import { TOTAL_PAGES } from '../../constants';
import NewsFilters from '../NewsFilters/NewsFilters';
import NewList from '../NewList/NewList';
import Pagination from '../Pagination/Pagination';
import styles from './NewsByFilter.module.css';

const NewsByFilter = (props) => {
    const {
        filters,
        changeFilter,
        news,
        isLoading,
    } = props;

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
        <section className={styles.section}>
            <NewsFilters 
                filters={filters}
                changeFilter={changeFilter}
            />

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
        </section>
    );
}

export default NewsByFilter;

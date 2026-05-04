import clsx from 'clsx';
import styles from './Pagination.module.css';
import { IPaginationProps } from '@/shared/interfaces';

const Pagination = (props: IPaginationProps) => {
    const {
        totalPages,
        handleNextPageClick,
        handlePrevPageClick,
        handlePageClick,
        currentPage,
    } = props;

    return (
        <nav className={styles.root}>
            <button 
                aria-label='prev page'
                className={styles.arrow}
                type='button'
                onClick={handlePrevPageClick}
                disabled={currentPage === 1}
            >
                {'<'}
            </button>

            {[...Array(totalPages)].map((_, index) => (
                <button 
                    aria-label={`page ${index + 1}`}
                    key={index}
                    className={clsx(styles.pageNumber)}
                    disabled={currentPage === index + 1}
                    type='button'
                    onClick={() => handlePageClick(index + 1)}
                >
                    {index + 1}
                </button>
            ))}

            <button 
                aria-label='next page'
                className={styles.arrow}
                type='button'
                onClick={handleNextPageClick}
                disabled={currentPage === totalPages}
            >
                {'>'}
            </button>
        </nav>
    );
}

export default Pagination;

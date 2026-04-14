import { useEffect, useState } from 'react';
import NewsBanner from '../../components/NewsBanner';
import styles from './MainPage.module.css';
import { newsApi } from '../../api/newsApi';
import NewList from '../../components/NewList/NewList';
import Skeleton from '../../components/Skeleton';
import Pagination from '../../components/Pagination/Pagination';

const MainPage = () => {
    const TOTAL_PAGES = 10;
    const PAGE_SIZE = 10;

    const [news, setNews] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);

    const loadNews = async (currentPage) => {
        try {
            setIsLoading(true);

            const response = await newsApi.getAll(currentPage, PAGE_SIZE);
            if (response.news) {
                setNews(response.news);
            }
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        loadNews(currentPage);
    }, [currentPage]);

    const handleNextPageClick = () => {
        if (currentPage < TOTAL_PAGES) {
            setCurrentPage(currentPage + 1);
        }
    }

    const handlePrevPageClick = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    }

    const handlePageClick = (pageNumber) => {
        setCurrentPage(pageNumber);
    }

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
                    <Pagination 
                        totalPages={TOTAL_PAGES}
                        handleNextPageClick={handleNextPageClick}
                        handlePrevPageClick={handlePrevPageClick}
                        handlePageClick={handlePageClick}
                        currentPage={currentPage}
                    />
                    <NewList items={news} />
                    <Pagination 
                        totalPages={TOTAL_PAGES}
                        handleNextPageClick={handleNextPageClick}
                        handlePrevPageClick={handlePrevPageClick}
                        handlePageClick={handlePageClick}
                        currentPage={currentPage}
                    />
                </>
            )}
        </main>
    );
}

export default MainPage;
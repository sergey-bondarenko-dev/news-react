import { useEffect, useState } from 'react';
import NewsBanner from '../../components/NewsBanner';
import styles from './MainPage.module.css';
import { newsApi } from '../../api/newsApi';
import NewList from '../../components/NewList/NewList';
import Skeleton from '../../components/Skeleton';
import Pagination from '../../components/Pagination/Pagination';
import Categories from '../../components/Categories/Categories';
import Search from '../../components/Search/Search';
import { useDebounce } from '../../hooks/useDebounce';

const MainPage = () => {
    const TOTAL_PAGES = 10;
    const PAGE_SIZE = 10;

    const [news, setNews] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [keywords, setKeywords] = useState('');

    const debouncedKeywords = useDebounce(keywords, 1000);

    const loadNews = async (currentPage, selectedCategory, debouncedKeywords) => {
        try {
            setIsLoading(true);

            const params = {
                page_number: currentPage,
                page_size: PAGE_SIZE,
                category: selectedCategory === 'All' ? null : selectedCategory,
                keywords: debouncedKeywords,
            }

            const response = await newsApi.getAll(params);
            if (response.news) {
                setNews(response.news);
            }
        } finally {
            setIsLoading(false);
        }
    }

    const loadCategories = async () => {
        const response = await newsApi.getCategories();
        if (response.categories) {
            setCategories(['All', ...response.categories]);
        }
    }

    useEffect(() => {
        loadCategories();
    }, []);

    useEffect(() => {
        loadNews(currentPage, selectedCategory, debouncedKeywords);
    }, [currentPage, selectedCategory, debouncedKeywords]);

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
            <Categories 
                categories={categories}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
            />

            <Search keywords={keywords} setKeywords={setKeywords} />

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
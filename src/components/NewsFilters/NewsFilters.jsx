import { newsApi } from '../../api/newsApi';
import { useFetch } from '../../hooks/useFetch';
import Categories from '../Categories/Categories';
import Search from '../Search/Search';
import Slider from '../Slider';
import styles from './NewsFilters.module.css';

const NewsFilters = (props) => {
    const {
        filters,
        changeFilter,
    } = props;

    const { data: dataCategories } = useFetch(newsApi.getCategories);
    const categories = dataCategories?.categories;

    return (
        <div className={styles.filters}>
            {categories && (
                <Slider>
                    <Categories 
                        categories={categories}
                        selectedCategory={filters.category}
                        setSelectedCategory={(category) => changeFilter('category', category)}
                    />
                </Slider>
            )}

            <Search
                keywords={filters.keywords} 
                setKeywords={(keywords) => changeFilter('keywords', keywords)} 
            />
        </div>
    );
}

export default NewsFilters;

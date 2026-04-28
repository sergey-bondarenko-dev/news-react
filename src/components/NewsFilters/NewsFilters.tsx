import { CategoriesApiResponse, IFilters } from '@/interfaces';
import { newsApi } from '../../api/newsApi';
import { useFetch } from '../../hooks/useFetch';
import Categories from '../Categories/Categories';
import Search from '../Search/Search';
import Slider from '../Slider';
import styles from './NewsFilters.module.css';

interface Props {
    filters: IFilters;
    changeFilter: (key: string, value: string|number|null) => void;
}

const NewsFilters = (props: Props) => {
    const {
        filters,
        changeFilter,
    } = props;

    const { data: dataCategories } = useFetch<CategoriesApiResponse, null>(newsApi.getCategories);
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

import Categories from '../Categories/Categories';
import Search from '../Search/Search';
import Slider from '../Slider';
import styles from './NewsFilters.module.css';
import { useGetCategoriesQuery } from '@/store/services/newsApi';
import { useAppDispatch, useAppSelector } from '@/store';
import { setFilters } from '@/store/slices/newsSlice';

const NewsFilters = () => {
    const filters = useAppSelector((state) => state.news.filters);
    const dispatch = useAppDispatch();
    const { data } = useGetCategoriesQuery(null);
    const categories = data?.categories;

    return (
        <div className={styles.filters}>
            {categories && (
                <Slider>
                    <Categories 
                        categories={categories}
                        selectedCategory={filters.category}
                        setSelectedCategory={
                            (category) => dispatch(setFilters({
                                key: 'category',
                                value: category,
                            }))
                        }
                    />
                </Slider>
            )}

            <Search
                keywords={filters.keywords} 
                setKeywords={(keywords) => dispatch(setFilters({
                    key: 'keywords',
                    value: keywords,
                }))} 
            />
        </div>
    );
}

export default NewsFilters;

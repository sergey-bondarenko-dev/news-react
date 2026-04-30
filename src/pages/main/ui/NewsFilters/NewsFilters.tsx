import Categories from '../Categories';
import { Search, Slider } from '@/shared/ui';
import { useGetCategoriesQuery, setFilters } from '@/entities/news';
import { useAppDispatch, useAppSelector } from '@/shared/store';
import styles from './NewsFilters.module.css';

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
                query={filters.keywords} 
                setQuery={(keywords) => dispatch(setFilters({
                    key: 'keywords',
                    value: keywords,
                }))} 
            />
        </div>
    );
}

export default NewsFilters;

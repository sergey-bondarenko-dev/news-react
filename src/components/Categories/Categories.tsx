import clsx from 'clsx';
import styles from './Categories.module.css';
import { ForwardedRef, forwardRef } from 'react';
import { CategoryType } from '@/interfaces';

interface Props {
    categories: CategoryType[],
    selectedCategory: CategoryType | null;
    setSelectedCategory: (category: CategoryType | null) => void;
}

const Categories = forwardRef((props: Props, ref: ForwardedRef<HTMLDivElement>) => {
    const {
        categories,
        selectedCategory,
        setSelectedCategory,
    } = props;

    return (
        <div className={styles.root} ref={ref}>
            <button 
                key='all' 
                className={clsx(styles.button, selectedCategory === null && styles.isActive)}
                onClick={() => setSelectedCategory(null)}
            >
                All
            </button>
            {categories.map((category) => (
                <button 
                    key={category} 
                    className={clsx(styles.button, category === selectedCategory && styles.isActive)}
                    onClick={() => setSelectedCategory(category)}
                >
                    {category}
                </button>
            ))}
        </div>
    );
});

export default Categories;

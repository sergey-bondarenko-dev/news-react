import clsx from 'clsx';
import styles from './Categories.module.css';

const Categories = (props) => {
    const {
        categories,
        selectedCategory,
        setSelectedCategory,
    } = props;

    return (
        <div className={styles.root}>
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
}

export default Categories;
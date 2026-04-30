import styles from './Search.module.css';

interface Props {
    query: string,
    setQuery: (keywords: string) => void,
}

const Search = (props: Props) => {
    const {
        query,
        setQuery,
    } = props;
    
    return (
        <div className={styles.search}>
            <input
                type='text'
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                className={styles.input}
                placeholder='JavaScript'
            />
        </div>
    );
}

export default Search;

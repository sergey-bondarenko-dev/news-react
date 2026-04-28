import styles from './Search.module.css';

interface Props {
    keywords: string,
    setKeywords: (keywords: string) => void,
}

const Search = (props: Props) => {
    const {
        keywords,
        setKeywords,
    } = props;
    
    return (
        <div className={styles.search}>
            <input
                type='text'
                value={keywords}
                onChange={(event) => setKeywords(event.target.value)}
                className={styles.input}
                placeholder='JavaScript'
            />
        </div>
    );
}

export default Search;

import styles from './MainPage.module.css';
import LatestNews from '../LatestNews';
import NewsByFilter from '../NewsByFilter';

const MainPage = () => {
    return (
        <main className={styles.root}>
            <LatestNews />
            <NewsByFilter />
        </main>
    );
}

export default MainPage;

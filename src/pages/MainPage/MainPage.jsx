import styles from './MainPage.module.css';
import LatestNews from '../../components/LatestNews';
import NewsByFilter from '../../components/NewsByFilter/NewsByFilter';

const MainPage = () => {
    return (
        <main className={styles.root}>
            <LatestNews />
            <NewsByFilter />
        </main>
    );
}

export default MainPage;

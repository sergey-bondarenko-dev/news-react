import { useParams } from 'react-router-dom';
import styles from './NewPage.module.css';

const NewPage = () => {
    const { id } = useParams<{ id: string }>();

    return (
        <div className={styles.news}>
            News: { id }
        </div>
    );
}

export default NewPage;
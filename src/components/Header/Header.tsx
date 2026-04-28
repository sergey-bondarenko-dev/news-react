import clsx from "clsx";
import { formatDate } from "../../helpers/formatDate";
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={clsx(styles.inner, 'container')}>
        <h1 className={styles.title}>NEWS REACT</h1>
        <p className={styles.date}>{formatDate(new Date())}</p>
      </div>
    </header>
  );
}

export default Header;
import { useDocumentTitle, useScrollToHash } from '../hooks';
import { Link } from 'react-router-dom';
import { Timeline } from '../components/concerts/Timeline';
import styles from './Concerts.module.css';

export function Concerts() {
  useDocumentTitle('\\J|B/Studio - Concerts');
  useScrollToHash();

  return (
    <main>
      <section className={styles.concertListPage}>
        <header className={styles.header}>
          <Link to="/" className={styles.backButton}>
            <i className="fas fa-arrow-left"></i> Back to Studio
          </Link>
          <h2 className={styles.title}>My Concert Journey</h2>
        </header>
        <div className={styles.content}>
          <Timeline />
        </div>
      </section>
    </main>
  );
}

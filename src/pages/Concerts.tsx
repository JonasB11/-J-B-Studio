import { useDocumentTitle } from '../hooks';
import { Timeline } from '../components/concerts/Timeline';
import styles from './Concerts.module.css';

export function Concerts() {
  useDocumentTitle('Concerts');

  return (
    <main>
      <section className={styles.concertListPage}>
        <h2 className={styles.title}>My Concert Journey</h2>
        <div className={styles.content}>
          <Timeline />
        </div>
      </section>
    </main>
  );
}

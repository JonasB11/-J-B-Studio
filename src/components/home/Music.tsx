import { Link } from 'react-router-dom';
import { ImageWithFallback } from '../common/ImageWithFallback';
import { watchedData } from '../../data/watched';
import styles from './Music.module.css';

export function Music() {
  const topWatched = [...watchedData]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 5);

  return (
    <section id="music" className={styles.section}>
      <div className={styles.header}>
        <div>
          <h2 className={styles.sectionTitle}>Screening Room</h2>
          <p className={styles.subtitle}>Watched content</p>
        </div>
        <Link to="/watched" className={styles.viewAll}>
          View All <i className="fas fa-arrow-right"></i>
        </Link>
      </div>
      <div className={styles.grid}>
        {topWatched.map((entry) => (
          <article key={entry.id} className={styles.card}>
            <ImageWithFallback src={entry.image} alt={entry.title} className={styles.poster} />
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>{entry.title}</h3>
              <p className={styles.rating}>{'★'.repeat(entry.rating)}{'☆'.repeat(5 - entry.rating)}</p>
              <p className={styles.type}>{entry.type}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

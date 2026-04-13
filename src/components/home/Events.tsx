import { Link } from 'react-router-dom';
import { concerts } from '../../data/concerts';
import { ImageWithFallback } from '../common/ImageWithFallback';
import styles from './Events.module.css';

export function Events() {
  const topConcerts = [...concerts]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 5);

  return (
    <section id="events" className={styles.section}>
      <div className={styles.header}>
        <div>
          <h2 className={styles.sectionTitle}>Music & Concerts</h2>
          <p className={styles.subtitle}>Recent live shows</p>
        </div>
        <Link to="/concerts" className={styles.viewAll}>
          View All <i className="fas fa-arrow-right"></i>
        </Link>
      </div>
      <div className={styles.grid}>
        {topConcerts.map((concert) => (
          <article key={concert.id} className={styles.card}>
            <ImageWithFallback
              src={concert.artist.image}
              alt={concert.artist.name}
              className={styles.cardImage}
            />
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>{concert.artist.name}</h3>
              <p className={styles.cardMeta}>
                {new Date(concert.date).toLocaleDateString('de-DE', {
                  month: 'short',
                  year: 'numeric',
                })}{' '}
                • {concert.artist.details.city}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

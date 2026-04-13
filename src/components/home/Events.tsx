import { concerts } from '../../data/concerts';
import { ImageWithFallback } from '../common/ImageWithFallback';
import styles from './Events.module.css';

export function Events() {
  const highlights = concerts.slice(0, 6);

  return (
    <section id="events" className={styles.section}>
      <h2 className={styles.sectionTitle}>Music & Concerts</h2>
      <div className={styles.grid}>
        {highlights.map((concert) => (
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

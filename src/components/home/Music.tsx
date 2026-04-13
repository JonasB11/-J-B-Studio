import { ImageWithFallback } from '../common/ImageWithFallback';
import styles from './Music.module.css';

const watched = [
  { title: 'Dune Part Two', image: '/images/artists/twenty-one-pilots.jpeg' },
  { title: 'The Bear S2', image: '/images/artists/kasi.jpg' },
  { title: 'Oppenheimer', image: '/images/artists/rocco.jpeg' },
  { title: 'Succession', image: '/images/artists/lino.jpeg' },
  { title: 'Past Lives', image: '/images/artists/YU.webp' },
];

export function Music() {
  return (
    <section id="music" className={styles.section}>
      <h2 className={styles.sectionTitle}>Screening Room</h2>
      <p className={styles.subtitle}>Watched content</p>
      <div className={styles.grid}>
        {watched.map((entry) => (
          <article key={entry.title} className={styles.card}>
            <ImageWithFallback src={entry.image} alt={entry.title} className={styles.poster} />
            <h3 className={styles.cardTitle}>{entry.title}</h3>
            <p className={styles.rating}>★★★★☆</p>
          </article>
        ))}
      </div>
    </section>
  );
}

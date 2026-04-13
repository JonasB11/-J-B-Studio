import { Link } from 'react-router-dom';
import { lightShows } from '../data/lightshows';
import { ImageWithFallback } from '../components/common/ImageWithFallback';
import styles from './LightshowsPage.module.css';
import { useScrollToHash, useDocumentTitle } from '../hooks';

export function LightshowsPage() {
  useDocumentTitle('\\J|B/Studio - Light Shows');
  useScrollToHash();

  const sortedShows = [...lightShows]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <main className={styles.container}>
      <header className={styles.header}>
        <Link to="/" className={styles.backButton}>
          <i className="fas fa-arrow-left"></i> Back to Studio
        </Link>
        <h1 className={styles.title}>All Light Shows</h1>
        <p className={styles.subtitle}>Stage programming, theater design, and corporate live events.</p>
      </header>

      <div className={styles.grid}>
        {sortedShows.map((show) => (
          <article key={show.id} className={styles.card}>
            <ImageWithFallback
              src={show.image}
              alt={show.title}
              className={styles.cardImage}
            />
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>{show.title}</h3>
              <div className={styles.cardMeta}>
                {new Date(show.date).toLocaleDateString('de-DE', { month: 'short', year: 'numeric' })}
              </div>
              <p className={styles.cardDescription}>{show.description}</p>

              {show.equipment && show.equipment.length > 0 && (
                <div className={styles.tags}>
                  {show.equipment.map((tag) => (
                    <span key={tag} className={styles.tag}>
                      <i className="fas fa-lightbulb"></i> {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}

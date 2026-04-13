import { Link } from 'react-router-dom';
import { lightShows } from '../../data/lightshows';
import { ImageWithFallback } from '../common/ImageWithFallback';
import styles from './LightShows.module.css';

export function LightShows() {
  const topShows = [...lightShows]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 5);

  return (
    <section id="lightshows" className={styles.section}>
      <div className={styles.header}>
        <div>
          <h2 className={styles.sectionTitle}>Light Shows</h2>
          <p className={styles.subtitle}>Stage & corporate lighting</p>
        </div>
        <Link to="/lightshows" className={styles.viewAll}>
          View All <i className="fas fa-arrow-right"></i>
        </Link>
      </div>
      <div className={styles.grid}>
        {topShows.map((show) => (
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
    </section>
  );
}

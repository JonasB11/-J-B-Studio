import { useState } from 'react';
import { Link } from 'react-router-dom';
import type { WatchedType } from '../data/watched';
import { watchedData } from '../data/watched';
import { ImageWithFallback } from '../components/common/ImageWithFallback';
import styles from './WatchedPage.module.css';
import { useScrollToHash, useDocumentTitle } from '../hooks';

export function WatchedPage() {
  useDocumentTitle('\\J|B/Studio - Screening Room');
  useScrollToHash();

  const [filter, setFilter] = useState<WatchedType | 'All'>('All');

  const filteredData = watchedData
    .filter(item => filter === 'All' || item.type === filter)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <main className={styles.container}>
      <header className={styles.header}>
        <Link to="/" className={styles.backButton}>
          <i className="fas fa-arrow-left"></i> Back to Studio
        </Link>
        <h1 className={styles.title}>Screening Room</h1>
        <p className={styles.subtitle}>Movies and Series recently watched</p>
      </header>

      <div className={styles.filters}>
        <button
          className={`${styles.filterBtn} ${filter === 'All' ? styles.active : ''}`}
          onClick={() => setFilter('All')}
        >
          All
        </button>
        <button
          className={`${styles.filterBtn} ${filter === 'Movie' ? styles.active : ''}`}
          onClick={() => setFilter('Movie')}
        >
          Movies
        </button>
        <button
          className={`${styles.filterBtn} ${filter === 'Series' ? styles.active : ''}`}
          onClick={() => setFilter('Series')}
        >
          Series
        </button>
      </div>

      <div className={styles.grid}>
        {filteredData.map((entry) => (
          <article key={entry.id} className={styles.card}>
            <ImageWithFallback src={entry.image} alt={entry.title} className={styles.poster} />
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>{entry.title}</h3>
              <div className={styles.cardMeta}>
                <span className={styles.type}>{entry.type}</span>
                <span className={styles.date}>
                  {new Date(entry.date).toLocaleDateString('de-DE', { month: 'short', year: 'numeric' })}
                </span>
              </div>
              <p className={styles.rating}>
                {'★'.repeat(entry.rating)}{'☆'.repeat(5 - entry.rating)}
              </p>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}

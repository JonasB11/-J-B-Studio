import { useMemo, useState } from 'react';
import { getSortedConcerts } from '../../data/concerts';
import { ImageWithFallback } from '../common/ImageWithFallback';
import { Link } from 'react-router-dom';
import styles from './Timeline.module.css';

export function Timeline() {
  const sortedConcerts = useMemo(() => getSortedConcerts(), []);
  const [filterYear, setFilterYear] = useState<string | 'All'>('All');

  const availableYears = useMemo(() => Array.from(new Set(
    sortedConcerts.map(concert => new Date(concert.date).getFullYear().toString())
  )), [sortedConcerts]);

  const filteredConcerts = useMemo(() => sortedConcerts.filter(concert =>
    filterYear === 'All' || new Date(concert.date).getFullYear().toString() === filterYear
  ), [sortedConcerts, filterYear]);

  return (
    <>
      <div className={styles.filters}>
        <button
          className={`${styles.filterBtn} ${filterYear === 'All' ? styles.active : ''}`}
          onClick={() => setFilterYear('All')}
        >
          All Years
        </button>
        {availableYears.map(year => (
          <button
            key={year}
            className={`${styles.filterBtn} ${filterYear === year ? styles.active : ''}`}
            onClick={() => setFilterYear(year)}
          >
            {year}
          </button>
        ))}
      </div>
      <div className={styles.grid}>
        {filteredConcerts.map((concert) => (
          <Link to={`/concerts/${concert.id}`} key={concert.id} className={styles.card}>
            <ImageWithFallback src={concert.artist.image} alt={concert.artist.name} className={styles.cardImage} />
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>{concert.artist.name}</h3>
              <div className={styles.cardMeta}>
                <span className={styles.city}>{concert.artist.details.city}</span>
                <span className={styles.date}>
                  {new Date(concert.date).toLocaleDateString('de-DE', { month: 'short', day: 'numeric', year: 'numeric' })}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}

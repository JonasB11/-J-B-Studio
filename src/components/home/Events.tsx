import { Link } from 'react-router-dom';
import { events } from '../../data/events';
import { ImageWithFallback } from '../common/ImageWithFallback';
import { ConditionalRender } from '../common/SafeText';
import styles from './Events.module.css';

export function Events() {
  return (
    <section id="events" className={styles.section}>
      <h2 className={styles.sectionTitle}>Events</h2>
      <div className={styles.grid}>
        {events.map((event, index) => (
          <div key={index} className={styles.card}>
            <ConditionalRender condition={event.image}>
              <ImageWithFallback
                src={event.image}
                alt={event.title}
                className={styles.cardImage}
              />
            </ConditionalRender>
            <div className={styles.cardTitle}>{event.title}</div>
            <div className={styles.cardYear}>{event.year}</div>
            <ConditionalRender condition={event.description}>
              <div className={styles.cardDescription}>{event.description}</div>
            </ConditionalRender>
          </div>
        ))}
      </div>
      <div className={styles.actions}>
        <Link to="/concerts" className={styles.concertLink}>
          <i className="fas fa-music"></i>
          View My Concert Journey
        </Link>
      </div>
    </section>
  );
}

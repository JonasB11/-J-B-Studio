import { Link } from 'react-router-dom';
import type { Concert } from '../../types';
import { ImageWithFallback } from '../common/ImageWithFallback';
import { ConditionalRender } from '../common/SafeText';
import { useIntersectionObserver } from '../../hooks';
import styles from './TimelineItem.module.css';

interface TimelineItemProps {
  concert: Concert;
}

function formatDate(dateString: string): string {
  try {
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };
    return new Date(dateString).toLocaleDateString('en-US', options);
  } catch {
    return dateString;
  }
}

export function TimelineItem({ concert }: TimelineItemProps) {
  const [ref, isVisible] = useIntersectionObserver<HTMLDivElement>({
    threshold: 0.1,
    triggerOnce: true,
  });

  const formattedDate = formatDate(concert.date);
  const songCount = concert.artist?.details?.setlist?.length ?? 0;
  const supportActNames =
    concert.artist?.details?.supportActs?.map((act) => act.name).join(', ') ||
    '';

  return (
    <div
      ref={ref}
      className={`${styles.timelineItem} ${isVisible ? styles.visible : ''}`}
      data-artist={concert.artist?.id}
    >
      <div className={styles.timelineContent}>
        <div
          className={styles.artistCard}
          style={
            concert.artist?.image
              ? ({
                  '--bg-image': `url(${concert.artist.image})`,
                } as React.CSSProperties)
              : undefined
          }
        >
          <div className={styles.artistHeader}>
            <ImageWithFallback
              src={concert.artist?.image}
              alt={concert.artist?.name || 'Artist'}
              className={styles.artistLogo}
            />
            <div className={styles.artistInfo}>
              <h3 className={styles.artistName}>
                {concert.artist?.name || 'Unknown Artist'}
              </h3>
              <ConditionalRender condition={concert.artist?.genre}>
                <p className={styles.artistGenre}>{concert.artist.genre}</p>
              </ConditionalRender>
            </div>
          </div>
          <div className={styles.artistDetails}>
            <ConditionalRender condition={concert.artist?.details?.venue}>
              <div className={styles.detailItem}>
                <i className="fas fa-map-marker-alt"></i>
                <span>{concert.artist.details.venue}</span>
              </div>
            </ConditionalRender>
            <ConditionalRender condition={concert.artist?.details?.city}>
              <div className={styles.detailItem}>
                <i className="fas fa-city"></i>
                <span>{concert.artist.details.city}</span>
              </div>
            </ConditionalRender>
            {songCount > 0 && (
              <div className={styles.detailItem}>
                <i className="fas fa-music"></i>
                <span>{songCount} Songs</span>
              </div>
            )}
            <ConditionalRender condition={concert.event}>
              <div className={styles.detailItem}>
                <i className="fas fa-calendar-alt"></i>
                <span>{concert.event.join(', ')}</span>
              </div>
            </ConditionalRender>
          </div>
          <ConditionalRender condition={concert.description}>
            <p className={styles.artistDescription}>{concert.description}</p>
          </ConditionalRender>
          <div className={styles.artistTags}>
            {concert.tags?.map((tag, index) => (
              <span key={index} className={styles.artistTag}>
                {tag}
              </span>
            ))}
            <ConditionalRender condition={supportActNames}>
              <span className={styles.artistTag}>Support: {supportActNames}</span>
            </ConditionalRender>
          </div>
          <Link to={`/concerts/${concert.id}`} className={styles.artistLink}>
            <i className="fas fa-arrow-right"></i>
            View Details
          </Link>
        </div>
      </div>
      <div className={styles.timelineDate}>{formattedDate}</div>
    </div>
  );
}

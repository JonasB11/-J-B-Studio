import { useMemo } from 'react';
import { getSortedConcerts } from '../../data/concerts';
import { TimelineItem } from './TimelineItem';
import styles from './Timeline.module.css';

export function Timeline() {
  const sortedConcerts = useMemo(() => getSortedConcerts(), []);

  return (
    <div className={styles.timeline}>
      {sortedConcerts.map((concert) => (
        <TimelineItem key={concert.id} concert={concert} />
      ))}
    </div>
  );
}

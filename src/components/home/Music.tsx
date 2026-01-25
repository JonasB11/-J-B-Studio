import { musicPlatforms } from '../../data/music';
import styles from './Music.module.css';

export function Music() {
  return (
    <section id="music" className={styles.section}>
      <h2 className={styles.sectionTitle}>Music</h2>
      <div className={styles.content}>
        <h3 className={styles.comingSoon}>Coming Soon...</h3>
        <div className={styles.links}>
          {musicPlatforms.map((platform) => (
            <a
              key={platform.name}
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.platformLink}
            >
              <i className={platform.icon}></i>
              <span>{platform.name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

import { socialLinks } from '../../data/social';
import styles from './Connect.module.css';

export function Connect() {
  return (
    <section id="connect" className={styles.section}>
      <h2 className={styles.sectionTitle}>Contact</h2>
      <div className={styles.socialLinks}>
        {socialLinks.map((link) => (
          <a
            key={link.platform}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
          >
            <i className={link.icon}></i>
            <span>{link.platform}</span>
          </a>
        ))}
      </div>
    </section>
  );
}

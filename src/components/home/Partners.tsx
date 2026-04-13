import { partners } from '../../data/partners';
import { ImageWithFallback } from '../common/ImageWithFallback';
import styles from './Partners.module.css';

export function Partners() {
  return (
    <section id="partners" className={styles.section}>
      <h2 className={styles.sectionTitle}>Partners & Collaborations</h2>
      <div className={styles.grid}>
        {partners.slice(0, 3).map((partner) => (
          <article key={partner.name} className={styles.card}>
            <ImageWithFallback
              src={partner.logo}
              alt={partner.name}
              className={styles.logo}
            />
            <div>
              <h3 className={styles.name}>{partner.name}</h3>
              <a
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                {partner.platform}
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

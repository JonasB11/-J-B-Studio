import { partners } from '../../data/partners';
import { ImageWithFallback } from '../common/ImageWithFallback';
import styles from './Partners.module.css';

export function Partners() {
  return (
    <section id="partners" className={styles.section}>
      <h2 className={styles.sectionTitle}>Partners</h2>
      <div className={styles.grid}>
        {partners.map((partner) => (
          <div key={partner.name} className={styles.card}>
            <ImageWithFallback
              src={partner.logo}
              alt={partner.name}
              className={styles.logo}
            />
            <h3 className={styles.name}>{partner.name}</h3>
            <p className={styles.link}>
              <a
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {partner.platform}
              </a>
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

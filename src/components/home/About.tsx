import styles from './About.module.css';

const countries = ['Japan', 'Iceland', 'Italy', 'UAE', 'New Zealand'];

export function About() {
  return (
    <section id="about" className={styles.section}>
      <h2 className={styles.sectionTitle}>Explorations</h2>
      <p className={styles.subtitle}>The "something else"</p>
      <div className={styles.map}>
        <span className={styles.pinA}></span>
        <span className={styles.pinB}></span>
        <span className={styles.pinC}></span>
        <span className={styles.pinD}></span>
        <span className={styles.pinE}></span>
      </div>
      <ul className={styles.countryList}>
        {countries.map((country) => (
          <li key={country}>{country}</li>
        ))}
      </ul>
    </section>
  );
}

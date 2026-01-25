import styles from './Hero.module.css';

export function Hero() {
  const handleScrollToProjects = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className={styles.hero}>
      <div className={styles.heroContent}>
        <h1 className={styles.title}>\J|B/Studio</h1>
        <p className={styles.subtitle}>Digital Creativity, Music, Events & Projects</p>
        <a
          href="#projects"
          className={styles.ctaButton}
          onClick={handleScrollToProjects}
        >
          View My Work
        </a>
      </div>
    </section>
  );
}

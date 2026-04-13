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
        <div>
          <h1 className={styles.title}>Welcome to Jonas&apos; Digital World</h1>
          <p className={styles.subtitle}>
            Explore my concert history, creative projects, collaborations and ideas.
          </p>
          <a
            href="#projects"
            className={styles.ctaButton}
            onClick={handleScrollToProjects}
          >
            Explore Sections
          </a>
        </div>
        <img src="/images/Logo.png" alt="Jonas" className={styles.heroImage} />
      </div>
    </section>
  );
}

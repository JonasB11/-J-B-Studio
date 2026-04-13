import { useDocumentTitle, useScrollToHash } from '../hooks';
import { Hero } from '../components/home/Hero';
import { About } from '../components/home/About';
import { Projects } from '../components/home/Projects';
import { Events } from '../components/home/Events';
import { Music } from '../components/home/Music';
import { Partners } from '../components/home/Partners';
import { Connect } from '../components/home/Connect';
import styles from './Home.module.css';

export function Home() {
  useDocumentTitle();
  useScrollToHash();

  return (
    <main className={styles.main}>
      <div className={styles.dashboard}>
        <div className={styles.column}>
          <Hero />
          <Events />
          <Music />
        </div>
        <div className={styles.column}>
          <Projects />
          <About />
        </div>
        <div className={styles.column}>
          <Partners />
          <Connect />
        </div>
      </div>
    </main>
  );
}

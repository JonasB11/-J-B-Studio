import { useDocumentTitle, useScrollToHash } from '../hooks';
import { Hero } from '../components/home/Hero';
import { Projects } from '../components/home/Projects';
import { Events } from '../components/home/Events';
import { Music } from '../components/home/Music';
import { Partners } from '../components/home/Partners';
import { Connect } from '../components/home/Connect';
import { LightShows } from '../components/home/LightShows';
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
        </div>
        <div className={styles.column}>
          <Music />
          <LightShows />
        </div>
        <div className={styles.column}>
          <Projects />
          <Partners />
          <Connect />
        </div>
      </div>
    </main>
  );
}

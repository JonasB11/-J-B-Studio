import { useDocumentTitle, useScrollToHash } from '../hooks';
import { Hero } from '../components/home/Hero';
import { About } from '../components/home/About';
import { Projects } from '../components/home/Projects';
import { Events } from '../components/home/Events';
import { Music } from '../components/home/Music';
import { Partners } from '../components/home/Partners';
import { Connect } from '../components/home/Connect';

export function Home() {
  useDocumentTitle();
  useScrollToHash();

  return (
    <main>
      <Hero />
      <About />
      <Projects />
      <Events />
      <Music />
      <Partners />
      <Connect />
    </main>
  );
}

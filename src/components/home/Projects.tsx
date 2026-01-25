import { projects } from '../../data/projects';
import { ImageWithFallback } from '../common/ImageWithFallback';
import { ConditionalRender } from '../common/SafeText';
import styles from './Projects.module.css';

export function Projects() {
  return (
    <section id="projects" className={styles.section}>
      <h2 className={styles.sectionTitle}>Projects</h2>
      <div className={styles.grid}>
        {projects.map((project, index) => (
          <div key={index} className={styles.card}>
            <ImageWithFallback
              src={project.image}
              alt={project.title}
              className={styles.cardImage}
            />
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>{project.title}</h3>
              <ConditionalRender condition={project.description}>
                <p className={styles.cardDescription}>{project.description}</p>
              </ConditionalRender>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.cardLink}
              >
                Visit
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

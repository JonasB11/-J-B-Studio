import { ImageWithFallback } from '../common/ImageWithFallback';
import styles from './About.module.css';

const skills = [
  'Web Development',
  'Music Production',
  'Event Technology',
  'Light Engineering',
];

export function About() {
  return (
    <section id="about" className={styles.section}>
      <h2 className={styles.sectionTitle}>About</h2>
      <div className={styles.aboutCard}>
        <ImageWithFallback
          src="/images/Logo.png"
          alt="Profile picture"
          className={styles.profileImage}
        />
        <h3 className={styles.name}>Jonas</h3>
        <p className={styles.bio}>
          Hi, I'm Jonas. I make music, write code, and work with lighting and
          event technology. I love building experiences—both on stage and behind
          the scenes. When I'm not creating, you'll probably find me at a
          concert, somewhere in the crowd.
        </p>
        <div className={styles.skills}>
          {skills.map((skill) => (
            <span key={skill} className={styles.skill}>
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

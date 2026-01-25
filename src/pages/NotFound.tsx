import { Link } from 'react-router-dom';
import { useDocumentTitle } from '../hooks';
import styles from './NotFound.module.css';

export function NotFound() {
  useDocumentTitle('Page Not Found');

  return (
    <main className={styles.container}>
      <h1 className={styles.title}>404</h1>
      <p className={styles.message}>Page not found</p>
      <p className={styles.description}>
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link to="/" className={styles.homeLink}>
        <i className="fas fa-home"></i>
        Back to Home
      </Link>
    </main>
  );
}

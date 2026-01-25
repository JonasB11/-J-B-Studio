import { useState, type FormEvent } from 'react';
import { socialLinks } from '../../data/social';
import styles from './Connect.module.css';

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormStatus {
  type: 'idle' | 'submitting' | 'success' | 'error';
  message?: string;
}

export function Connect() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<FormStatus>({ type: 'idle' });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus({ type: 'submitting' });

    // Simulate form submission (replace with actual API call)
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log('Form submitted:', formData);
      setStatus({
        type: 'success',
        message: 'Thank you for your message! I will get back to you soon.',
      });
      setFormData({ name: '', email: '', message: '' });
    } catch {
      setStatus({
        type: 'error',
        message: 'Something went wrong. Please try again.',
      });
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear status when user starts typing
    if (status.type !== 'idle') {
      setStatus({ type: 'idle' });
    }
  };

  return (
    <section id="connect" className={styles.section}>
      <h2 className={styles.sectionTitle}>Connect</h2>
      <div className={styles.content}>
        <div className={styles.grid}>
          <div className={styles.formContainer}>
            <h3 className={styles.subtitle}>Get in Touch</h3>
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.formGroup}>
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={status.type === 'submitting'}
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={status.type === 'submitting'}
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  disabled={status.type === 'submitting'}
                />
              </div>
              <button
                type="submit"
                className={styles.submitBtn}
                disabled={status.type === 'submitting'}
              >
                {status.type === 'submitting' ? 'Sending...' : 'Send Message'}
              </button>
              {status.type === 'success' && (
                <p className={styles.successMessage}>{status.message}</p>
              )}
              {status.type === 'error' && (
                <p className={styles.errorMessage}>{status.message}</p>
              )}
            </form>
          </div>
          <div className={styles.socialContainer}>
            <h3 className={styles.subtitle}>Follow Me</h3>
            <div className={styles.socialLinks}>
              {socialLinks.map((link) => (
                <a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                >
                  <i className={link.icon}></i>
                  <span>{link.platform}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

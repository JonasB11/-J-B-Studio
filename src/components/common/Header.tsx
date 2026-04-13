import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import styles from './Header.module.css';

interface NavItem {
  label: string;
  to: string;
  isHash?: boolean;
}

const mainNavItems: NavItem[] = [
  { label: 'Home', to: '/#home', isHash: true },
  { label: 'Music', to: '/#events', isHash: true },
  { label: 'Screening Room', to: '/#music', isHash: true },
  { label: 'Projects', to: '/#projects', isHash: true },
  { label: 'Explorations', to: '/#about', isHash: true },
  { label: 'Collaborations', to: '/#partners', isHash: true },
  { label: 'Contact', to: '/#connect', isHash: true },
];

const concertNavItems: NavItem[] = [
  { label: 'Home', to: '/' },
  ...mainNavItems.slice(1),
  { label: 'Concerts', to: '/concerts' },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const isConcertsPage = location.pathname.startsWith('/concerts');
  const navItems = isConcertsPage ? concertNavItems : mainNavItems;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, item: NavItem) => {
    if (item.isHash && location.pathname === '/') {
      e.preventDefault();
      const hash = item.to.split('#')[1];
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        window.history.pushState(null, '', item.to);
      }
    }
  };

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <nav className={styles.nav}>
        <NavLink to="/" className={styles.navLogo}>
          <span className={styles.logoTitle}>JONAS B STUDIO</span>
        </NavLink>
        <ul className={styles.navList}>
          {navItems.map((item) => (
            <li key={item.label}>
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  `${styles.navLink} ${isActive && !item.isHash ? styles.active : ''}`
                }
                onClick={(e) => handleNavClick(e, item)}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
        <img src="/images/Logo.png" alt="Profile" className={styles.avatar} />
      </nav>
    </header>
  );
}

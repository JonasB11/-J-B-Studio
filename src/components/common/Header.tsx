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
  { label: 'About', to: '/#about', isHash: true },
  { label: 'Projects', to: '/#projects', isHash: true },
  { label: 'Events', to: '/#events', isHash: true },
  { label: 'Partners', to: '/#partners', isHash: true },
  { label: 'Connect', to: '/#connect', isHash: true },
];

const concertNavItems: NavItem[] = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/#about', isHash: true },
  { label: 'Projects', to: '/#projects', isHash: true },
  { label: 'Events', to: '/#events', isHash: true },
  { label: 'Concerts', to: '/concerts' },
  { label: 'Partners', to: '/#partners', isHash: true },
  { label: 'Connect', to: '/#connect', isHash: true },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const isConcertsPage = location.pathname.startsWith('/concerts');
  const navItems = isConcertsPage ? concertNavItems : mainNavItems;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
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
          <img
            src="/images/logo-clean.png"
            alt="Logo"
            className={styles.navLogoImg}
          />
          <span className={styles.logoTitle}>\J|B/Studio</span>
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
      </nav>
    </header>
  );
}

import NavLink from 'next/link';
import styles from './Navbar.module.css';

export const NavBar = () => {
  return (
    <header>
      <nav>
        <NavLink href="/" aria-label="Go to home" className={styles.header}>
          Home
        </NavLink>
      </nav>
    </header>
  );
};

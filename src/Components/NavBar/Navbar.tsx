import { NavLink } from 'react-router-dom';
import './Navbar.css';

export const NavBar = () => {
  return (
    <header>
      <nav>
        <NavLink to="/" aria-label="Go to home" preventScrollReset>
          Home
        </NavLink>
      </nav>
    </header>
  );
};

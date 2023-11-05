import { NavLink } from 'react-router-dom';
import './Navbar.css';

export const Navbar = () => {
  return (
    <header>
      <nav>
        <NavLink to="/"> Home </NavLink>
        <NavLink to="list-item"> List </NavLink>
        <NavLink to="details"> Details </NavLink>
      </nav>
    </header>
  );
};

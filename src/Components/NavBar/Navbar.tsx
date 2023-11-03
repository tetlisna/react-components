import { NavLink } from 'react-router-dom';

export const Navbar = () => {
  return (
    <header>
      <nav>
        <NavLink to="/react-components/"> Home </NavLink>
        <NavLink to="list-item"> List </NavLink>
        <NavLink to="details"> Details </NavLink>
      </nav>
    </header>
  );
};

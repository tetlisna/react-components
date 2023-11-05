import { Navbar } from '../NavBar/Navbar';
import './Layout.css';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="layout">
      <Navbar />
      <main className="items-container">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;

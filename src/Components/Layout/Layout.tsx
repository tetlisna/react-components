import { Navbar } from '../NavBar/Navbar';
// import { Sidebar } from '../Sidebar/Sidebar';
import './Layout.css';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="layout">
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;

import { NavBar } from 'components/NavBar/Navbar';
import './Layout.css';
import { Outlet } from 'react-router-dom';
import ErrorBoundary from 'components/ErrorBoundary/ErrorBoundary';

const Layout = () => {
  return (
    <ErrorBoundary>
      <div className="container">
        <NavBar />
        <Outlet />
      </div>
    </ErrorBoundary>
  );
};

export default Layout;

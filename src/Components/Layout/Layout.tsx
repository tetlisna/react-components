import { Outlet } from 'react-router';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import './Layout.css';
import { NavBar } from '../NavBar/NavBar';

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

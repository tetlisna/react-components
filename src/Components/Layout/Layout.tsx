import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import './Layout.css';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <ErrorBoundary>
      <div className="container">
        <Outlet />
      </div>
    </ErrorBoundary>
  );
};

export default Layout;

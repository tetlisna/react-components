import { Outlet } from 'react-router';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import { NavBar } from '../NavBar/NavBar';

const Layout = () => {
  return (
    <ErrorBoundary>
      <NavBar />
      <Outlet />
    </ErrorBoundary>
  );
};

export default Layout;

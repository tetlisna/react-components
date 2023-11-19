import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import Layout from './components/Layout/Layout';
import Details from './pages/Details';
import Root from './components/Root';
import './index.css';
import NotFoundPage from './components/ErrorBoundary/NotFoundPage';

export const routes = createRoutesFromElements(
  <Route path="/" element={<Layout />} errorElement={<ErrorBoundary />}>
    <Route path="/" element={<Root />} />
    <Route path="page/" element={<Root />}>
      <Route path="details/:id" element={<Details />} />
    </Route>
    <Route path="page/:page" element={<Root />}>
      <Route path="details/:id" element={<Details />} />
    </Route>
    <Route path="*" element={<NotFoundPage />} />
  </Route>
);
const App = () => {
  const router = createBrowserRouter(routes, { basename: '/react-components' });

  return <RouterProvider router={router} />;
};

export default App;

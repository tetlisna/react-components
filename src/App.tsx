import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import Layout from './components/Layout/Layout';
import Details from './pages/Details/Details';
import Root from './components/Root';
import './index.css';
import NotFoundPage from './components/ErrorBoundary/NotFoundPage';
import { Routes } from './models/interfaces/constants';

export const routes = createRoutesFromElements(
  <Route
    path={Routes.index}
    element={<Layout />}
    errorElement={<ErrorBoundary />}
  >
    <Route path={Routes.index} element={<Root />} />
    <Route path={Routes.page} element={<Root />}>
      <Route path={Routes.details} element={<Details />} />
    </Route>
    <Route path={Routes.pagePage} element={<Root />}>
      <Route path={Routes.details} element={<Details />} />
    </Route>
    <Route path={Routes.all} element={<NotFoundPage />} />
  </Route>
);
const App = () => {
  const router = createBrowserRouter(routes, { basename: Routes.basename });

  return <RouterProvider router={router} />;
};

export default App;

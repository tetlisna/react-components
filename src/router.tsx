import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import Main from './components/Main';
import NotFound from './components/NotFound';
import Form from './components/FormReactHookForm';
import FormUncontrolled from './components/FormUncontrolled';
import ErrorBoundary from './components/NotFound/ErrorBoundary';

const routes = createRoutesFromElements(
  <Route>
    <Route index element={<Main />} errorElement={<ErrorBoundary />} />
    <Route path="/react-hook-form" element={<Form />} />
    <Route path="/uncontrolled-form" element={<FormUncontrolled />} />
    <Route path="*" element={<NotFound />} />
  </Route>
);
export const router = createBrowserRouter(routes, {
  basename: '/react-components/',
});

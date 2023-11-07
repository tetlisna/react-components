// import './App.css';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import Root from './components/Root';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import Details from './pages/Details';
import Layout from './components/Layout/Layout';

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />} errorElement={<ErrorBoundary />}>
        <Route path="/" element={<Root />} />
        <Route path="list-item/" element={<Root />}>
          <Route path="details/:id" element={<Details />} />
        </Route>
        <Route path="list-item/:page" element={<Root />}>
          <Route path="details/" element={<Details />} />
        </Route>
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;

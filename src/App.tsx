import './App.css';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import { Home } from './pages/Home';
import ListItem from './components/ItemsSection/ListItems';
import Layout from './components/Layout/Layout';

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/react-components" element={<Layout />}>
        <Route
          path="/react-components/list-item"
          element={<ListItem searchQuery={''} />}
        />
        <Route path="list-item" element={<ListItem searchQuery={''} />} />
        <Route path="list-item" element={<Home />} />
      </Route>
    )
  );
  console.log(router);

  return <RouterProvider router={router} />;
};

export default App;

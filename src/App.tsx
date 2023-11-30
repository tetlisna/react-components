import { RouterProvider } from 'react-router-dom';
import './App.scss';
import { router } from './router.tsx';

function App() {
  return <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />;
}

export default App;

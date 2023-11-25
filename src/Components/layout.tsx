import { store } from '@/_store/store';
import { Provider } from 'react-redux';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';
import { NavBar } from './NavBar/NavBar';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Provider store={store}>
      <ErrorBoundary>
        <NavBar />
        {children}
      </ErrorBoundary>
    </Provider>
  );
}

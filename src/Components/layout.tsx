import { store } from '@/_store/store';
import { Provider } from 'react-redux';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Provider store={store}>
      <ErrorBoundary>{children}</ErrorBoundary>
    </Provider>
  );
}

import { render, screen } from '@testing-library/react';
import { createMemoryHistory, MemoryHistory } from 'history';
import { Route, Router, Routes } from 'react-router-dom';
import NotFoundPage from './NotFoundPage';

describe('404 Page Component Tests', () => {
  it('renders the 404 Page component for an invalid route', () => {
    const history: MemoryHistory = createMemoryHistory();
    history.push('/invalid-route');

    render(
      <Router navigator={history} location={''}>
        <Routes>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    );
    expect(screen.getByText('Oops!')).toBeInTheDocument();
    expect(
      screen.getByText("Sorry, this page doesn't exist.")
    ).toBeInTheDocument();
  });
});

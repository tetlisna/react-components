import { render, screen } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import NotFoundPage from './NotFoundPage';

describe('404 Page Component Tests', () => {
  it('renders the 404 Page component for an invalid route', () => {
    render(
      <MemoryRouter initialEntries={['/invalid-route']} initialIndex={0}>
        <Routes>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByText('Oops!')).toBeInTheDocument();
    expect(
      screen.getByText("Sorry, this page doesn't exist.")
    ).toBeInTheDocument();
  });
});

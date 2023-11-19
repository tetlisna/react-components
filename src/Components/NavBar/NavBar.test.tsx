import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { NavBar } from './NavBar';

describe('NavBar Component Tests', () => {
  it('renders the NavBar component', () => {
    render(
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>
    );

    expect(screen.getByText('Home')).toBeInTheDocument();
  });

  it('navigates to home when NavLink is clicked', () => {
    render(
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>
    );

    screen.getByText('Home').click();
  });
});

import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from 'App';

describe('render App component', () => {
  test('render App component', () => {
    render(<App />);
    expect(screen.getByText(/React/i)).toBeDefined();
  });
});

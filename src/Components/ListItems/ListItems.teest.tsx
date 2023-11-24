import { render, screen } from '@testing-library/react';
import ListItems from './ListItems';

describe('List Items', () => {
  test('renders correctly', () => {
    render(<ListItems />);
    const containerItems = screen.getByTestId('items-container');
    expect(containerItems).toBeInTheDocument();
  });
  test('renders a list of users', async () => {
    render(<ListItems />);
    const items = await screen.findAllByRole('items-card');
    expect(items).toHaveLength(10);
  });
});

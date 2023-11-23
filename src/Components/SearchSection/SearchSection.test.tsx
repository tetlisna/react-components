import { expect } from 'vitest';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { store } from '../../store/store';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import SearchSection from './SearchSection';

export const getItemStorage = () => localStorage.getItem('searchQuery');
export const setItemStorage = (value: string) =>
  localStorage.setItem('searchQuery', value);

export const clearItemStorage = () => localStorage.clear();

describe('SearchSection', () => {
  test('search value stored to the local storage', () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <SearchSection />
        </Provider>
      </MemoryRouter>
    );

    const searchBtn = screen.getByText('Search');
    const searchInput = screen.getByRole('searchbox');

    expect(searchBtn).toBeTruthy();
    expect(searchInput).toBeTruthy();

    fireEvent.change(searchInput, { target: { value: 'some test' } });
    fireEvent.click(searchBtn);
    expect(getItemStorage()).toBe('some test');
  });

  test('search value retrieved from the local storage', async () => {
    setItemStorage('some test');
    render(
      <MemoryRouter>
        <Provider store={store}>
          <SearchSection />
        </Provider>
      </MemoryRouter>
    );
    const searchInput = screen.getByRole('searchbox');
    await waitFor(() => {
      expect(searchInput).toHaveValue('some test');
    });
    clearItemStorage();
  });
});

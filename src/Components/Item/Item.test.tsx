import { render, screen, waitFor } from '@testing-library/react';
import { vi } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import { ItemMock, ItemListMock } from '../../test/mocks/itemMock.ts';
import { Provider } from 'react-redux';
import { store } from '@/_store/store.ts';
import { Item } from './[id].tsx';

describe('Tests for the Item component', () => {
  vi.mock('../../services/items-api-slice.ts', async (importOriginal) => {
    const mod =
      await importOriginal<
        typeof import('../../services/items-api-slice.ts')
      >();
    return {
      ...mod,
      useItemsListQuery: () => ({
        data: ItemListMock,
        isFetching: false,
        isError: false,
      }),
    };
  });

  it('The Item List component should render the relevant item data', async () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/']}>
          <Item {...ItemMock} />
        </MemoryRouter>
      </Provider>
    );
    const detailsBtn = await screen.findByTestId('detailsBtn');
    await waitFor(() => {
      expect(detailsBtn).toBeInTheDocument();
      expect(screen.getByTestId('name')).toHaveTextContent(ItemMock.name);
      expect(screen.getByTestId('eye_color')).toHaveTextContent(
        ItemMock.eye_color
      );
      expect(screen.getByTestId('gender')).toHaveTextContent(ItemMock.gender);
      expect(screen.getByTestId('birth_year')).toHaveTextContent(
        ItemMock.birth_year
      );
    });
  });
});

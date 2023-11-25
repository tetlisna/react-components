import { render, screen } from '@testing-library/react';
import Details from '../Details/[id].tsx';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../../store/store.ts';

test('displays loading indicator while fetching data', async () => {
  vi.mock('../../services/items-api-slice.ts', async (importOriginal) => {
    const mod =
      await importOriginal<
        typeof import('../../services/items-api-slice.ts')
      >();
    return {
      ...mod,
      useItemDetailQuery: () => ({
        data: [],
        isFetching: true,
        isError: false,
      }),
    };
  });

  render(
    <Provider store={store}>
      <MemoryRouter initialEntries={[`/details/1`]}>
        <Details />
      </MemoryRouter>
    </Provider>
  );
  const loadingIndicator = await screen.getByTestId('loading');
  expect(loadingIndicator).toBeInTheDocument();
});

import { describe, expect, it, vi } from 'vitest';

import {
  cleanup,
  fireEvent,
  render,
  screen,
  waitFor,
} from '@testing-library/react';
import { store } from '../../store/store';
import Details from './Details';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { ItemMock } from '../../test/mocks/itemMock.ts';

afterEach(() => cleanup());

vi.mock('react-router-dom', async (importOriginal) => {
  const mod = await importOriginal<typeof import('react-router-dom')>();
  return {
    ...mod,
    useParams: () => {
      return {
        details: '1',
      };
    },
  };
});

describe('Details', async () => {
  it('should return loading state while fetching data', async () => {
    vi.mock('../../services/items-api-slice.ts', async (importOriginal) => {
      const mod =
        await importOriginal<
          typeof import('../../services/items-api-slice.ts')
        >();
      return {
        ...mod,
        useItemDetailQuery: () => ({
          data: [],
          isLoading: true,
          isError: false,
        }),
      };
    });

    //     render(
    //       <Provider store={store}>
    //         <MemoryRouter initialEntries={[`/details/1`]}>
    //           <Details />
    //         </MemoryRouter>
    //       </Provider>
    //     );

    //     const loading = await screen.findByTestId('loading');
    //     expect(loading).toBeInTheDocument();
    //     cleanup();
    // });

    it('should display details', async () => {
      vi.mock('../../services/items-api-slice.ts', async (importOriginal) => {
        const mod =
          await importOriginal<
            typeof import('../../services/items-api-slice.ts')
          >();
        return {
          ...mod,
          useItemDetailQuery: () => ({
            data: ItemMock,
            isLoading: false,
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
      const btn = screen.getByTestId('close-btn');
      fireEvent.click(btn);
      await waitFor(
        () => {
          expect(screen.getByTestId('item-card')).not.toBeInTheDocument();
        },
        { timeout: 10000 }
      );
    });
  });
  afterEach(cleanup);
});

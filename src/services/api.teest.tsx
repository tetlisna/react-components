import { renderHook, waitFor, screen } from '@testing-library/react';
import { useItemDetailQuery, useItemsListQuery } from './items-api-slice';
import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { store } from '../store/store';
import { ItemMock, ItemListMock } from '../test/mocks/itemMock';
import { describe } from 'vitest';

function Wrapper(props: { children: ReactNode }) {
  return <Provider store={store}>{props.children}</Provider>;
}

describe('renders hook', async () => {
  it('render hook useItemsListQuery', async () => {
    const { result } = renderHook(() => useItemsListQuery(), {
      wrapper: Wrapper,
    });
    screen.debug();
    expect(result.current).toMatchObject({
      status: 'pending',
      endpointName: 'itemsList',
      isSuccess: false,
      isError: false,
      isFetching: true,
    });

    await waitFor(() => expect(result.current.isSuccess).toBe(true));

    expect(result.current).toMatchObject({
      status: 'fulfilled',
      endpointName: 'itemsList',
      data: ItemListMock,
      isSuccess: true,
      isError: false,
      currentData: ItemListMock,
      isFetching: false,
    });
  });
  it('render hook useItemDetailQuery', async () => {
    const { result } = renderHook(() => useItemDetailQuery(1), {
      wrapper: Wrapper,
    });

    expect(result.current).toMatchObject({
      status: 'pending',
      endpointName: 'itemDetail',
      isSuccess: false,
      isError: false,
      isFetching: true,
    });
    await waitFor(() => expect(result.current.isSuccess).toBe(true));

    expect(result.current).toMatchObject({
      status: 'fulfilled',
      endpointName: 'itemDetail',
      data: ItemMock,
      isSuccess: true,
      isError: false,
      currentData: ItemMock,
      isFetching: false,
    });
    screen.debug();
  });
});

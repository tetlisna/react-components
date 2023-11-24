import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ItemIterface } from '../models/interfaces/interfaces';
import { API_URL_PEOPLE, ITEMS_PER_PAGE } from '../models/interfaces/constants';

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: API_URL_PEOPLE }),
  endpoints: (build) => ({
    itemsList: build.query<ItemIterface[], void>({
      async queryFn(_args, _api, _extraOptions, baseQuery) {
        const {
          data: { count },
        } = (await baseQuery('')) as { data: { count: number } };
        if (count === 0) return { data: [] };

        const totalPages = Math.ceil(count / ITEMS_PER_PAGE.Ten);

        const pages = await Promise.all(
          [...new Array(totalPages).keys()].map(async (page) => {
            const { data } = await baseQuery(`?page=${page + 1}`);
            return (data as { results: ItemIterface[] }).results;
          })
        );

        return { data: pages.flat() };
      },
    }),
    itemDetail: build.query<ItemIterface, number>({
      query: (id) => ({
        url: `/${id}`,
      }),
    }),
  }),
});

export const { useItemsListQuery, useItemDetailQuery } = api;

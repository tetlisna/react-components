import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { fetchAllData } from './api';

function simulateLoading() {
  return new Promise((resolve) => setTimeout(resolve, 500));
}

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: `react-components` }),
  endpoints: (build) => ({
    itemsList: build.query({
      async queryFn() {
        await simulateLoading();
        return { data: await fetchAllData({}) };
      },
    }),
    itemDetail: build.query({
      async queryFn(id) {
        await simulateLoading();
        return { data: await fetchAllData({ id }) };
      },
    }),
  }),
});

export const { useItemsListQuery, useItemDetailQuery } = api;

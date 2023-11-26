// import { configureStore } from '@reduxjs/toolkit';

// import { api } from '../services/items-api-slice';
// import ItemsReducer from '@/_store/reducers/ItemsSlice';
// import { createWrapper } from 'next-redux-wrapper';

// export const store = configureStore({
//   reducer: {
//     items: ItemsReducer,
//     [api.reducerPath]: api.reducer,
//   },
//   middleware: (getDefaultMiddleware) => {
//     return getDefaultMiddleware().concat(api.middleware);
//   },
// });

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;

// export const wrapper = createWrapper(() => store);
import { configureStore } from '@reduxjs/toolkit';

import { api } from '../services/items-api-slice';
import ItemsReducer from '../_store/reducers/ItemsSlice';

export const store = configureStore({
  reducer: {
    items: ItemsReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(api.middleware);
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

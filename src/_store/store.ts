import { configureStore } from '@reduxjs/toolkit';
import { api } from '../services/items-api-slice';
import ItemsReducer from './reducers/ItemsSlice';

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

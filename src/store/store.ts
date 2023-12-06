import { configureStore } from '@reduxjs/toolkit';
import formSliceReducer from './reducers/formSliceReducer';
import countriesReducer from './reducers/countriesReducer';

export const storeForm = configureStore({
  reducer: {
    form: formSliceReducer,
    countries: countriesReducer,
  },
});

export type RootState = ReturnType<typeof storeForm.getState>;
export type AppDispatch = typeof storeForm.dispatch;

import { configureStore } from '@reduxjs/toolkit';
import formSliceReducer from './reducers/formSliceReducer';

export const storeForm = configureStore({
  reducer: {
    form: formSliceReducer,
  },
});

export type RootState = ReturnType<typeof storeForm.getState>;
export type AppDispatch = typeof storeForm.dispatch;

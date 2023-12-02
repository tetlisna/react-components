import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { FormData } from '../../models/types/types';

const initialState = {
  formData: [] as FormData[],
};

export const formSliceReducer = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setFormData: (state, action: PayloadAction<FormData>) => {
      state.formData.push(action.payload);
    },
    resetFormData: () => initialState,
  },
});
export const { setFormData, resetFormData } = formSliceReducer.actions;
export default formSliceReducer.reducer;

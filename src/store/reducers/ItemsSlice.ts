import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface ItemsState {
  data: [];
  dataAll: [];
  isLoading: boolean;
  isError: boolean;
  totalCount: number;
  searchQuery: string;
  itemsPerPage: number;
}
const initialState: ItemsState = {
  searchQuery: localStorage.getItem('searchQuery') || '',
  data: [],
  dataAll: [],
  isLoading: true,
  isError: false,
  totalCount: 0,
  itemsPerPage: 10,
};

export const ItemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    setAllData: (state, action: PayloadAction<[]>) => {
      state.dataAll = action.payload;
      state.isLoading = false;
    },
    setData: (state, action: PayloadAction<[]>) => {
      state.data = action.payload;
      state.isLoading = false;
    },
    setError: (state) => {
      state.isError = true;
      state.isLoading = false;
    },
    setTotalCount: (state, action: PayloadAction<number>) => {
      state.totalCount = action.payload;
    },
    setItemsPerPage: (state, action: PayloadAction<number>) => {
      state.itemsPerPage = action.payload;
    },
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    },
  },
});
export const {
  setAllData,
  setData,
  setError,
  setTotalCount,
  setItemsPerPage,
  setSearchQuery,
} = ItemsSlice.actions;

export default ItemsSlice.reducer;

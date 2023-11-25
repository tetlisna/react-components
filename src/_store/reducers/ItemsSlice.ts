import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ITEMS_PER_PAGE } from '../../models/interfaces/constants';

export interface ItemsState {
  data: [];
  dataAll: [];
  isLoading: boolean;
  isError: boolean;
  totalCount: number;
  totalPages: number;
  searchQuery: string;
  itemsPerPage: number;
  currentPage: number;
  searchedItems: [];
}
const initialState: ItemsState = {
  searchQuery:
    typeof window !== 'undefined'
      ? window.localStorage.getItem('searchQuery') || ''
      : '',
  // searchQuery: localStorage.getItem('searchQuery') || '',
  data: [],
  dataAll: [],
  isLoading: true,
  isError: false,
  totalCount: 0,
  totalPages: 0,
  itemsPerPage: ITEMS_PER_PAGE.Ten,
  currentPage: 1,
  searchedItems: [],
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
    setTotalPages: (state, action: PayloadAction<number>) => {
      state.totalPages = action.payload;
    },
    setItemsPerPage: (state, action: PayloadAction<number>) => {
      state.itemsPerPage = action.payload;
    },
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    },
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
    setSearchedItems: (state, action: PayloadAction<[]>) => {
      state.searchedItems = action.payload;
    },
  },
});
export const {
  setAllData,
  setData,
  setError,
  setTotalCount,
  setTotalPages,
  setItemsPerPage,
  setSearchQuery,
  setCurrentPage,
} = ItemsSlice.actions;

export default ItemsSlice.reducer;

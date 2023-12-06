import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { countries } from '../../models/constants';

type StateType = {
  countries: string[];
};

const countriesArray = Object.values(countries);

const initialState: StateType = {
  countries: countriesArray,
};

const countriesSlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {},
});

export default countriesSlice.reducer;

export const selectCountries = (state: RootState) => state.countries;

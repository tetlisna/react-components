// import { render, fireEvent } from '@testing-library/react';
// import SearchBar from './SearchSection/SearchSection';
// import { LOCAL_STORAGE_SEARCH_TERM } from '../constants';

// describe('SearchBar component', () => {
//   test('should save entered value to local storage on button click', () => {
//     const { getByRole, getByPlaceholderText } = render(<SearchBar />);

//     const inputValue = 'Test search term';
//     const searchInput = getByPlaceholderText('Search');
//     const button = getByRole('button', { name: /search/i });

//     Storage.prototype.setItem = jest.fn(() => inputValue);

//     fireEvent.change(searchInput, {
//       target: { value: inputValue },
//     });
//     fireEvent.click(button);

//     expect(localStorage.setItem).toHaveBeenCalledTimes(1);
//     expect(localStorage.setItem).toHaveBeenCalledWith(
//       LOCAL_STORAGE_SEARCH_TERM,
//       inputValue
//     );
//   });

//   test('Check that the component retrieves the value from the local storage upon mounting', () => {
//     const inputValue = 'Test search term';

//     Storage.prototype.setItem = jest.fn(() => inputValue);
//     Storage.prototype.getItem = jest.fn(() => inputValue);

//     const { getByPlaceholderText } = render(<SearchBar />);
//     const searchInput = getByPlaceholderText('Search') as HTMLInputElement;

//     expect(localStorage.getItem).toHaveBeenCalledTimes(1);
//     expect(localStorage.getItem(LOCAL_STORAGE_SEARCH_TERM)).toBe(inputValue);
//     expect(searchInput.value).toBe(inputValue);
//   });
// });

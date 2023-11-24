// import { render, fireEvent, screen } from '@testing-library/react';
// import { MemoryRouter } from 'react-router-dom';
// import { Provider } from 'react-redux';
// import { store } from '../../store/store';
// import Pagination from './Pagination';
// import { setItemsPerPage } from '../../store/reducers/ItemsSlice';
// import { API_URL_PEOPLE } from '../../models/interfaces/constants';

// vi.mock('../../services/items-api-slice', () => ({
//   useItemsListQuery: vi.fn(),
// }));

// describe('Pagination Component Tests', () => {
//   it('updates URL query parameter when page changes', () => {
//     const mockData = [
//       {
//         name: 'Luke Skywalker',
//         eye_color: 'blue',
//         birth_year: '19BBY',
//         gender: 'male',
//         url: `${API_URL_PEOPLE}/1`,
//       },
//       {
//         name: 'C-3PO',
//         eye_color: 'yellow',
//         birth_year: '112BBY',
//         gender: 'n/a',
//         url: `${API_URL_PEOPLE}/2`,
//       },
//     ];

//     vi.mock('../../services/items-api-slice', () => ({
//       useItemsListQuery: vi.fn().mockReturnValue({ data: mockData }),
//     }));
//     render(
//       <Provider store={store}>
//         <MemoryRouter initialEntries={['/page/1']}>
//           <Pagination />
//         </MemoryRouter>
//       </Provider>
//     );

//     const dispatchMock = vi.spyOn(store, 'dispatch');

//     const selectElement = screen.getByRole('combobox');
//     fireEvent.change(selectElement, { target: { value: '2' } });

//     expect(window.location.pathname).toBe('/page/2');
//     expect(dispatchMock).toHaveBeenCalledWith(setItemsPerPage(10));
//   });
// });

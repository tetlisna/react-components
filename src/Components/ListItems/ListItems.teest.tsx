// import { render, screen } from '@testing-library/react';
// import ListItems from './ListItems';
// import { server } from 'src/test/mocks/mock';
// import { http } from 'msw';

// describe('List Items', () => {
//   test('renders correctly', () => {
//     render(<ListItems />);
//     const containerItems = screen.getByTestId('items-container');
//     expect(containerItems).toBeInTheDocument();
//   });
//   test('renders a list of users', async () => {
//     render(<ListItems />);
//     const items = await screen.findAllByRole('items-card');
//     expect(items).toHaveLength(10);
//   });

//   test('renders error', async () => {
//     server.use(
//       http.get(`/react-component`, () => {
//         return res(ctx.status(500));
//       })
//     );
//     render(<ListItems />);
//     const error = await screen.findByText('fetch error');
//     expect(error).toBeInTheDocument();
//   });
// });

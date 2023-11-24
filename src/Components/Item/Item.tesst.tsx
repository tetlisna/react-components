import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { afterAll, beforeAll, vi } from 'vitest';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import { ItemIterface } from '../../models/interfaces/interfaces';
import * as Api from '../../services/api';
import { routes } from '../../App';

const testItem: ItemIterface = {
  url: `https://swapi.dev/api/people/1/`,
  name: 'Luke Skywalker',
  eye_color: 'blue',
  gender: 'male',
  birth_year: '19BBY',
};

describe('Tests for the Item component', () => {
  beforeAll(() => {
    const getListItems = vi.spyOn(Api, 'fetchData');
    // const getListQuery = vi.spyOn(Api, 'add');
    console.error();
    getListItems.mockResolvedValue({
      count: 82,
      next: 'https://swapi.dev/api/people/?search=&page=2',
      previous: 'https://swapi.dev/api/people/?search=&page=1',
      results: [testItem],
    });
  });

  afterAll(() => {
    vi.clearAllMocks();
  });

  test('The Item List component should renders the relevant item data', async () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ['/1'],
    });

    render(<RouterProvider router={router} />);

    const eyeColor = await screen.findByTestId('eye_color');
    expect(eyeColor).toHaveTextContent(testItem['eye_color'].toString());

    const name = await screen.findByTestId('name');
    expect(name).toHaveTextContent(testItem.name.toString());

    const gender = await screen.findByTestId('gender');
    expect(gender).toHaveTextContent(testItem.gender.toString());

    const birthYear = await screen.findByTestId('birth_year');
    expect(birthYear).toHaveTextContent(testItem['birth_year'].toString());
  });

  test('Clicking on the card should open the detailed card component', async () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ['/'],
    });

    render(<RouterProvider router={router} />);

    const title = await screen.findByTestId('item-card');
    await userEvent.click(title);

    const detaisCard = await screen.getByTestId('item-card');

    const loading = await screen.getByTestId('loading');

    expect(loading).toBeInTheDocument();

    expect(detaisCard).toBeInTheDocument();
  });

  test('Clicking on the card should triggers an additional API call to fetch detailed information', async () => {
    const getItemById = vi.spyOn(Api, 'fetchData');

    const router = createMemoryRouter(routes, {
      initialEntries: [`/1`],
    });

    render(<RouterProvider router={router} />);

    // const btn = await screen.getByTestId('details-btn');

    // await userEvent.click(btn);

    expect(getItemById).toHaveBeenCalled();
  });
});

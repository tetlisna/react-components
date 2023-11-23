import { ItemIterface } from '../../models/interfaces/interfaces';

export const ItemMock: ItemIterface = {
  name: 'Luke Skywalker',
  eye_color: 'blue',
  gender: 'male',
  birth_year: '19BBY',
  url: 'https://swapi.dev/api/people/1/',
};

export const ItemListMock: ItemIterface[] = [
  {
    name: 'Luke Skywalker',
    eye_color: 'blue',
    gender: 'male',
    birth_year: '19BBY',
    url: 'https://swapi.dev/api/people/1/',
  },
  {
    name: 'C-3PO',
    eye_color: 'yellow',
    gender: 'n/a',
    birth_year: '112BBY',
    url: 'https://swapi.dev/api/people/2/',
  },
  {
    name: 'R2-D2',
    eye_color: 'red',
    gender: 'n/a',
    birth_year: '33BBY',
    url: 'https://swapi.dev/api/people/3/',
  },
];

export const IMAGE_URL =
  'https://starwars-visualguide.com/assets/img/characters';

export const API_URL_PEOPLE = 'https://swapi.dev/api/people';

export enum ITEMS_PER_PAGE {
  Five = 5,
  Ten = 10,
  TwentyFive = 25,
  Forty = 40,
}
export const enum Routes {
  index = '/',
  list = '/list',
  id = ':id',
  page = 'page/',
  pagePage = 'page/:page',
  details = 'details/:id',
  all = '*',
  basename = '/react-components',
}

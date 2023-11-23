import { http, HttpResponse } from 'msw';
import { ItemMock } from './itemMock';
import { API_URL_PEOPLE } from '../../models/interfaces/constants';

export const handlers = [
  http.get(`${API_URL_PEOPLE}/1`, () => {
    return HttpResponse.json({
      ItemMock,
    });
  }),
];

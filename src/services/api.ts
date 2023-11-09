import { API_URL_PEOPLE } from '../interface/constants';
import { IParams } from '../interface/interfaces';

function addQueryParams(url: string, params: IParams): string {
  const urlObject = new URL(url);
  for (const [key, value] of Object.entries(params)) {
    urlObject.searchParams.append(key, value);
  }
  return urlObject.toString();
}

export const fetchData = async <T>(params: IParams): Promise<T> => {
  const query = addQueryParams(API_URL_PEOPLE, params);
  const res = await fetch(query, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const results = await res.json();
  if (!res.ok) {
    throw Error('Bad response');
  }

  return results;
};

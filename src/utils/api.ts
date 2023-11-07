import { IitemsList, ItemIterface } from '../interface/ItemInterface';
import { API_URL_PEOPLE } from '../interface/constants';

export const fetchData = async (
  search: string | null = '',
  pageNumber: number = 1
): Promise<IitemsList> => {
  const searchParam = search
    ? `?search=${search}&page=${pageNumber}`
    : `?page=${pageNumber}`;
  const res = await fetch(`${API_URL_PEOPLE}/${searchParam}`, {
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

export const fetchPerson = async (
  id: string | undefined
): Promise<ItemIterface> => {
  const res = await fetch(`${API_URL_PEOPLE}/${id}`, {
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

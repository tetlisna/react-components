import { IitemsList } from '../interface/ItemInterface';

const API_URL = `https://swapi.dev/api/people`;

export const fetchData = async (
  search: string | null = '',
  pageNumber: number = 1
): Promise<IitemsList> => {
  const searchParam = search
    ? `?search=${search}&page=${pageNumber}`
    : `?page=${pageNumber}`;
  const res = await fetch(`${API_URL}/${searchParam}`);
  const results = await res.json();
  if (!res.ok) {
    throw Error('Bad response');
  }

  return results;
};

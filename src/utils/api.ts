import { ItemIterface } from '../interface/ItemInterface';

const API_URL = `https://swapi.dev/api/people`;

export const fetchData = async (
  search: string | null = ''
): Promise<{ results: ItemIterface[] }> => {
  const searchParam = search ? `?search=${search}` : '';
  const res = await fetch(`${API_URL}/${searchParam}`);
  const results = await res.json();
  if (!res.ok) {
    throw Error('Bad response');
  }
  return results;
};

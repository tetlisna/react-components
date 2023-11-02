const API_URL = `https://swapi.dev/api/people`;

export const fetchData = async (
  search: string | null = ''
): Promise<Response> => {
  const searchParam = search ? `?search=${search}` : '';
  const res = await fetch(`${API_URL}/${searchParam}`);

  if (!res.ok) {
    throw Error('Bad response');
  }
  return res;
  // try {
  //   const response = await fetch(`${API_URL}/${searchParam}`);
  //   const dataJson = await response.json();
  //   return dataJson;
  // } catch (error) {
  //   throw Error('Bad response');
  // }
};

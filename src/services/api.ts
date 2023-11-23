// import { API_URL_PEOPLE } from '../models/interfaces/constants';
// import { IParams } from '../models/interfaces/interfaces';

// function addQueryParams(url: string, params: IParams): string {
//   const urlObject = new URL(url);
//   for (const [key, value] of Object.entries(params)) {
//     urlObject.searchParams.append(key, value);
//   }

//   return urlObject.toString();
// }

// export const fetchAllData = async (
//   params: IParams,
//   itemsPerPage: number = 10
// ) => {
//   let query = addQueryParams(API_URL_PEOPLE, params);
//   if (params.id) {
//     query = `${API_URL_PEOPLE}/${params.id}`;
//   }

//   const res = await fetch(query, {
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   });
//   const { count } = await res.json();

//   if (count === 0) return [];

//   const totalPages = Math.ceil(count / itemsPerPage);
//   const pages = await Promise.all(
//     [...new Array(totalPages).keys()].map(async (page) => {
//       const res = await fetch(`${API_URL_PEOPLE}?page=${page + 1}`);
//       return (await res.json()).results;
//     })
//   );

//   const allData = pages.flat();
//   return allData;
// };

// export const fetchData = async (params: IParams) => {
//   let query = addQueryParams(API_URL_PEOPLE, params);
//   if (params.id) {
//     query = `${API_URL_PEOPLE}/${params.id}`;
//   }

//   const res = await fetch(query, {
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   });
//   const item = await res.json();

//   return item;
// };

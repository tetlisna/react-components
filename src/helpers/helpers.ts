import { ItemIterface } from '../models/interfaces/interfaces';

export const searchByQuery = (
  data: ItemIterface[] | never[],
  searchQuery: string
) => {
  return data.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
};

export const paginate = (data: ItemIterface[] | [], itemsPerPage: number) => {
  const totalCount = data.length;
  const totalPages = Math.ceil(totalCount / itemsPerPage);
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);
  return pages;
};

export const slicedList = (
  data: ItemIterface[] | [],
  page: number,
  itemsPerPage: number
) => {
  const totalCount = data.length;
  const currentPage = page;
  const from = (currentPage - 1) * itemsPerPage;
  const to = itemsPerPage * currentPage;
  if (to > totalCount) {
    data = data.slice(from);
  } else {
    data = data.slice(from, to);
  }
  return data;
};

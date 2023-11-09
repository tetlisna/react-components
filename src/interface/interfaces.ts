export interface ItemIterface {
  name: string;
  url: string;
  gender: string;
  eye_color: string;
  birth_year: string;
  films: string[];
}
export interface ItemsList {
  next: string | null;
  previous: string | null;
  results: ItemIterface[];
  count: number;
}
export interface IParams {
  search?: string | '';
  page?: number;
  id?: number;
  hasError?: boolean;
}

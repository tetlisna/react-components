export interface ItemIterface {
  name: string;
  url: string;
  gender: string;
  eye_color: string;
  birth_year: string;
  films: string[];
}
export interface IitemsList {
  results: ItemIterface[];
  count: number;
}

import { Gender } from '../constants';

export type FormData = {
  firstName: string;
  lastName: string;
  age: number | null;
  gender1?: Gender.Female | Gender.Male | '';
  gender?: string;
  email: string;
  password: string;
  checkbox: boolean;
  image: string;
  // automplete: string;
};

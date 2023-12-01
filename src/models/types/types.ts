import { Gender } from '../constants';

export type FormDataUncontrolled = {
  firstName: string;
  lastName: string;
  age: string | null;
  gender: string;
  email: string;
  password: string;
  image: File | null;
};

export type FormDataControlled = {
  firstName: string;
  lastName: string;
  age: number | null;
  gender: Gender.Female | Gender.Male | '';
  email: string;
  password: string;
  image: '' | undefined;
};

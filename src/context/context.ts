import { FormEvent, createContext } from 'react';

const defaultContextValues: IRootContextProps = {
  searchQuery: '',
  handleSubmit: () => {},
};
interface IRootContextProps {
  searchQuery: string | '';
  handleSubmit: (e: FormEvent<Element>) => void;
}

export const RootContext =
  createContext<IRootContextProps>(defaultContextValues);

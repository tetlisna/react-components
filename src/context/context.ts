import { FormEvent, createContext } from 'react';

interface IRootContextProps {
  searchQuery: string;
  handleSubmit?: (e: FormEvent<Element>) => void;
}

export const RootContext = createContext<IRootContextProps | undefined>(
  undefined
);

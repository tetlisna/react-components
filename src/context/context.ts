import { Dispatch, FormEvent, SetStateAction, createContext } from 'react';
import { ItemIterface } from 'interfaces/interfaces';

const defaultContextValues: IRootContextProps = {
  searchQuery: '',
  handleSubmit: () => {},
  itemsPerPage: 10,
  setItemsPerPage: () => {},
  data: [],
  setData: () => {},
  setTotalCount: () => {},
  setError: () => {},
  setIsLoading: () => {},
  hasError: false,
  isLoading: true,
  totalCount: 0,
  allPeoples: [],
  setAllPeoples: () => {},
};
interface IRootContextProps {
  searchQuery: string;
  handleSubmit: (e: FormEvent<Element>) => void;
  itemsPerPage: number;
  setItemsPerPage: React.Dispatch<React.SetStateAction<number>>;
  setData: Dispatch<SetStateAction<ItemIterface[]>>;
  setTotalCount: Dispatch<SetStateAction<number>>;
  setError: Dispatch<SetStateAction<boolean>>;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  data: ItemIterface[];
  hasError: boolean;
  isLoading: boolean;
  totalCount: number;
  allPeoples: ItemIterface[];
  setAllPeoples: Dispatch<SetStateAction<ItemIterface[]>>;
}

export const RootContext =
  createContext<IRootContextProps>(defaultContextValues);

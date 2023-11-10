// import { ItemsList } from 'interfaces/interfaces';

import { FormEvent, createContext } from 'react';

interface IRootContextProps {
  searchQuery: string | null;
  handleSubmit?: (e: FormEvent) => void;
  //   itemsList: ItemsList | null;
}

export const RootContext = createContext<IRootContextProps | null>(null);

// export const ListItemsContext = createContext<IRootContextProps | null>(null);

import { ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import RootProvider from '../context/RootProvider';

const itemsRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: RootProvider, ...options });

export * from '@testing-library/react';
export { itemsRender as render };

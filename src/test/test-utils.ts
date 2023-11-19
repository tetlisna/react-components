import { ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';

const itemsRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { ...options });

export * from '@testing-library/react';
export { itemsRender as render };

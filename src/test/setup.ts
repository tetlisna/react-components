// import '@testing-library/jest-dom/vitest';
// import { cleanup } from '@testing-library/react';
// import { afterEach } from 'vitest';

// afterEach(() => {
//   cleanup();
// });
import * as matchers from '@testing-library/jest-dom/matchers';
import { expect, afterEach, afterAll, beforeAll } from 'vitest';
import { cleanup } from '@testing-library/react';
import { server } from './mocks/server';

expect.extend(matchers);

beforeAll(() => {
  server.listen({
    onUnhandledRequest: 'error',
  });
});
afterEach(() => {
  server.resetHandlers();
  cleanup();
});

afterAll(() => {
  server.close();
});

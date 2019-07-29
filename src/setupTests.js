/* eslint-disable no-console */
// react-testing-library renders your components to document.body,
// this will ensure they're removed after each test.
import '@testing-library/react/cleanup-after-each';
// this adds jest-dom's custom assertions
import '@testing-library/jest-dom/extend-expect';
import '@babel/polyfill';

// little hack to silence a warning until CRA adds full support to styles-jsx
const originalError = console.error;
beforeAll(() => {
  console.error = (...args) => {
    if (/Warning.*for a non-boolean attribute/.test(args[0])) {
      return;
    }

    // https://github.com/testing-library/react-testing-library/issues/281
    if (/Warning.*not wrapped in act/.test(args[0])) {
      return;
    }
    originalError.call(console, ...args);
  };
});

afterAll(() => {
  console.error = originalError;
});

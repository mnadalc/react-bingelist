This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
Based on React v16.8, implementing hooks and Context API to share data between components and be accessible by them.

Lodash is used as an utility library that makes it easy to manipulate arrays and objects, as well as functions, strings, etc.

For unit and integration testing, Jest is used.
For end to end testing, the project runs Cypress.

In order to manipulate DOM elements on top of react-dom and react-dom/test-utils, react-testing-library is used in conjunction with Jest and Cypress.

For component styling and responsiveness, the app uses styled-jsx and reactstrap.

## Available Scripts

In the project directory, you can run:

### `docker-compose up`

Runs the docker service.<br>
The service is available at `http://localhost:4000`

### `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `yarn test`

Launches the Jest test runner in the interactive watch mode.

### `yarn cypress open`

Runs Cypress for end to end testing with the browser.

### `yarn cy:run`

Opens Cypress in headless mode to don't see the browser or Cypress application running.
Runs end to end tests automatically.

## More about

[React documentation](https://reactjs.org/).

[Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

[Lodash](https://lodash.com/).

[Jest documentation](https://jestjs.io/docs/en/getting-started).

[Cypress](https://jestjs.io/docs/en/getting-started).

[React testing library](https://jestjs.io/docs/en/getting-started).

[Reactstrap](https://reactstrap.github.io/).

[Styled JSX](https://github.com/zeit/styled-jsx).

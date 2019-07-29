import React from 'react';
import { fireEvent } from '@testing-library/react';
import App from '../App';
import renderWithRouter from '../../../test/react-router-mock';

describe('App component', () => {
  it('full app rendering/navigating', () => {
    const { container, getByAltText } = renderWithRouter(<App />);

    expect(container.innerHTML).toMatch(
      /please enter a genre to find movies */i
    );
    const leftClick = { button: 0 };
    fireEvent.click(getByAltText(/favorites link page/i), leftClick);

    expect(container.innerHTML).toMatch(/ * no favourites movies!/i);
  });

  it('loading favourites directly', () => {
    const { container, getByTestId } = renderWithRouter(<App />, {
      route: '/favourites',
    });

    expect(container.innerHTML).toMatch(/ * no favourites movies!/i);

    const leftClick = { button: 0 };
    fireEvent.click(getByTestId('backIcon'), leftClick);

    expect(container.innerHTML).toMatch(
      /please enter a genre to find movies */i
    );
  });

  it('loading on a bad page', () => {
    const { container } = renderWithRouter(<App />, {
      route: '/bad-page',
    });

    expect(container.innerHTML).toMatch(
      /please enter a genre to find movies */i
    );
  });
});

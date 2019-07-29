import React from 'react';
import Favourites from '../Favourites';
import renderWithRouter from '../../../test/react-router-mock';

describe('Favourites', () => {
  it('is empty when there is no favourites', () => {
    const { getByTestId } = renderWithRouter(<Favourites />);

    const noFavouritesText = getByTestId('noFavouritesText');
    expect(noFavouritesText.textContent).toBe(`There's no favourites movies!`);
  });
});

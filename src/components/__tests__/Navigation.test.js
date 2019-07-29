import React from 'react';
import { fireEvent } from '@testing-library/react';
import Navigation from '../Navigation';
import * as Routes from '../../constants/Routes';
import renderWithRouter from '../../../test/react-router-mock';

describe('Navigation', () => {
  it('BingeList Navbar', () => {
    const { getByText, getByAltText } = renderWithRouter(<Navigation />);

    const title = getByText(/my binge list/i);
    expect(title).toBeTruthy();

    const favouritesIcon = getByAltText(/favorites link page/i);
    const leftClick = { button: 0 };

    fireEvent.click(favouritesIcon, leftClick);
    expect(getByText(/favourite movies/i)).toBeTruthy();
  });

  it('Favourites Navbar', () => {
    const { getByText, getByTestId } = renderWithRouter(<Navigation />, {
      route: Routes.FAVOURITES,
    });

    const title = getByText(/favourite movies/i);
    expect(title).toBeTruthy();

    const backIcon = getByTestId('backIcon');
    const leftClick = { button: 0 };

    fireEvent.click(backIcon, leftClick);
    expect(getByText(/my binge list/i)).toBeTruthy();
  });
});

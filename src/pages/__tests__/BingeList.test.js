import React from 'react';
import { fireEvent } from '@testing-library/react';
import BingeList from '../BingeList';
import renderWithRouter from '../../../test/react-router-mock';
import { getFilmsByGenre as mockGetFilmsByGenre } from '../../utils/fetch';
import { MoviesProvider } from '../../utils/hooks/MoviesContext';

jest.mock('../../utils/fetch', () => {
  return {
    getFilmsByGenre: jest.fn(() => {
      [];
    }),
  };
});

describe('BingeList', () => {
  it('empty when not searching', () => {
    const { getByTestId } = renderWithRouter(<BingeList />);

    const searchByGenre = getByTestId('infoBingeList');
    expect(searchByGenre).toHaveTextContent(
      'Please enter a genre to find movies e.g. Action'
    );
  });

  it('navbar shows title and favourites icon', () => {
    const { getByText, getByAltText } = renderWithRouter(<BingeList />);

    const title = getByText(/my binge list/i);
    expect(title).toBeTruthy();

    const favouritesIcon = getByAltText(/favorites link page/i);
    expect(favouritesIcon).toBeTruthy();
  });

  it('fetches movies from server', () => {
    const setMovies = jest.fn();
    const movies = [];

    const { getByTestId, getByText } = renderWithRouter(
      <MoviesProvider value={{ movies, setMovies }}>
        <BingeList />
      </MoviesProvider>
    );

    const searchbar = getByTestId('searchbar');
    const genre = 'Action';
    fireEvent.change(searchbar, { target: { value: genre } });

    const button = getByText(/search/i);
    fireEvent.click(button);

    expect(mockGetFilmsByGenre).toHaveBeenCalledTimes(1);
    expect(mockGetFilmsByGenre).toHaveBeenCalledWith(genre);
  });

  it(`shows if genre doesn't exist`, () => {
    const setMovies = jest.fn();
    const movies = [];

    const { getByTestId, getByText } = renderWithRouter(
      <MoviesProvider value={{ movies, setMovies }}>
        <BingeList />
      </MoviesProvider>
    );

    const searchbar = getByTestId('searchbar');
    const genre = 'test';
    fireEvent.change(searchbar, { target: { value: genre } });

    const button = getByText(/search/i);
    fireEvent.click(button);

    expect(mockGetFilmsByGenre).toHaveBeenCalledTimes(2);
    expect(mockGetFilmsByGenre).toHaveBeenCalledWith(genre);
  });
});

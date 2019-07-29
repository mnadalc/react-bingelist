import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import faker from 'faker';
import Thumbnail from '../Thumbnail';
import { buildMovie } from '../../../test/generate';
import truncate from 'lodash/truncate';
import map from 'lodash/map';

import { FavouritesProvider } from '../../utils/hooks/FavouritesContext';

async function renderThumbnail({
  movieId = faker.random.number(9999),
  movie = buildMovie({ id: movieId }),
} = {}) {
  const utils = render(<Thumbnail movie={movie} />);

  return {
    ...utils,
    movie,
  };
}

describe('Thumbnail', () => {
  it('renders movie information', async () => {
    const { getByText, getByAltText, movie } = await renderThumbnail();

    const genres = map(movie.genres, 'name').join(', ');
    getByAltText(/add favorite icon/i);
    getByAltText(/image of/i);
    getByText(movie.title);
    getByAltText(/rating star icon/i);
    getByText(`${movie.rating}`);
    getByText(genres);
    getByAltText(/calendar icon/i);
    getByText(movie.releaseDate);
    getByText(truncate(movie.overview, { length: 120, separator: /,? +/ }));
    getByText(/more info/i);
  });

  it('displays a star if rating is above median', () => {
    const median = 6.5;
    const movie = buildMovie({
      rating: 7,
    });

    const { getByAltText } = render(
      <Thumbnail movie={movie} median={median} />
    );

    const star = getByAltText(/above median star icon/i);
    expect(star).toBeTruthy();
  });

  it(`doesn't display a start if rating is under median `, () => {
    const median = 7;
    const movie = buildMovie({
      rating: 6.5,
    });

    const { queryByAltText } = render(
      <Thumbnail movie={movie} median={median} />
    );

    const star = queryByAltText(/above median star icon/i);
    expect(star).toBeNull();
  });

  it(`shows add favourite icon if movie isn't in favourites`, () => {
    const addFavourite = jest.fn();
    const removeFavourite = jest.fn();
    const movie = buildMovie();
    const favourites = [buildMovie()];

    const { getByAltText, queryByAltText } = render(
      <FavouritesProvider value={{ favourites, addFavourite, removeFavourite }}>
        <Thumbnail movie={movie} />
      </FavouritesProvider>
    );

    const addFavoriteImg = getByAltText(/add favorite icon/i);
    expect(addFavoriteImg).toBeTruthy();

    const removeFavoriteImg = queryByAltText(/remove favorite icon/i);
    expect(removeFavoriteImg).toBeNull();

    const leftClick = { button: 0 };

    fireEvent.click(addFavoriteImg, leftClick);
    expect(addFavourite).toHaveBeenCalledTimes(1);
    expect(removeFavourite).toHaveBeenCalledTimes(0);
  });

  it('shows remove favourite icon if movie is in favourites', () => {
    const addFavourite = jest.fn();
    const removeFavourite = jest.fn();
    const movie = buildMovie();
    const favourites = [movie];

    const { getByAltText, queryByAltText } = render(
      <FavouritesProvider value={{ favourites, addFavourite, removeFavourite }}>
        <Thumbnail movie={movie} />
      </FavouritesProvider>
    );

    const removeFavoriteImg = getByAltText(/remove favorite icon/i);
    expect(removeFavoriteImg).toBeTruthy();

    const addFavoriteImg = queryByAltText(/add favorite icon/i);
    expect(addFavoriteImg).toBeNull();

    const leftClick = { button: 0 };

    fireEvent.click(removeFavoriteImg, leftClick);
    expect(removeFavourite).toHaveBeenCalledTimes(1);
    expect(addFavourite).toHaveBeenCalledTimes(0);
  });
});

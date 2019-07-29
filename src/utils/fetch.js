/* eslint-disable no-console */
import request from '../shared/api';
import capitalize from 'lodash/capitalize';
import head from 'lodash/head';
import words from 'lodash/words';
import get from 'lodash/get';
import isEmpty from 'lodash/isEmpty';

const getFilmsByGenre = async (req = '', offset = 0, limit = 0) => {
  try {
    const getTotalMovies = await request(
      'get',
      `movies?genre=${capitalize(
        head(words(req.trim()))
      )}&offset=${offset}&limit=${limit}`
    );

    if (get(getTotalMovies, 'data.error')) {
      return `No results for genre "${req}"`;
    }

    const moviesLength = get(getTotalMovies, 'data.metadata.total', 0);

    const res = await request(
      'get',
      `movies?genre=${capitalize(
        head(words(req.trim()))
      )}&offset=${offset}&limit=${moviesLength}`
    );

    const films = get(res, 'data.data', []);

    return !isEmpty(films) ? [...films] : `No results for genre "${req}"`;
  } catch (e) {
    console.error(e);
  }
};

// Doesn't work due to PATCH is not allowed by Access-Control-Allow-Methods

/*
const getFavouritesFilms = async () => {
  try {
    const res = await request('get', 'favorites');

    const favourites = get(res, 'data', []);
    return !isEmpty(favourites)
      ? [...favourites]
      : `You don't have any favourite movie!`;
  } catch (e) {
    console.error(e);
  }
};

const patchFavouritesFilms = async body => {
  try {
    const res = await request('patch', 'favorites', {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
    console.log(res);
  } catch (e) {
    console.error(e);
  }
};

*/
export { getFilmsByGenre };

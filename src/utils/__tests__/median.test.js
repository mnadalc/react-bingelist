import median from '../median';
import { buildMovie } from '../../../test/generate';

const buildArrayOfMovies = medianValues => {
  const movies = [];

  for (let i = 0; i < medianValues.length; i++) {
    movies.push(
      buildMovie({
        rating: medianValues[i],
      })
    );
  }

  return movies;
};

describe('median', () => {
  it(`is the same if rating doesn't change`, () => {
    const medianValues = [7, 7, 7, 7, 7, 7, 7];
    const movies = buildArrayOfMovies(medianValues);

    expect(median(movies)).toBe(7);
  });

  it(`odd set of numbers`, () => {
    const medianValues = [1, 3, 3, 6, 7, 8, 9];
    const movies = buildArrayOfMovies(medianValues);
    expect(median(movies)).toBe(6);
  });

  it(`even set of numbers`, () => {
    const medianValues = [1, 2, 3, 4, 5, 6, 8, 9];
    const movies = buildArrayOfMovies(medianValues);

    expect(median(movies)).toBe(4.5);
  });
});

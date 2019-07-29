import faker from 'faker';

const randomArray = (schema, min = 1, max) => {
  max = max || min;
  return Array.from({ length: faker.random.number({ min, max }) }).map(() =>
    Object.keys(schema).reduce((entity, key) => {
      entity[key] = faker.fake(schema[key]);
      return entity;
    }, {})
  );
};

const buildMovie = overrides => ({
  id: faker.random.number(9999),
  title: faker.lorem.words(),
  rating: faker.random.number(10),
  overview: faker.lorem.paragraph(),
  releaseDate: faker.date
    .past(20)
    .getFullYear()
    .toString(),
  genres: randomArray(
    {
      id: '{{random.number(30)}}',
      name: '{{lorem.word}}',
    },
    1,
    5
  ),
  poster: {
    fullPath: faker.image.imageUrl(),
  },
  ...overrides,
});

export { buildMovie };

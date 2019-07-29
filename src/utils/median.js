import map from 'lodash/map';

const median = movies => {
  const mapId = map(movies, 'rating');
  const order = mapId.sort();

  const median =
    order.length % 2 === 0
      ? (order[order.length / 2] + order[order.length / 2 - 1]) / 2
      : order[(order.length - 1) / 2];

  return median;
};

export default median;

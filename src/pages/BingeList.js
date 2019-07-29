import React, { useState, useContext, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';

import Searchbar from '../components/Searchbar';
import Thumbnail from '../components/Thumbnail';
import { getFilmsByGenre } from '../utils/fetch';

import isEmpty from 'lodash/isEmpty';
import isString from 'lodash/isString';
import map from 'lodash/map';
import MoviesContext from '../utils/hooks/MoviesContext';
import getMedian from '../utils/median';
import Navigation from '../components/Navigation';

const BingeList = () => {
  const { movies, setMovies } = useContext(MoviesContext);
  const [median, setMedian] = useState(0);
  const [text, setText] = useState(
    'Please enter a genre to find movies e.g. Action'
  );

  const handleSearch = async category => {
    try {
      const res = await getFilmsByGenre(category);
      if (!isString(res) && !isEmpty(res)) {
        setMovies([...res]);
      } else {
        setMovies([]);
        setText(res);
      }
    } catch (e) {
      console.error('Exception', e);
    }
  };

  useEffect(() => {
    if (!isEmpty(movies)) {
      const median = getMedian(movies);
      setMedian(median);
    }
  }, [movies, setMedian]);

  return (
    <div className='binge-list-view'>
      <Navigation />
      <Container className='movies-container'>
        <Searchbar onSearch={handleSearch} />
        <Row>
          {!isEmpty(movies) ? (
            map(movies, (movie, index) => (
              <Thumbnail
                movie={movie}
                detailInfo={movie}
                median={median}
                key={`thumbnail-${movie.id}-${index}`}
              />
            ))
          ) : (
            <Col className='text-info-page' data-testid='infoBingeList'>
              <h3>{text}</h3>
            </Col>
          )}
        </Row>
      </Container>
      <style jsx>
        {`
          .binge-list-view {
            height: 100%;
            color: white;
          }
        `}
      </style>
    </div>
  );
};

export default BingeList;

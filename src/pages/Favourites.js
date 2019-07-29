import React, { useContext } from 'react';
import { Row, Col, Container } from 'reactstrap';
import Thumbnail from '../components/Thumbnail';
import FavouritesContext from '../utils/hooks/FavouritesContext';
import isEmpty from 'lodash/isEmpty';
import map from 'lodash/map';
import Navigation from '../components/Navigation';

const Favourites = () => {
  const { favourites } = useContext(FavouritesContext);

  return (
    <>
      <Navigation />
      <Container>
        <Row>
          {!isEmpty(favourites) ? (
            map(favourites, movie => (
              <Thumbnail
                movie={movie}
                detailInfo={movie}
                key={`thumbnail-${movie.id}`}
              />
            ))
          ) : (
            <Col className='text-info-page'>
              <h3 data-testid='noFavouritesText'>
                There&apos;s no favourites movies!
              </h3>
            </Col>
          )}
        </Row>
      </Container>
    </>
  );
};

export default Favourites;
